import mongoose from "mongoose";

const TherapyScheme = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Image : {
        data : Buffer,
        contentType : String,
    },
    Price : {
        type : String,
        required : true,
    }
}   
);

//Creating Model of schema.
const TherapyModel = mongoose.model("TherapyModel", TherapyScheme);
export default TherapyModel;