// Author : Vishal
// Purpose : Define spa related routes

import express from "express";
//Importing logic functions from controllers.
import {
  getallSpa,
  createSpa,
  updateSpa,
  deleteSpa,
} from "../Controllers/spaController.js";
import { upload } from "../Middleware/imageUpload.js";

const spaRoute = express.Router();

spaRoute
  // For receiving spa and it's details
  .get("/", getallSpa)
  // For creating spa.
  .post("/", upload.fields([{
    name: 'imgUrl', maxCount: 1
  }, {
    name: 'mulImgUrl', maxCount: 3
  }]), createSpa)
  // For updating details of spa.
  .put("/:id", updateSpa)
  // For deleting details of spa.
  .delete("/:id", deleteSpa);




export default spaRoute;
