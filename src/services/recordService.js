const { v4: uuid } = require("uuid");


const Record = require("../database/Record");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
const getAllRecord = (recordId = null) => {
  try {
    const record = Record.getAllRecord();
    return record;
  } catch (error) {
    throw error;
  }
};
const getOneRecord = (recordId) => {
  try {
    const record = Record.getOneRecord(recordId);
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
  getAllRecord,
  getOneRecord,
  createNewRecord
};