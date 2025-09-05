
// External Module
const express = require('express');
const storeRouter = express.Router();
const storeController= require("../controllers/storeController");

// Local Module

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/bookings", storeController.getboookings);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/favourites", storeController.getFavouriteList);
storeRouter.get("/homes/:homeId" , storeController.getHomeDeteails)


module.exports = storeRouter;