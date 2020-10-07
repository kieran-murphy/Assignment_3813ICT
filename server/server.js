//defines all the plugins used and retrieves them from their local addresses
const bodyParser = require("body-parser");
const sockets = require('./sockets.js');
const lserver = require('./listen.js');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

const PORT = 3000;

//defines an address for the server to run and prints confirmation to console
let server = http.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening on: " + host + "port: " + port);
});

//apply express middleware
app.use(cors());
app.use(bodyParser.json());
const url = "mongodb://localhost:27017";

//implements sockets used for chat
sockets.connect(io, PORT)


//implements express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');


//defines the routes for authentication and login sucess
app.post('/api/auth', require('./router/api-login'));
app.post('/api/login-success', require('./router/login-success'));

//function for connecting to the mongodb database and parsing information
MongoClient.connect(
  url,
  { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    if (err) throw err;
    const dbName = "assignment";
    const db = client.db(dbName);
    //all of the relevant routes for adding, removing, etc. information
    require("./router/add.js")(db, app);
    require("./router/list.js")(db, app);
    require("./router/update.js")(db, app, ObjectID);
    require("./router/remove.js")(db, app, ObjectID);

  }
);