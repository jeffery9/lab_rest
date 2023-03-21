const express = require("express");
const apicache = require("apicache");
// todo add Security
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");



const router = express.Router();
const cache = apicache.middleware;

/**
 * @openapi
 * /api/v1/records:
 *   get:
 *     tags:
 *       - Records

 *                 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Record"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", recordController.getAllRecords);

/**
 * @openapi
 * /api/v1/records/{recordId}:
 *   get:
 *     tags:
 *       - Records
 * 
 *     parameters:
 *       - in: path
 *         name: recordId
 *         required: true
 * 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Record"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/:recordId", recordController.getOneRecord);

/**
 * @openapi
 * /api/v1/records:
 *   post:
 *     tags:
 *       - Records
 * 
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               record: 
 *                 type: string
 *               wrokoutId: 
 *                 type: string
 *               memberId: 
 *                 type: string
 *                  
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Record"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.post("/", recordController.createNewRecord);

module.exports = router;