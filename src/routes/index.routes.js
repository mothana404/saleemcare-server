const express = require('express');
const patientAuthRoutes = require('./patient/auth.routes');
const aiService = require('../services/ai.service');

const router = express.Router();

router.use('/patient/auth', patientAuthRoutes);

// Test endpoint for AI chat
router.get('/test', async (req, res) => {
    try {
        // const { message } = req.body;
        // if (!message) {
        //     return res.status(400).json({
        //         status: 'error',
        //         message: 'Message is required'
        //     });
        // }

        // const response = await aiService.generateResponse(message);
        
        res.json({
            status: 'success',
            data: {
                response: "welcome to saleem care"
            }
        });
    } catch (error) {
        console.error('AI Chat Error:', error);
        res.status(500).json({
            status: 'error',
            message: error.message || 'Failed to generate response'
        });
    }
});

module.exports = router;