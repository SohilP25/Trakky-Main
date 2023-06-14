// author : vishal patel
import express from 'express';
// import upload from "../Middleware/ImageMiddleware.js";
import { deleteTherapy, getThearpies, postTheparies } from '../Controllers/TherapiesController.js';
import {upload} from "../Middleware/imageUpload.js";
const ThearpyRouter = express.Router();


ThearpyRouter
.get('/', getThearpies)
.post('/',upload.single('imageUrl'),postTheparies)
.delete("/:id",deleteTherapy)

export default ThearpyRouter;
