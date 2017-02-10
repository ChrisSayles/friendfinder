var friends	= require('../data/friends.js');
var path 	= require('path');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
		});

	app.post('/api/friends', function(req, res){
		 // var lowest_difference = 30;
   //      var match;
   //      friends.forEach(function(friend) {
   //          for (var i = 0; i < 10; i++){
   //              var difference = 0;
   //              difference+= Math.abs(friend.answers[i] - req.body.answers[i]);
   //              if (lowest_difference > difference){
   //                  lowest_difference = difference;
   //                  match = friend;
   //              }
 
   //          }
   //      })
		friends.push(req.body);
		res.json(true);
	});
}

