const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/module.controller');
const authMiddleware = require('../middleware/auth.middleware');


// Public routes
router.post('/create', authMiddleware.verifyToken, moduleController.createModule);
router.get('/', authMiddleware.verifyToken, moduleController.getModule);
router.get('/get/:id', authMiddleware.verifyToken, moduleController.getModuleById);
router.put('/update/:id', authMiddleware.verifyToken, moduleController.updateModule);
router.delete('/delete/:id', authMiddleware.verifyToken, moduleController.deleteModule);

// routes module content
router.post('/content/create', authMiddleware.verifyToken, moduleController.createModuleContent);
router.get('/content/', authMiddleware.verifyToken, moduleController.getContents);
router.get('/content/get/:id', authMiddleware.verifyToken, moduleController.getContentsByModuleId);
router.put('/content/update/:id', authMiddleware.verifyToken, moduleController.updateModuleContent);
router.delete('/content/delete/:id', authMiddleware.verifyToken, moduleController.deleteModuleContent);

module.exports = router;
