module.exports = function(db, app, ObjectID) {
  app.post("/deleteitem", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }

    //defines the name of the database for function use
    const product_collection = db.collection("users");
    //retrieves ID of an item to be deleted from database
    productID = req.body.id;
    var objectID = new ObjectID(productID);

    //deletes an item from database selected by ID
    product_collection.deleteOne({ _id: objectID }, (err, data) => {
      if (err) throw err;
      res.send(true);
    });
  });
};
