const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
const createNewRecord = (newRecord) => {
  const recordToInsert = {
    ...newRecord,
    id: uuid(),
  };

  try {
    const record = Record.createNewRecord(recordToInsert);
    return record;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRecordForWorkout,
  createNewRecord
};