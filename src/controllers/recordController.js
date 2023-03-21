const recordService = require("../services/recordService");


const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    // console.log(req);
    const allRecordForWorkout = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: allRecordForWorkout });
};



module.exports = ({
    getRecordForWorkout
});