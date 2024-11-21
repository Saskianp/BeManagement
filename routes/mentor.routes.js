const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentor.controller');
const authMiddleware = require('../middleware/auth.middleware');


// Public routes
router.post('/create', authMiddleware.verifyToken, mentorController.createMentor);
router.get('/', authMiddleware.verifyToken, mentorController.getMentor);
router.get('/get/:id', authMiddleware.verifyToken, mentorController.getMentorById);
router.put('/update/:id', authMiddleware.verifyToken, mentorController.updateMentor);
router.delete('/delete/:id', authMiddleware.verifyToken, mentorController.deleteMentor);

module.exports = router;
