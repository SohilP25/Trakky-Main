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
import authMiddleWare from "../Middleware/authMiddleware.js";

const spaRoute = express.Router();

spaRoute
  // For receiving spa and it's details
  .get("/", getallSpa)
  // For creating spa.
  .post("/",authMiddleWare, upload.fields([{
    name: 'imgUrl', maxCount: 1
  }, {
    name: 'mulImgUrl', maxCount: 10
  }]), createSpa)
  // For updating details of spa.
  .put("/:id",authMiddleWare, updateSpa)
  // For deleting details of spa.
  .delete("/:id",authMiddleWare, deleteSpa);




export default spaRoute;
