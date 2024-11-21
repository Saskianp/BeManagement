const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Protected routes
router.get('/profile', authMiddleware.verifyToken, userController.getUserProfile);
router.put('/profile', authMiddleware.verifyToken, userController.updateUserProfile);

module.exports = router;
