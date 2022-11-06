// import {userSignup} from "../controller/user.controller";
// import express from "express";
const express = require('express');
const user = require("../controller/user.controller");
const userRouter = express();
userRouter.post("/signup", user.userSignup);
userRouter.post('/login',user.userLogin)
module.exports = userRouter;
