// author : vishal patel 
// to define the routes of nearbylocation

import { Express, Router } from "express";
import { Nearbyspa } from "../Controllers/nearbyController";

const Nearaby = Express.Router();

Nearaby
.post("/nearbylocation",Nearbyspa);

export default Nearaby;