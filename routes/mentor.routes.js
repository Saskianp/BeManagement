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


/**
 * @swagger
 * components:
 *   schemas:
 *     Mentor:
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
 * /api/mentor/:
 *    get:
 *     summary: Get mentor
 *     tags: [Mentor]
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
 * /api/mentor/get/{id}:
 *    get:
 *     summary: Get mentor
 *     tags: [Mentor]
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
 * /api/mentor/create:
 *   post:
 *     summary: Create Mentor
 *     tags: [Mentor]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mentor'
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
 * /api/mentor/update/{id}:
 *   put:
 *     summary: Update Mentor
 *     tags: [Mentor]
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
 *             $ref: '#/components/schemas/Mentor'
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
 * /api/mentor/delete/{id}:
 *   delete:
 *     summary: Remove a mentor by Id
 *     tags: [Mentor]
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
