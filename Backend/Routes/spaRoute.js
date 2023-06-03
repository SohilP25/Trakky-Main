import express from "express";
import {getallSpa,createSpa,updateSpa,deleteSpa} from "../Controllers/spaController.js";

const spaRoute = express.Router();


spaRoute
.get("/",getallSpa)
.post("/",createSpa)
.patch("/",updateSpa)
.delete("/",deleteSpa)





export default spaRoute;
