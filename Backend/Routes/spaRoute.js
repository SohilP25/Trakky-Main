// Author : Vishal
// Purpose : Define spa related routes

import express from "express";
//Importing logic functions from controllers.
import {getallSpa,createSpa,updateSpa,deleteSpa} from "../Controllers/spaController.js";

const spaRoute = express.Router();

spaRoute
// For receiving spa and it's details
.get("/",getallSpa)
// For creating spa.
.post("/",createSpa)
// For updating details of spa.
.patch("/",updateSpa)
// For deleting details of spa.
.delete("/",deleteSpa)

export default spaRoute;
