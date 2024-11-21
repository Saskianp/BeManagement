const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participant.controller');
const authMiddleware = require('../middleware/auth.middleware');


// Public routes
router.post('/create', authMiddleware.verifyToken, participantController.createParticipant);
router.get('/', authMiddleware.verifyToken, participantController.getParticipants);
router.get('/get/:id', authMiddleware.verifyToken, participantController.getParticipantById);
router.put('/update/:id', authMiddleware.verifyToken, participantController.updateParticipant);
router.delete('/delete/:id', authMiddleware.verifyToken, participantController.deleteParticipant);

module.exports = router;
