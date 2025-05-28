const prisma = require("../../config/prisma");
const aiService = require("../../services/ai.service");
const notificationService = require("../../services/notification.service");
const geolocationService = require("../../services/geolocation.service");
const { io } = require("../../socketio");
const { successResponse } = require("../../utils/response");

/**
 * Submit daily symptoms and get AI diagnosis
 */
exports.submitDailySymptoms = async (req, res, next) => {
  try {
    const { symptoms } = req.body;
    const patientId = req.user.id;
    
    // Get diagnosis from AI
    const aiDiagnosis = await aiService.getDiagnosis(symptoms);
    
    // Get patient's current assigned doctor or assign nearest
    let patient = await prisma.user.findUnique({
      where: { id: patientId },
      include: {
        assignedDoctor: true,
        patientInfo: true
      }
    });
    
    // If patient has no assigned doctor, find the nearest one
    let doctorId = patient.doctorId;
    if (!doctorId && patient.patientInfo?.latitude && patient.patientInfo?.longitude) {
      const nearestDoctor = await geolocationService.assignNearestDoctor(prisma, patientId);
      doctorId = nearestDoctor?.id;
    }
    
    // Save symptoms and AI diagnosis
    const symptomRecord = await prisma.symptomRecord.create({
      data: {
        patientId,
        symptoms,
        aiDiagnosis: aiDiagnosis.diagnosis,
        aiConfidence: aiDiagnosis.confidence,
        doctorId,  // May be null if no doctor could be assigned
        status: 'PENDING'
      },
      include: {
        patient: {
          include: {
            patientInfo: true
          }
        },
        doctor: {
          include: {
            doctorInfo: true
          }
        }
      }
    });
    
    // If we have a doctor, notify them
    if (doctorId) {
      // Real-time notification through socket
      io.to(`user:${doctorId}`).emit('new:diagnosis', {
        recordId: symptomRecord.id,
        patientName: patient.patientInfo?.fullName || patient.userName,
        symptoms,
        createdAt: symptomRecord.createdAt
      });
      
      // Create push notification for doctor
      await notificationService.createNotification({
        userId: doctorId,
        title: 'New Patient Symptoms',
        message: `A patient has submitted new symptoms for review`,
        data: JSON.stringify({ 
          type: 'NEW_SYMPTOMS',
          recordId: symptomRecord.id,
          patientId
        })
      });
    } else {
      // No doctor assigned - send to admin or all doctors
      const admins = await prisma.user.findMany({
        where: { role: 'ADMIN' }
      });
      
      for (const admin of admins) {
        await notificationService.createNotification({
          userId: admin.id,
          title: 'Patient Needs Doctor Assignment',
          message: `A patient has submitted symptoms but has no doctor assigned`,
          data: JSON.stringify({ 
            type: 'NO_DOCTOR_ASSIGNED',
            recordId: symptomRecord.id,
            patientId
          })
        });
      }
    }
    
    // Notify patient of submission
    await notificationService.createNotification({
      userId: patientId,
      title: 'Symptoms Submitted',
      message: doctorId 
        ? `Your symptoms have been sent to your doctor for review` 
        : `Your symptoms have been recorded. We're finding a doctor for you.`,
      data: JSON.stringify({ 
        type: 'SYMPTOMS_SUBMITTED',
        recordId: symptomRecord.id,
        hasDoctorAssigned: !!doctorId
      })
    });
    
    return successResponse(res, 201, {
      record: {
        id: symptomRecord.id,
        symptoms: symptomRecord.symptoms,
        aiDiagnosis: symptomRecord.aiDiagnosis,
        createdAt: symptomRecord.createdAt,
        status: symptomRecord.status,
        doctorAssigned: !!doctorId
      }
    }, 'Symptoms submitted successfully');
  } catch (error) {
    next(error);
  }
};

/**
 * Get patient's symptom history
 */
exports.getPatientSymptomHistory = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const records = await prisma.symptomRecord.findMany({
      where: { patientId: req.user.id },
      orderBy: { createdAt: 'desc' },
      skip,
      take: parseInt(limit),
      include: {
        doctor: {
          select: {
            id: true,
            userName: true,
            doctorInfo: {
              select: {
                fullName: true,
                specialization: true
              }
            }
          }
        }
      }
    });
    
    const total = await prisma.symptomRecord.count({
      where: { patientId: req.user.id }
    });
    
    return successResponse(res, 200, { 
      records,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    }, 'Symptom history retrieved successfully');
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific symptom record
 */
exports.getSymptomRecord = async (req, res, next) => {
  try {
    const { recordId } = req.params;
    
    const record = await prisma.symptomRecord.findUnique({
      where: { id: recordId },
      include: {
        doctor: {
          select: {
            id: true,
            userName: true,
            doctorInfo: {
              select: {
                fullName: true,
                specialization: true,
                phoneNumber: true
              }
            }
          }
        }
      }
    });
    
    if (!record) {
      return res.status(404).json({
        success: false,
        message: 'Symptom record not found'
      });
    }
    
    // Ensure only the patient or assigned doctor can view the record
    if (record.patientId !== req.user.id && record.doctorId !== req.user.id && req.user.role !== 'ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }
    
    return successResponse(res, 200, { record }, 'Symptom record retrieved successfully');
  } catch (error) {
    next(error);
  }
};

/**
 * Get patient's latest symptom record
 */
exports.getLatestSymptomRecord = async (req, res, next) => {
  try {
    const record = await prisma.symptomRecord.findFirst({
      where: { patientId: req.user.id },
      orderBy: { createdAt: 'desc' },
      include: {
        doctor: {
          select: {
            id: true,
            userName: true,
            doctorInfo: {
              select: {
                fullName: true,
                specialization: true
              }
            }
          }
        }
      }
    });
    
    if (!record) {
      return successResponse(res, 200, { record: null }, 'No symptom records found');
    }
    
    return successResponse(res, 200, { record }, 'Latest symptom record retrieved successfully');
  } catch (error) {
    next(error);
  }
};