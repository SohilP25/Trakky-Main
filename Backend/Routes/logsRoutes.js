import express from "express";
import { createlogs , showlogs, deletelogs} from "../Controllers/logsController.js";

// routes for logs
const logRoutes = express();

logRoutes
.post('/',createlogs)
.get('/',showlogs)
.delete('/:id',deletelogs)
export default logRoutes;