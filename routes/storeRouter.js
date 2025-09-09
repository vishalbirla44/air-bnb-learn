
// External Module
const express = require('express');
const storeRouter = express.Router();
const homesController= require("../controllers/storeController");

// Local Module

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/bookings", homesController.getboookings);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/favourites", homesController.getFavouriteList);
storeRouter.get("/homes/:homeId" , homesController.getHomeDeteails)


module.exports = storeRouter;