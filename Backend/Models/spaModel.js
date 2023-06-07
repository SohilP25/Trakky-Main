// Author : Vishal & Rinal
// Purpose : Defining spa model/schema.
import mongoose from "mongoose";

const spaSchema = new mongoose.Schema({
    name: {
      type: String,     
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: false
    },
    mainImage: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
    openTime: {
      type: String,
      required: true,
    },
    closeTime: {
      type: String,
      required: true,
    },
    facilities: {
      type: [String],
      required: false,
    },
   
    catagory : {
     type : [String],
     required : true,
    },
    priority: {
      type: Number,
      default: 0,
    },
    aboutUs: {
      type: String,
      required: false,
    },
  },
  );
   
//creating sphare 
 spaSchema.index({location : '2dsphere'})
//Creating Model of schema.
   
  
  const spaModel = mongoose.model('spaModel', spaSchema);
  
  export default spaModel;