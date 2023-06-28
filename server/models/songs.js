const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    songURl: {
      type: String,
      required: true,
    },
    playlist: {
      type: mongoose.Types.ObjectId,
      ref: "playlist",
    },
  },
  { timestamps: true }
);

const song = mongoose.model('song',songSchema,"Songs")

module.exports = song
