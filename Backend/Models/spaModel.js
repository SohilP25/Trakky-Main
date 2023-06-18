// Author : Vishal & Rinal & sohil
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
  imgUrl: {
    type: String,
    required: false,
  },
  mulImgUrl: {
    type: [String],
    required: false,
  },
  City: {
    type: String,
    required: false,
  },
  Area: {
    type: String,
    required: false,
  },
  // images: {
  //   type: [String],
  //   required: true,
  // },
  spaLocation: {
    type: {
      type: String,
      enum: ["Point"],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
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
    required: true,
    validate: {
      validator: async function (priority) {
        const count = await mongoose.models.spaModel.countDocuments({ priority: priority });
        return count === 0;
      },
      message: "Priority already assigned to another SPA.",
    },
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
spaSchema.index({ spaLocation: "2dsphere" });
//Creating Model of schema.

const spaModel = mongoose.model("spaModel", spaSchema);

export default spaModel;
