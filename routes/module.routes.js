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

//Module
/**
 * @swagger
 * components:
 *   schemas:
 *     Module:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: name user
 *         email:
 *           type: string
 *           description: email user
 *       example:
 *         name: "Saskia"
 *         email: "saskia@gmail.com"
 */


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * /api/module/:
 *    get:
 *     summary: Get mentor
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The mentor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 name:
 *                   type: string
 *                   example: "Saskia"
 *                 email:
 *                   type: string
 *                   example: "saskia@gmail.com"
 *                 createdAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *                 updatedAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * /api/module/get/{id}:
 *    get:
 *     summary: Get mentor
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The mentor Id
 *     responses:
 *       200:
 *         description: The mentor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 name:
 *                   type: string
 *                   example: "Saskia"
 *                 email:
 *                   type: string
 *                   example: "saskia@gmail.com"
 *                 createdAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *                 updatedAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */


/**
 * @swagger
 *  components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /api/module/create:
 *   post:
 *     summary: Create Mentor
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 name:
 *                   type: string
 *                   example: "Saskia"
 *                 email:
 *                   type: string
 *                   example: "saskia@gmail.com"
 *                 createdAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *                 updatedAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *       500:
 *         description: Some server error
 */


/**
 * @swagger
 *  components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * /api/module/update/{id}:
 *   put:
 *     summary: Update Mentor
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The mentor Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 name:
 *                   type: string
 *                   example: "Saskia"
 *                 email:
 *                   type: string
 *                   example: "saskia@gmail.com"
 *                 createdAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *                 updatedAt: 
 *                    type: date
 *                    example: "2024-11-22T10:17:54.000Z"
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 *  components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * /api/module/delete/{id}:
 *   delete:
 *     summary: Remove a mentor by Id
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The mentor Id
 *     responses:
 *       200:
 *         description: The mentor was deleted
 *       404:
 *         description: The mentor was not found
 *       500:
 *         description: Some server error
 */

module.exports = router;
