const workoutService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  try {
    const allWorkouts = workoutService.getRecordForWorkout();
    console.log(allWorkouts)
    res.send({ status: "OK", data: allWorkouts });
  }catch(error){
    res.status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });
  }
   
  };


module.exports = {
 getRecordForWorkout
};