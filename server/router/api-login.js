module.exports = function(req, res) {

  let userArray = [
  {
    'userid': 1,
    'username': 'abc',
    'role': 'Super Admin',
    'email': 'abc@com.au',
    'password': '123',
    'valid': null
  },
  {
    'userid': 2,
    'username': 'person',
    'role': 'Super Admin',
    'email': 'person@gmail.com',
    'password': 'password',
    'valid': null
  },
  {
    'userid': 3,
    'username': 'john',
    'role': 'Super Admin',
    'email': 'john@gmail.com',
    'password': 'wordpass',
    'valid': null
  }
];

let i = userArray.findIndex(user => ((user.email == req.body.username) && (user.password == req.body.password)));

if (i == -1) {
  res.send({'valid': false});
} else {
  userArray[i].valid = true;
  let user = userArray[i];
  res.send(user);
}

};