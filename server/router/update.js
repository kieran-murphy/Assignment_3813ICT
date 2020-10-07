module.exports = function(db, app, ObjectID) {
  app.post("/getItem", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    //defines the input for update function
    productID = req.body.passingid;
    var objectid = new ObjectID(productID);
    //selects mongo database to be used
    const collection = db.collection("users");
    //finds item using primary key ID
    collection
      .find({ _id: objectid })
      .limit(1)
      .toArray((err, docs) => {


        res.send(docs);
      });
  });

  
  app.post("/update", function(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    product = req.body;
    console.log(product);
    
    //accepts new objectid and sets updated information in each field
    var objectid = new ObjectID(product.objectIDpassing);
    const collection = db.collection("users");
    collection.updateOne(
      { _id: objectid },
      {
        $set: {
          name: product.name,
          description: product.description,
          price: product.price,
          units: product.units
        }
      },
      () => {
        res.send(true);
      }
    );
      //logs the new updated version of database to console
    console.log(db.collection("users"));
  });
};
