// author : vishal patel
import express from 'express';
import upload from "../Middleware/ImageMiddleware.js";
import { deleteTherapy, getThearpies, postTheparies } from '../Controllers/TherapiesController.js';

const ThearpyRouter = express.Router();


ThearpyRouter
.get('/', getThearpies)
.post('/', upload.fields([
    {   
        name : 'Image',
        maxCount : 5
    }
])
    , postTheparies)
.delete("/:id",deleteTherapy)

export default ThearpyRouter;
