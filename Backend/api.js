// Author : Sohil
// Purpose : Main API file for Defining invidual APIs and their routes

import express from "express";

//Importing invidual Routes
import AuthRoute from "./Routes/AuthRoute.js";
import blogRoute from "./Routes/blogRoute.js";
import faqRoute from "./Routes/faqRoute.js";
import spaRoute from "./Routes/spaRoute.js";
import searchFilterRoute from "./Routes/searchFilterRoute.js";
import nearbyRoute from "./Routes/nearbyRoute.js";
import discoverRoute from './Routes/discoverRoute.js'
const apiv1 = express.Router();

// Define saperate route of invidual one
//For Authentication
apiv1.use("/auth", AuthRoute);
//For Blogs
apiv1.use("/blogs", blogRoute);
//For FAQs
apiv1.use("/faqs", faqRoute);
//Spa Related routes
apiv1.use("/spas", spaRoute);
//Dicsover
// apiv1.use("/discover", spaRoute);
//For Filter and search
apiv1.use("/", searchFilterRoute);
//For Near By
apiv1.use("/", nearbyRoute);
//For Discover experience
apiv1.use("/discover-experiences", discoverRoute);


export default apiv1;
