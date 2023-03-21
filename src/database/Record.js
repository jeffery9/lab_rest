const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Record:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: ad75d475-ac57-44f4-a02a-8f6def58ff56
 *         workoutId:
 *           type: string
 *           example: 4a3d9aaa-608c-49a7-a004-66305ad4ab50 
 *         workout: 
 *           type: string
 *           $ref: "#/components/schemas/Workout"
 *         record:
 *           type: string
 *           example: 160 reps
 *         memberId:
 *           type: string
 *           example: 11817fb1-03a1-4b4a-8d27-854ac893cf41
 *         member:
 *           type: array
 *           items:
 *           $ref: "#/components/schemas/Member"
 */
const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewRecord = (newRecord) => {
  try {
    DB.records.push(newRecord);
    saveToDatabase(DB);
    return newRecord;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = {
  getRecordForWorkout,
  createNewRecord
};