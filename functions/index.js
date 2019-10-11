'use strict';

const functions = require('firebase-functions');
const express = require('express');
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const cors = require('cors')({origin : true});

app.use(cors);

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.get('/say/hello', (req, res) => {
    // Return success response
    return res.status(200).json({"message":"Hello there... Welcome to mock server."});
  });

const api = functions.https.onRequest(app);

module.exports = {
    api
  }