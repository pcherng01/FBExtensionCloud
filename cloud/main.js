
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var extensions = [
	{
		"userId": "sdfkj32w2e",
		"eventId": 5793461276
	},
	{
		"userId": "ri395j404j",
		"eventId": 3975846189
	},
	{
		"userId": "idfkj3925t",
		"eventId": 5972384813
	},
	{
		"userId": "tr934ioweu",
		"eventId": 9876435891
	},
	{
		"userId": "po385uy88i",
		"eventId": 3975846189
	},
		"userId": "idfkj3925s",
		"eventId": 5972384813
	},
	{
		"userId": "t874u29tiw",
		"eventId": 8679131456
	},
		"userId": "ri395j404j",
		"eventId": 3975846189
	},
		"userId": "idfkj39254",
		"eventId": 5972384813
	}
];

// API

var LikeData = Parse.Object.extend("LikeData");
var EventData = Parse.Object.extend("Events");

// Users
function saveUser(userId, likes){}

// Events
function setUser(eventId, userId){}

// Other
Parse.Cloud.define('Pair', function(request, response) {
	var likeQuery = new Parse.Query(LikeData);
	var eventQuery = new Parse.Query(EventData);
	
	var eventData = eventQuery.and(request.params.userId, request.params.eventId);

	eventQuery.find({
		success: function(results) {
     		response.success(results);
		},
		error: function(error) {
			 // There was an error.
    		response.error(error);
		}
	});

});