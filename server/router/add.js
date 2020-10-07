module.exports = function(db, app) {
  app.post("/add", function(req, res) {
    console.log("ADD ADD ADD ADD");
    if (!req.body) {
      return res.sendStatus(400);
    }

    //takes req.body as an input to make a new database entry
    product_new = req.body;
    //defines the name of the database for function use
    const product_collection = db.collection("users");
    
    // allows an insertion of information from user input if it uses a different id (primary key), otherwise sends error
    product_collection.find({ id: product_new.id }).count((err, count) => {
      if (count == 0) {
        product_collection.insertOne(product_new, (err, dbres) => {
          if (err) throw err;
          let num = dbres.insertedCount;
          console.log(num);
          //send back to client number of items instered and no error message
          res.send(true);
        });
      } else {
        res.send(false);
      }
    });
  });
};
