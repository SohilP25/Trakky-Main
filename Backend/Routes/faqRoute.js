import express from "express";
import { getFaq, postFaq } from "../Controllers/faqController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";
const faqRoute = express.Router();

faqRoute.get("/", authMiddleWare, getFaq);
faqRoute.post("/", postFaq);

export default faqRoute;
