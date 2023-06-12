// Author : Vishal & Rinal
// Purpose : Defining spa model/schema.
import mongoose from "mongoose";
import  Services  from "../Models/servicesModel.js";

const spaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  bookingNumber: {
    type: String,
    required: false,
  },
  gmapLink: {
    type: String,
    required: false,
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
      enum: ["Point"],
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
  slug: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    default: 0,
  },
  aboutUs: {
    type: String,
    required: false,
  },
  //open/close
  open: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  topRated: {
    type: Boolean,
    default: false,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  luxurious: {
    type: Boolean,
    default: false,
  },
  services: [{ 
    type:  mongoose.Schema.Types.ObjectId,
     ref: Services }],
});

//creating sphare
spaSchema.index({ location: "2dsphere" });
//Creating Model of schema.

const spaModel = mongoose.model("spaModel", spaSchema);

export default spaModel;
