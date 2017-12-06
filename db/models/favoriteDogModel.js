const db = require('../dbconfig.js')
const Sequelize = require('sequelize')

const favoriteDog = db.define('favoriteDog', {
    dogName: Sequelize.TEXT,
    dogImage: Sequelize.TEXT
});

favoriteDog.sync().then(() => {console.log("table successfully added")})
.catch(()=> {console.log("table failed to be added")})

module.exports = favoriteDog;