const apiResponse = require("../helper/helper");
const category = require("../models/category");
const playList = require("../models/playlist");
const song = require("../models/songs");
const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req,file,callback)=>{callback(null,'./assets/songs')},
  filename:(req,file,cb)=>{
    cb(null,file.originalname)
  }
})

exports.upload = multer({storage:storage})
exports.upload = multer({storage:storage})

exports.getAllPlaylistCategories = async (req, res) => {
  try {
    const categories = await category.find().lean().exec();
    if (categories.length) {
      return apiResponse(res, {
        statusCode: 200,
        data: categories,
        message: "",
        global_error: "",
      });
    } else {
      return apiResponse(res, {
        statusCode: 400,
        error: "No Categories found",
      });
    }
  } catch (error) {
    return apiResponse(res, {
      statusCode: 500,
      error: "Problem while getting categories",
    });
  }
};

exports.createPlayList = async (req, res) => {
  try {
    const { name, imageUrl, category } = req.body;
    const playListCreated = await playList.create({name,imageUrl,category})
    if(!playListCreated){
      return apiResponse(res,{
        statusCode:"400",
        error:"Please send valid details"
      })
    }
    return apiResponse(res,{
      statusCode:200,
      message:'Playlist created successfully'
    })
  } catch (error) {
    return apiResponse(res, {
      statusCode: 500,
      error: "Problem while creating Playlist",
    });
  }
};

exports.getPlayLists = async (req, res) => {
  try {
    const playLists = await playList.find().populate('category','name').lean().exec();
    if (playLists.length) {
      return apiResponse(res, {
        statusCode: 200,
        data: playLists,
        message: "",
        global_error: "",
      });
    } else {
      return apiResponse(res, {
        statusCode: 400,
        error: "No Playlists found",
      });
    }
  } catch (error) {
    return apiResponse(res, {
      statusCode: 500,
      error: "Problem while getting Playlists",
    });
  }
};

exports.getSongsFromPlaylist = async (req, res) => {
  try {
    const { playlist } = req.params;
    const songs = await song.find({ playlist });
    if (songs.length) {
      return apiResponse(res, {
        statusCode: 200,
        data: songs,
        message: "Songs fetched successfully",
      });
    }
    return apiResponse(res, { statusCode: 404, error: "No Songs Found" });
  } catch (error) {
    return apiResponse(res, {
      error: "Problem while finding songs",
      statusCode: 500,
    });
  }
};

exports.uploadSongs = async(req,res) => {
  try{
    const {name,playlist} = req.body;
    const songUploaded = await song.create({name,songURl:req.file.originalname,playlist})
    if (!songUploaded) {
      return apiResponse(res, {
        statusCode: "400",
        error: "Please send valid details",
      });
    }
    return apiResponse(res, {
      statusCode: 200,
      message: "Song uploaded successfully",
    });
  }
  catch(error){
    return apiResponse(res,{statusCode:500,error:"Problem While uploading Song"})
  }
}