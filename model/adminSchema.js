import mongoose from "mongoose";
import url from "../database/connection.js";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS:1200000, 
    maxPoolSize: 10, // Adjust as needed 
});
const AdminSchema = mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

export default mongoose.model('adminSchema',AdminSchema,'admin');