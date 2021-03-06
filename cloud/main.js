
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// API

var LikeData = Parse.Object.extend("LikeData");
var EventData = Parse.Object.extend("Events");

// Users
function saveUser(userId, likes){}

// Events
function setUser(eventId, userId){}

// Other
Parse.Cloud.define('hello', function(request, response) {
	response.success("SUCCESS!");
});