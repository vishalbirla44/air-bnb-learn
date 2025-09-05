const Home = require("../models/home");

exports.getIndex = (req, res, next) => 
  Home.fetchAll((registeredHomes) =>{
    res.render('store/index', {
    registeredHomes: registeredHomes,
    pageTitle: 'airbnb Home',
    currentPage: 'index'
    });
  }
);




exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>{
    res.render('store/home-list', {
    registeredHomes: registeredHomes,
    pageTitle: 'Home list',
    currentPage: 'Home'
    });
  });
}

exports.getboookings = (req, res, next) => {
    res.render('store/bookings', {
    pageTitle: 'my bookings',
    currentPage: 'bookings'
    });
};

exports.getFavouriteList = (req, res, next) => {
    Home.fetchAll((registeredHomes) =>{
    res.render('store/favourite-list', {
    registeredHomes: registeredHomes,
    pageTitle: 'My Favourites',
    currentPage: 'favourites '
    });
})
};


exports.getHomeDeteails = (req, res, next) => {
   const homeId = req.params.homeId
   console.log("At home deteails page" ,homeId)
}; 
 

