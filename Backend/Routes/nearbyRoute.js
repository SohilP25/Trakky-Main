// author : vishal patel 
// to define the routes of nearbylocation

import express from "express";
import {nearbySpa}  from "../Controllers/nearbyController.js";

const nearbyRoute = express.Router();

nearbyRoute
.post("/nearbyspalocation",nearbySpa);

export default nearbyRoute;