// import * as express from 'express';
// import * as cors from "cors";
// import * as mongoose from "mongoose";
// import * as userRouter  from "./routes/auth";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const  userRouter = require("./routes/auth");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
mongoose
  .connect(
    "mongodb+srv://devang:devang123456@cluster0.yvmynfk.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("listening at port 3001");
    });
  })
  .catch((error) => {
    console.log("No Database Found ");
  });
app.get("/", (req, res) => {
  res.send("Welcome to backend");
  return 1;
});
app.use('/user',userRouter)
