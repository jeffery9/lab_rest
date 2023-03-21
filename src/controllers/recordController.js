const recordService = require("../services/recordService");


const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    console.log(req);
    console.log(params);
    console.log(workoutId);
    const allRecordForWorkout = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: allRecordForWorkout });
};

const getAllRecords = (req, res) => {
    console.log('++++++++++');
    console.log(req);

    const allRecord = recordService.getAllRecord();
    res.send({ status: "OK", data: allRecord });
};

const getOneRecord = (req, res) => {
    const {
        params: { recordId },
    } = req;

    const record = recordService.getOneRecord(recordId);
    res.send({ status: "OK", data: record });
};

const createNewRecord = (req, res) => {
    const { body } = req;
    if (
        !body.workoutId ||
        !body.memberId ||
        !body.record
    ) {
        res.status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "One of the following keys is missing or is empty in request body: 'workoutId', 'memberId', 'record'!",
                },
            });
        return;
    }

    const newRecordcreateNewRecord = {
        workoutId: body.workoutId,
        memberId: body.memberId,
        record: body.record,
    };
    try {
        const createdRecordcreateNewRecord = recordService.createNewRecord(newRecordcreateNewRecord);

        res.status(201).send({ status: "OK", data: createdRecordcreateNewRecord });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getRecordForWorkout,
    createNewRecord,
    getAllRecords,
    getOneRecord
};