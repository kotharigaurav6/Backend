import mongoose from "mongoose";
import url from "../database/connection.js";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS:1200000, 
    maxPoolSize: 10, // Adjust as needed  
});

const appliedVacancySchema = mongoose.Schema({
    appliedVacancyId : {
        type:String,
        required:true
    },
    vacancyId : {
        type:String,
        required:true
    },
    candidateEmail:{
        type:String,
        required:true
    },
    recruiterEmail:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    recruiterStatus : {
        type:String,
        required:true,
        default:"Received"
    }
});

export default mongoose.model('appliedVacancySchema',appliedVacancySchema,'appliedVacancy');