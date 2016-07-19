"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
    firebase = require("./firebaseConfig");

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getForecasts() {

  return new Promise(function(resolve, reject) {

    $.ajax({
      url: `http://api.wunderground.com/api/d4fce7fe5acf4720/forecast/forecast/q/37167.json`
    }).done(function(forecastData) {
      resolve(forecastData);
    });

  });

}




module.exports = { getForecasts };
