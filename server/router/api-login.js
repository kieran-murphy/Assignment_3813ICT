module.exports = function(req, res) {

  let userArray = [
  {
    'userid': 1,
    'username': 'super',
    'role': 'Super Admin',
    'email': 'super@gmail.com',
    'password': '123',
    'valid': null
  },
  {
    'userid': 2,
    'username': 'abc',
    'role': 'Group Admin',
    'email': 'abc@com.au',
    'password': '123',
    'valid': null
  },
  {
    'userid': 3,
    'username': 'john',
    'role': 'Group Admin',
    'email': 'john@gmail.com',
    'password': 'password',
    'valid': null
  }
]; 

/*app.get("/list", function(req, res) {
  const product_collection = db.collection("users");
  product_collection.find().toArray((err, data) => {
    res.send(data);
  });
});
};
*/

//retrieves username and password for authentication from userArray 
 let i = userArray.findIndex(user => ((user.email == req.body.username) && (user.password == req.body.password)));

// checks if username and password are valid for login
if (i == -1) {
  res.send({'valid': false});
} else {
  userArray[i].valid = true;
  let user = userArray[i];
  res.send(user);
}
}

/*
//retrieves username and password for authentication from userArray 
let i = product_collection.findIndex(product => ((product.email == req.body.username) && (product.password == req.body.password)));

// checks if username and password are valid for login
if (i == -1) {
  res.send({'valid': false});
} else {
  userArray[i].valid = true;
  let user = userArray[i];
  res.send(user);
}

*/


/*
module.exports = function(db, app){
  // Route to manage logging in a user
  app.post('/api/login', function(req, res){
      if (!req.body){
          return res.sendStatus(400);
      }
      user = req.body;
      const collection = db.collection('user');
      // check for username
      collection.find({'username': user.username}).next((err, result) => {
        if (result == null){
          res.send({err:"No user"});
        } else {
          res.send({user: result, valid: true});
        }
      });
  });
}

*/