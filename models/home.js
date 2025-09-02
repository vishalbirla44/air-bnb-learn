// core moduels
const fs = require('fs');
const path = require('path');

//  external moduels
const rootDir = require('../utils/pathUtil');



module.exports = class Home {
  constructor(housename, price, location, rating, photoUrl) {
    this.housename = housename;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

    save() {
     Home.fetchAll((registeredHomes) =>{ 
        registeredHomes.push(this);
      const homepath = path.join(rootDir, 'data' , 'homes.json' )
      fs.writeFile(homepath , JSON.stringify(registeredHomes), (err) => {
        console.log("data is fetched", err);
      })
      })
     
    }
    static fetchAll(callback) {
      const homedatapath = path.join(rootDir, 'data' , 'homes.json' ) 
      fs.readFile(homedatapath, (err, data)  => {
         callback(!err ? JSON.parse(data) : [])
         
      })
    }
}