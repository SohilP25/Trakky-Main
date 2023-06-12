
// Author :Sohil Pathan
// Purpose : 
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  areas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Area',    
  }],
});

const areaSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
    },
  });
  
export const Area = mongoose.model('Area', areaSchema);
export const City = mongoose.model('City', citySchema);

