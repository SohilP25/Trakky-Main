// author : vishal patel
import express from 'express';
import multer from 'multer';
import { deleteTherapy, getThearpies, postTheparies } from '../Controllers/TherapiesController.js';

const ThearpyRouter = express.Router();
// multer use for upload images
const upload = multer({ dest: 'uploads/' });
// creating therapy routes
ThearpyRouter
.get('/', getThearpies)
.post('/', upload.single('Image'), postTheparies)
.delete("/:id",deleteTherapy)

export default ThearpyRouter;
