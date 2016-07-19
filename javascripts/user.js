"use strict";
let firebase = require("./firebaseConfig"),
    provider = new firebase.firebase.auth.GoogleAuthProvider();


function logInGoogle() {

  //returned object for user authentification
return firebase.firebase.auth().signInWithPopup(provider);

}

module.exports = logInGoogle;
