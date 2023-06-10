//Author : Rinal dutt
import express from "express";
const servicesrouter = express.Router();
//const servicesController = require('../controllers/servicesController');
import {addService,deleteService,updateService,getAllServices} from "../Controllers/servicesController.js";

// Add a new service
servicesrouter.post('/', addService);

// Delete a service by ID
servicesrouter.delete('/:id',deleteService);

// Update a service by ID
servicesrouter.put('/:id', updateService);

// Get all services
servicesrouter.get('/', getAllServices);

export default servicesrouter;