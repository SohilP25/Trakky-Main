// Author : vishal
// Purpose : Define offers creating and receiving routes

import express from "express";
//Importing logic functions from controllers

import { getoffer, postOffer, deleteOffer } from "../Controllers/offerController.js";
import multer from "multer";

const OfferRoute = express.Router();
const upload = multer({ dest: 'uploads/' });

//Define Request For getting Offers.

OfferRoute
  .get("/", getoffer)
  .post("/", upload.single('image'), postOffer)
  .delete("/:id", deleteOffer);

export default OfferRoute;
