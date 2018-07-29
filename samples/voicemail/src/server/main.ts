import * as express from "express";

const app = express();

app.get("/api/sub", function(req, res) {
  res.send([
      {"id":1, "name": "Ori", "email": "ori@gmail.com"},
      {"id":2, "name": "Roni", "email": "roni@gmail.com"},
      {"id":3, "name": "Udi", "email": "udi@gmail.com"}
  ]);
});

app.listen(3000, function() {
  console.log("Server is running");
});
