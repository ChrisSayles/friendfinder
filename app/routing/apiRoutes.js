//required files
var friends	= require('../data/friends.js');
var path 	= require('path');

//module export function
module.exports = function(app){
//Read information from the friends.js
	app.get('/api/friends', function(req, res){
//convert information into JSON form
		res.json(friends);
		});
//Create the information and return it to JSON form
//Push informations into the friends.js file
//this function calculates the users score and matches with a friend in the database
	app.post('/api/friends', function(req, res){
		 var totalDifference = 100;
       var yourMatch;
      friends.forEach(function(item) {
         var newDifference = 0;
         for(i=0;i<item.scores.length;i++) {
            newDifference += Math.abs(item.scores[i] - req.body.scores[i]);
         }
         if (newDifference <= totalDifference) {
            totalDifference = newDifference;
            theMatch = item;
         }
      })
      res.json(theMatch);
		friends.push(req.body);
		res.json(true);
	});
}

