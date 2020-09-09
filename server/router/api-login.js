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


//let i = userArray.findIndex(user => ((user.email == req.body.username) && (user.password == req.body.password)));
//let i = userArray.findIndex(user => ((user.email == req.body.username) && (user.password == req.body.password)));


let i = userArray.findIndex(user => ((user.email == req.body.username) && (user.password == req.body.password)));


//console.log(data1.myarray[0].role);


if (i == -1) {
  res.send({'valid': false});
} else {
  userArray[i].valid = true;
  let user = userArray[i];
  res.send(user);
}

};