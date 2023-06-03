import express from "express";

import AuthRoute from "./Routes/AuthRoute.js";
import blogRoute from "./Routes/blogRoute.js";
import faqRoute from "./Routes/faqRoute.js";
import spaRoute from "./Routes/spaRoute.js";
import searchFilterRoute from "./Routes/searchFilterRoute.js";

const apiv1 = express.Router();

apiv1.use("/auth", AuthRoute);
apiv1.use("/blogs", blogRoute);
apiv1.use("/faqs", faqRoute);
apiv1.use("/spas", spaRoute);
apiv1.use("/",searchFilterRoute)

export default apiv1; 
