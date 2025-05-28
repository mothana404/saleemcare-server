// src/services/geolocation.service.js
/**
 * Service for handling geolocation and proximity calculations
 */
class GeolocationService {
  /**
   * Calculate the distance between two points in kilometers using the Haversine formula
   * @param {number} lat1 - Latitude of first point
   * @param {number} lon1 - Longitude of first point
   * @param {number} lat2 - Latitude of second point
   * @param {number} lon2 - Longitude of second point
   * @returns {number} - Distance in kilometers
   */
  calculateDistance(lat1, lon1, lat2, lon2) {
    // Earth's radius in kilometers
    const R = 6371;
    
    // Convert latitude and longitude from degrees to radians
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    
    // Haversine formula
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    
    return distance;
  }
  
  /**
   * Convert degrees to radians
   * @param {number} degrees - Angle in degrees
   * @returns {number} - Angle in radians
   */
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  /**
   * Find the nearest doctors based on patient location
   * @param {Object} prisma - Prisma client
   * @param {number} patientLat - Patient latitude
   * @param {number} patientLong - Patient longitude
   * @param {number} maxDistance - Maximum distance in kilometers (optional)
   * @param {number} limit - Maximum number of doctors to return (optional)
   * @returns {Array} - Array of doctors sorted by proximity
   */
  async findNearestDoctors(prisma, patientLat, patientLong, maxDistance = 50, limit = 10) {
    try {
      // Get all active doctors with location data
      const doctors = await prisma.user.findMany({
        where: {
          role: 'DOCTOR',
          isActive: true,
          doctorInfo: {
            latitude: { not: null },
            longitude: { not: null },
          },
        },
        include: {
          doctorInfo: true,
        },
      });
      
      // Calculate distance for each doctor
      const doctorsWithDistance = doctors.map(doctor => {
        const distance = this.calculateDistance(
          patientLat,
          patientLong,
          doctor.doctorInfo.latitude,
          doctor.doctorInfo.longitude
        );
        
        return {
          ...doctor,
          distance,
        };
      });
      
      // Filter doctors within max distance if specified
      const filteredDoctors = doctorsWithDistance.filter(doctor => 
        doctor.distance <= (doctor.doctorInfo.maxDistance || maxDistance)
      );
      
      // Sort by distance and limit results
      return filteredDoctors
        .sort((a, b) => a.distance - b.distance)
        .slice(0, limit);
    } catch (error) {
      console.error('Error finding nearest doctors:', error);
      throw error;
    }
  }
  
  /**
   * Assign the nearest doctor to a patient
   * @param {Object} prisma - Prisma client
   * @param {string} patientId - Patient ID
   * @returns {Object} - Assigned doctor or null
   */
  async assignNearestDoctor(prisma, patientId) {
    try {
      // Get patient location
      const patient = await prisma.user.findUnique({
        where: { id: patientId },
        include: { patientInfo: true },
      });
      
      if (!patient || !patient.patientInfo || !patient.patientInfo.latitude || !patient.patientInfo.longitude) {
        console.warn(`Patient ${patientId} has no location data`);
        return null;
      }
      
      // Find nearest doctor
      const nearestDoctors = await this.findNearestDoctors(
        prisma,
        patient.patientInfo.latitude,
        patient.patientInfo.longitude
      );
      
      if (nearestDoctors.length === 0) {
        console.warn(`No doctors found near patient ${patientId}`);
        return null;
      }
      
      // Assign doctor to patient
      const updatedPatient = await prisma.user.update({
        where: { id: patientId },
        data: { doctorId: nearestDoctors[0].id },
        include: {
          assignedDoctor: {
            include: { doctorInfo: true }
          }
        }
      });
      
      return updatedPatient.assignedDoctor;
    } catch (error) {
      console.error('Error assigning nearest doctor:', error);
      throw error;
    }
  }
}

module.exports = new GeolocationService();