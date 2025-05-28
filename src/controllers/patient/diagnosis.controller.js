const prisma = require("../../config/prisma");
const aiService = require("../../services/ai.service");
const notificationService = require("../../services/notification.service");
const { successResponse } = require("../../utils/response");
const { io } = require("../../socketio");

exports.createDiagnosis = async (req, res, next) => {
  try {
    const { symptoms } = req.body;
    const patientId = req.user.id;
    
    // Get diagnosis from AI
    const aiDiagnosis = await aiService.getDiagnosis(symptoms);
    
    // Save diagnosis to database
    const diagnosis = await prisma.diagnosis.create({
      data: {
        symptoms,
        aiDiagnosis: aiDiagnosis.diagnosis,
        aiConfidence: aiDiagnosis.confidence,
        patientId,
        status: 'PENDING' // PENDING, REVIEWED, CONFIRMED
      }
    });
    
    // Find doctors to notify
    const doctors = await prisma.user.findMany({
      where: { role: 'DOCTOR' },
      select: { id: true }
    });
    
    // Notify doctors through socket and push notification
    for (const doctor of doctors) {
      // Real-time notification through socket
      io.to(`user:${doctor.id}`).emit('new:diagnosis', {
        diagnosisId: diagnosis.id,
        patientId,
        createdAt: diagnosis.createdAt
      });
      
      // Create push notification
      await notificationService.createNotification(
        doctor.id,
        'New Diagnosis Request',
        `A patient has submitted symptoms for diagnosis`,
        { 
          type: 'NEW_DIAGNOSIS',
          diagnosisId: diagnosis.id
        }
      );
    }
    
    // Notify patient of submission
    await notificationService.createNotification(
      patientId,
      'Diagnosis Submitted',
      `Your symptoms have been submitted for diagnosis`,
      { 
        type: 'DIAGNOSIS_SUBMITTED',
        diagnosisId: diagnosis.id
      }
    );
    
    return successResponse(res, 201, {
      diagnosis: {
        id: diagnosis.id,
        symptoms: diagnosis.symptoms,
        aiDiagnosis: diagnosis.aiDiagnosis,
        createdAt: diagnosis.createdAt,
        status: diagnosis.status
      }
    }, 'Diagnosis created successfully');
  } catch (error) {
    next(error);
  }
};

exports.getDiagnosisByPatient = async (req, res, next) => {
  try {
    const diagnoses = await prisma.diagnosis.findMany({
      where: { patientId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });
    
    return successResponse(res, 200, { diagnoses }, 'Diagnoses retrieved successfully');
  } catch (error) {
    next(error);
  }
};

exports.getDiagnosisByDoctor = async (req, res, next) => {
  try {
    // Ensure the requester is a doctor
    if (req.user.role !== 'DOCTOR') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }
    
    const diagnoses = await prisma.diagnosis.findMany({
      where: { 
        OR: [
          { status: 'PENDING' },
          { doctorId: req.user.id }
        ]
      },
      include: {
        patient: {
          select: {
            id: true,
            userName: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    
    return successResponse(res, 200, { diagnoses }, 'Diagnoses retrieved successfully');
  } catch (error) {
    next(error);
  }
};

exports.reviewDiagnosis = async (req, res, next) => {
  try {
    const { diagnosisId } = req.params;
    const { doctorDiagnosis, notes, status } = req.body;
    
    // Ensure the requester is a doctor
    if (req.user.role !== 'DOCTOR') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }
    
    // Update the diagnosis
    const diagnosis = await prisma.diagnosis.update({
      where: { id: diagnosisId },
      data: {
        doctorDiagnosis,
        doctorNotes: notes,
        doctorId: req.user.id,
        reviewedAt: new Date(),
        status
      },
      include: {
        patient: {
          select: {
            id: true,
            userName: true,
            deviceToken: true
          }
        }
      }
    });
    
    // Notify patient through socket and push notification
    io.to(`user:${diagnosis.patientId}`).emit('diagnosis:reviewed', {
      diagnosisId: diagnosis.id,
      status
    });
    
    // Create notification
    await notificationService.createNotification(
      diagnosis.patientId,
      'Diagnosis Reviewed',
      `A doctor has reviewed your diagnosis request`,
      { 
        type: 'DIAGNOSIS_REVIEWED',
        diagnosisId: diagnosis.id
      }
    );
    
    return successResponse(res, 200, { diagnosis }, 'Diagnosis reviewed successfully');
  } catch (error) {
    next(error);
  }
};