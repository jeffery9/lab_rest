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
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
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
 *                     $ref: "#/components/schemas/Workout"
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
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

/**
 * @openapi
 * /api/v1/workouts/{workoutId}:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workoutId
 *         required: true
 *         type: string
 *         minimum: 1
 *         description: Parameter description in Markdown.
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
 *                     $ref: "#/components/schemas/Workout"
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
router.get("/:workoutId", workoutController.getOneWorkout);

/**
 * @openapi
 * /api/v1/workouts/{workoutId}/records:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workoutId
 *         required: true
 *         type: string
 *         minimum: 1
 *         description: Parameter description in Markdown.
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
router.get("/:workoutId/records", recordController.getRecordForWorkout);

// todo add Security
// router.post("/", authenticate, authorize, workoutController.createNewWorkout);

/**
 * @openapi
 * /api/v1/workouts:
 *   post:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: body
 *         name: workout
 *         required: true
 *         type: object
 *         minimum: 1
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
 *                     $ref: "#/components/schemas/Workout"
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
router.post("/", workoutController.createNewWorkout);

/**
 * @openapi
 * /api/v1/workouts/{workoutId}:
 *   put:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workout
 *         required: true
 *         type: object
 *         minimum: 1
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
 *                     $ref: "#/components/schemas/Workout"
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
router.patch("/:workoutId", workoutController.updateOneWorkout);

/**
 * @openapi
 * /api/v1/workouts/{workoutId}:
 *   delete:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: path
 *         name: workout
 *         required: true
 *         type: object
 *         minimum: 1
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
 *                     $ref: "#/components/schemas/Workout"
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
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;