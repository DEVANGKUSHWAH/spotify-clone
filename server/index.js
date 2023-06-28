const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const path = require("path")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://priyanshu:priyanshu921@naruto.sf8tp46.mongodb.net/theSpotifyClone?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("listening at port 3001");
    });
  })
  .catch((error) => {
    console.log("No Database Found ");
  });
app.use("/music", express.static(__dirname + "/assets/songs"));
app.use("/api", routes);
