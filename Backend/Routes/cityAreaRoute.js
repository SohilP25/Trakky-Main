//Author : Sohil Pathan
import express from "express";
const cityAreaRoutes = express.Router();
//const servicesController = require('../controllers/servicesController');
import { getallCities,getAreaForCity,addCity,addCityToArea,updateCity,updateAreaOfCity,deleteCity,deleteArea } from "../Controllers/cityAreaController.js";

// Get all cities
app.get('/cities', getallCities);
// Get all areas for a specific city
app.get('/cities/:cityId/areas',getAreaForCity);


// Add a new city
app.post('/cities', addCity);
// Add a new area to a city
app.post('/cities/:cityId/areas',addCityToArea);


// Update a city
app.put('/cities/:cityId', updateCity);
// Update an area
app.put('/areas/:areaId',updateAreaOfCity);

// Delete a city
app.delete('/cities/:cityId', deleteCity);
app.delete('/areas/:areaId', deleteArea);