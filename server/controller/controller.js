const router = require('../router/router.js')
const favoriteDog = require('../../db/models/favoriteDogModel.js')


module.exports = {
	getFavoriteDogs: function(req,res){
		favoriteDog.findAll().then((dogs) => {
  			res.status(200).send(JSON.stringify(dogs))
		})
		.catch(()=>{console.log("get dogs failed")})
	},
	addFavoriteDog: function(req,res){
		console.log(req.body, "post res")
		favoriteDog.create({
        dogName: req.body.dogName,
        dogImage: req.body.dogImage
    }).then(function(data) {
       	console.log(data, "post data")
        res.status(200).send(data)

	})
	.catch(()=>{console.log("add fav dog failed")})
	}
}