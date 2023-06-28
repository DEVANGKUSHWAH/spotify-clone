const express = require('express');
const playlist = require("../controller/playlist.controller");
const playListRouter = express();
playListRouter.get("/categories", playlist.getAllPlaylistCategories);
playListRouter.post("/createPlayList", playlist.createPlayList);
playListRouter.get("/getPlayLists", playlist.getPlayLists);
playListRouter.get("/getSongsFromPlaylist/:playlist", playlist.getSongsFromPlaylist);
playListRouter.post("/uploadSongs",playlist.upload.single('song'), playlist.uploadSongs);
module.exports = playListRouter;