// server.js
// SERVER-SIDE JAVASCRIPT
var express = require('express'); //this server is going to use express
var app = express(); // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.

// server.js - Added additional server data
//Assigns static  files to be used (from directory public)
app.use(express.static('public'));

//Data to pull form
var albums = [
  {
    title: 'Cupid Deluxe',
    artist: 'Blood Orange'
  },
  {
    title: 'M3LL155X - EP',
    artist: 'FKA twigs'
  },
  {
    title: 'Fake History',
    artist: 'letlive.'
  }
];

//More data to pull from
var tacoShops = [
  { name: "La Taqueria" },
   { name: "El Farolito" },
   { name: "Taqueria Cancun" }
];

// Allows input from other sources
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//add route where tacoshop data can be found:
app.get('/api/tacoshops', function (req, res) {
  res.json(tacoShops);
});

//recieve get requests, and send Hello World
app.get('/', function(req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
  console.log(__dirname);
});

//recieve get requests, and send album names
app.get('/api/albums', function(req, res) {
  res.json(albums);
});


app.get('/api/images', function(req, res) {
  res.json(boom);
});
//
// //recieve get requests, and send Hello World
// app.get('/', function(req, res) {
//   res.sendFile('views/index.html' , { root : __dirname});
//   console.log(__dirname);
// });

// ADD IMAGE
// var img = $("<img />").attr('src', 'http://localhost:3000/images/img.png');
//
// $(".logo-container").append(img);

//will console.log to terminal
var hostsite = 3000;
app.listen(process.env.PORT || hostsite, function() {
  console.log(`Example app listening at http://localhost:${hostsite}/`);
});
