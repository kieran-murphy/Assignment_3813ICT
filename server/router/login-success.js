
module.exports = function (req, res) {
  //retrieves user information from userArray and api-login.js
  let userObj = {
    'userid': req.body.userid,
    'username': req.body.username,
    'role': req.body.role,
    'email': req.body.email
  };

  //creates an empty array for all logged in users
  let uArray = [];

  //creates a new entry in the array with user information and pushes the information to console
  uArray.push(userObj);
  console.log(uArray);

  res.send(uArray);

}
