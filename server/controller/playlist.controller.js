const category = require("../models/category")

exports.getAllPlaylistCategories = async(req,res,next) => {
    try{
        const categories = await category.find().lean().exec()
        if(categories.length){
            return res.status(200).send({statusCode:200,data:categories,message:"",global_error:""})
        }
        else{
            return res.status(404).send({statusCode:404,data:[],message:"",global_error:"No Categories found"})
        }
    }
    catch(error){
        return res.status(500).send({statusCode:500,data:[],message:"",global_error:"Problem while getting categories"})
    }
}
