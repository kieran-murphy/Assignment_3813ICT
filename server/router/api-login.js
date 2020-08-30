module.exports = function(req, res) {

  let userArray = [
  {
    'userid': 1,
    'username': 'abc',
    'birthdate': '01/01/2000',
    'age': 20,
    'email': 'abc@com.au',
    'password': '123',
    'valid': null
  },
  {
    'userid': 2,
    'username': 'person',
    'birthdate': '01/01/2000',
    'age': 20,
    'email': 'person@gmail.com',
    'password': 'password',
    'valid': null
  },
  {
    'userid': 3,
    'username': 'john',
    'birthdate': '01/01/2000',
    'age': 20,
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