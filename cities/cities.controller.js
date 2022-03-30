const express = require("express"); // to use route
const asyncHandler = require("express-async-handler"); // to handle async function
const citiesService = require("./cities.service"); // import
const route = express.Router(); // to handle route
route.get( 
  "/:zipCode", // parameter
  asyncHandler(async (req, res) => { // call async 
    res.send(await citiesService.getCityByZipCode(req.params.zipCode)); // sent responce , to get zipCode from params
  })
);
module.exports = route;
