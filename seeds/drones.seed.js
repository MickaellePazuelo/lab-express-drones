// Iteration #1
var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var dronemodel = require ("../models/Drone.model.js");
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


    console.log("creation");
  
    const drones = [
        { name: "General Atomics MQ-9 Reaper", propellers: 4, maxSpeed: 18 },
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }]
  
async function createDrone() {
    let dbresult = await dronemodel.create(drones);
    console.log("creation");
}
  createDrone();
  
  
