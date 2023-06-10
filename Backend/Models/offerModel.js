
// Author : Vishal patle
// Purpose : Defining Offer model/schema.
import mongoose from "mongoose";

const offerScheme = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Image : {
        data : Buffer,
        contentType : String,
    },
    Discount : {
        type : String,
        required : true,
    }
}   
);

//Creating Model of schema.
const OfferModel = mongoose.model("OfferModel", offerScheme);
export default OfferModel;