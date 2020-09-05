const sockets = require('./sockets.js');
const lserver = require('./listen.js');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http);


const PORT = 3000;

let server = http.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening on: " + host + "port: " + port);
});
//apply express middleware
app.use(cors());

sockets.connect(io, PORT)

//lserver.listen(http,PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');



app.post('/api/auth', require('./router/api-login'));
app.post('/api/login-success', require('./router/login-success'));
