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


/**
 * @swagger
 * components:
 *   schemas:
 *     Participant:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: name user
 *         email:
 *           type: string
 *           description: email user
 *         phone:
 *           type: string
 *           description: password
 *       example:
 *         name: "Saskia"
 *         email: "saskia@gmail.com"
 *         phone: "098795512345"
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
 * /api/participant/:
 *    get:
 *     summary: Get participant
 *     tags: [Participant]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The participant
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
 *                 phone:
 *                   type: string
 *                   example: "087268822636"
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
 * /api/participant/get/{id}:
 *    get:
 *     summary: Get participant
 *     tags: [Participant]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The participant Id
 *     responses:
 *       200:
 *         description: The participant
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
 *                 phone:
 *                   type: string
 *                   example: "087268822636"
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
 * /api/participant/create:
 *   post:
 *     summary: Create Participant
 *     tags: [Participant]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participant'
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
 *                 username:
 *                   type: string
 *                   example: "Saskia"
 *                 email:
 *                   type: string
 *                   example: "saskia@gmail.com"
 *                 phone:
 *                   type: string
 *                   example: "087268822636"
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
 * /api/participant/update/{id}:
 *   put:
 *     summary: Update Participant
 *     tags: [Participant]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The participant Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Participant'
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
 *                 username:
 *                   type: string
 *                   example: "Saskia"
 *                 email:
 *                   type: string
 *                   example: "saskia@gmail.com"
 *                 phone:
 *                   type: string
 *                   example: "087268822636"
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
 * /api/participant/delete/{id}:
 *   delete:
 *     summary: Remove a participant by Id
 *     tags: [Participant]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The participant Id
 *     responses:
 *       200:
 *         description: The participant was deleted
 *       404:
 *         description: The participant was not found
 *       500:
 *         description: Some server error
 */


module.exports = router;
