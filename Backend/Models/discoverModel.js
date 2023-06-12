// Author : Sohil
// Purpose : Defining experince model/schema.
import mongoose from "mongoose";

const experienceScheme = mongoose.Schema(
    {
        date: { 
            type: Date, 
            default: Date.now
        },
        title: {
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        },
        image:{
            data: Buffer,
            contentType: String
        }
    }
)

//Creating Model of schema.
const experienceModel = mongoose.model("experienceModel", experienceScheme);
export default experienceModel;