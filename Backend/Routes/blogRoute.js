import express from "express";
import { getBlog,postBlog } from '../Controllers/blogController.js'
const blogRoute = express.Router();


blogRoute.get('/', getBlog)
blogRoute.post('/', postBlog)

export default blogRoute;