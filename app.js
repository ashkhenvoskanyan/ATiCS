const citiesController = require("./cities/cities.controller"); //import
const errorHandler = require("./middlewares/error-handler.middleware"); //import
const express = require("express"); //node-modules, alows server creating, and comunicating with the server
const app = express(); // instance of express
app.listen(3000, () => { //port listen
  console.log(`running on 3000`);
});
app.use("/cities", citiesController); // use on server cities Controler
app.use(errorHandler); // not found responce. 
