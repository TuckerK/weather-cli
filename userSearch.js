var inquirer = require("inquirer");

var weather = require("weather-js");

function UserSearch(name, location){
  this.name = name;
  this.location = location;
  this.date = Date.now();
};

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?'
    },
    {
        type: 'input',
        message: 'What location would you like to search?'
    }
]).then(function(usr){

});