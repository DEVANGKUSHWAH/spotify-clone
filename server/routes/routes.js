const userRouter = require('./auth');
const playListRouter = require('./playlist')

const express = require('express');

const routes = express()
routes.use("/user", userRouter);
routes.use("/playList", playListRouter);

module.exports = routes