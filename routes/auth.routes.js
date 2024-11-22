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

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: name user
 *         email:
 *           type: string
 *           description: email user
 *         password:
 *           type: string
 *           description: password
 *       example:
 *         username: "Saskia"
 *         email: "saskia@gmail.com"
 *         password: "12345"
 */

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register
 *     tags: [Auth User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /api/users/login:
 *    post:
 *     summary: Login
 *     tags: [Auth User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: Saskia
 *                 password:
 *                    type: string
 *                    example: 12345               
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                  type: string
 *                  example: Saskia                 
 *                 password:
 *                  type: string
 *                  example: 12345
 *                 
 *       404:
 *         description: The member was not found
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
 * /api/users/profile:
 *    get:
 *     summary: Get user profile
 *     tags: [Auth User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 *                 username:
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
 * /api/users/profile:
 *    put:
 *     summary: Update a user by Id
 *     tags: [Auth User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: Saskia 
 *                 email:
 *                   type: string
 *                   example: saskia@gmail.com
 *                 password:
 *                   type: string
 *                   example: 12345              
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: Saskia
 *                 email:
 *                   type: string
 *                   example: saskia@gmail.com              
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */

module.exports = router;
