const Record =  require("../database/Record")

const getRecordForWorkout = (workoutId)=>{
    try {
      const record = Record.getRecordForWorkout(workoutId);
      console.log(record)
      return record ;
    }catch(error){
      throw error ;
    }
}


module.exports = {getRecordForWorkout}