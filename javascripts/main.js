"use strict";

let $ = require('jquery'),
    db = require("./db-interaction"),
    firebase = require("./firebaseConfig"),
    login = require("./user");


// Using the REST API
function loadForecastsDOM() {

  db.getForecasts()
  .then( function(forecast) {
    let currentForecast = forecast.forecast.txt_forecast.forecastday;
    console.log(currentForecast);
  });
}
loadForecastsDOM();



//////////////////////////////////
// User login section. Should ideally be in its own module
$("#auth-btn").click(function() {
  console.log("clicked auth");

  login()
  .then(function(result) {
      let user = result.user;
      console.log("logged in user", user.uid);

  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });

});



// Helper functions for forms stuff. Nothing related to Firebase
// Build a song obj from form data.
function buildSongObj() {
    let songObj = {
    title: $("#form--title").val(),
    artist: $("#form--artist").val(),
    album: $("#form--album").val(),
    year: $("#form--year").val()
  };
  return songObj;
}

// Load the new song form
$("#add-song").click(function() {
  console.log("clicked add song");
  // var songForm = templates.songForm()
  // .then(function(songForm) {
  //   $(".uiContainer--wrapper").html(songForm);
  // });
});
