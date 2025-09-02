const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
}

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>{
    res.render('host/host-home-list', {
    registeredHomes: registeredHomes,
    pageTitle: 'Host Home list',
    currentPage:  'host-homes'
    });
  });
}


exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const { housename, price, location, rating, photoUrl } = req.body;
  const home = new Home (
    housename,
    price,
    location,
    rating,
    photoUrl
  );
  home.save();

  res.render('host/homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});

}



  
    

