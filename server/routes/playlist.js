const express = require('express');
const playlist = require("../controller/playlist.controller");
const playListRouter = express();
playListRouter.get("/categories", playlist.getAllPlaylistCategories);
module.exports = playListRouter;