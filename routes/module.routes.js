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
 *         title:
 *           type: string
 *           description: Judul modul
 *         description:
 *           type: string
 *           description: Deskripsi modul
 *         class_module:
 *           type: string
 *           description: Kelas yang terdapat modul tersebut
 *         date:
 *           type: string
 *           format: date
 *           description: Tanggal modul
 *         mentor_id:
 *           type: integer
 *           description: ID modul yang mengajar
 *       example:
 *         title: "Pemrograman Mobile"
 *         description: "Mempelajari pemrograman berbasis mobile dengan Ionic & Angular"
 *         class_module: "Pemrograman"
 *         date: "2024-11-11"
 *         mentor_id: 3
 */
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /api/module/create:
 *   post:
 *     summary: Create a new module
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
 *       201:
 *         description: The module was successfully created
 *       400:
 *         description: Bad request, missing required data
 *       500:
 *         description: Some server error
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
 *     summary: Get module
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The module
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
 *     summary: Get module
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module Id
 *     responses:
 *       200:
 *         description: The module
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
 * 
 * /api/module/update/{id}:
 *   put:
 *     summary: Update module
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: The user was successfully created
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
 *     summary: Remove a module by Id
 *     tags: [Module]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module Id
 *     responses:
 *       200:
 *         description: The module was deleted
 *       404:
 *         description: The module was not found
 *       500:
 *         description: Some server error
 */



//Module Content
/**
 * @swagger
 * components:
 *   schemas:
 *     Module-Content:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Judul materi modul
 *         content:
 *           type: string
 *           description: Isi materi modul
 *         module_id:
 *           type: integer
 *           description: ID modul yang mengajar
 *       example:
 *         title: "Konsep Ionic Angular"
 *         content: "Mempelajari konsep awal Ionic & Angular"
 *         module_id: 3
 */
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * /api/module/content/create:
 *   post:
 *     summary: Create a new module content
 *     tags: [Module-Content]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module-Content'
 *     responses:
 *       201:
 *         description: The module content was successfully created
 *       400:
 *         description: Bad request, missing required data
 *       500:
 *         description: Some server error
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
 * /api/module/content/:
 *    get:
 *     summary: Get module content
 *     tags: [Module-Content]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The module content
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
 * /api/module/content/get/{id}:
 *    get:
 *     summary: Get module content By module id
 *     tags: [Module-Content]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module content by module Id
 *     responses:
 *       200:
 *         description: The module content
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
 * 
 * /api/module/content/update/{id}:
 *   put:
 *     summary: Update module content
 *     tags: [Module-Content]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module content Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module-Content'
 *     responses:
 *       200:
 *         description: The user was successfully created
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
 * /api/module/content/delete/{id}:
 *   delete:
 *     summary: Remove a module content by Id
 *     tags: [Module-Content]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module content Id
 *     responses:
 *       200:
 *         description: The module content was deleted
 *       404:
 *         description: The module content was not found
 *       500:
 *         description: Some server error
 */

module.exports = router;
