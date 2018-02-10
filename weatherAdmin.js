var fs = require("fs");
var UserSearch = require("./userSearch");
var moment = require("moment");

var WeatherAdmin = function() {
  this.newUserSearch = function(name, location) {
    var newUserSearch = new UserSearch(name, location);
    var logTxt =
      "\nName: " +
      newUserSearch.name +
      "Loacation: " +
      newUserSearch.location +
      "Date: " +
      moment(userSearch.date).format("yyyy-mm-dd");
    fs.appendFile("logs.txt", logTxt, function(err) {
      if (err) console.log(err);
    });
    newUserSearch.getWeather();
  };

  this.getData = function() {
    fs.readFile("logs.txt", "utf8", function(err, data) {
      console.log(data);
    });
  };
};

module.exports = WeatherAdmin;
