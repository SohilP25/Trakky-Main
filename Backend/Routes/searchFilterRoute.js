import express from "express";
import {searchSpa,filterSpa} from "../Controllers/searchFilterController.js";

const searchFilterRoute = express.Router();


searchFilterRoute
.get("/search",searchSpa)
.get("/filter",filterSpa)





export default searchFilterRoute;
