module.exports = function (req, res) {

  let userObj = {
    'userid': req.body.userid,
    'username': req.body.username,
    //'birthdate': req.body.birthdate,
    'role': req.body.role,
    'email': req.body.email
  };

  let uArray = [];

  uArray.push(userObj);
  console.log(uArray);

  res.send(uArray);

}
