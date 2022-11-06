// import { user } from "../models/user";
// import * as bcrypt from "bcrypt";
// import { apiResponse } from "../helper/helper";
const bcrypt = require('bcrypt')
const user = require('../models/user');
const apiResponse  = require("../helper/helper");
const jwt = require('jsonwebtoken')
exports.userSignup = async (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;
  console.log(userName, email, password, confirmPassword,req);
  try {
    const userFound = await user.find({ $or: [{ email:email }, { userName:userName }] });
    console.log(userFound)
    if (userFound.length) {
      return apiResponse(res, { statusCode: 409, error: "User already exist" });
    }
    if (password !== confirmPassword) {
      return apiResponse(res, {
        statusCode: 400,
        error: "Passwords don't match",
      });
    }
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    const hashedPassword = await bcrypt.hash(password, salt);
    const userCreated = await user.create({
      userName,
      email,
      password: hashedPassword,
    });
    if (userCreated) {
      return apiResponse(res, {
        message: "Congratulations, your account has been successfully created",
      });
    }
  } catch (error) {
      console.log(error)
    return apiResponse(res, {
      statusCode: 400,
      error:
        "Problem while creating user, please contact administration for further help",
    });
  }
};
exports.userLogin = async(req,res) => {
  try{
    const {email,password} = req.body;
    const userFound = await user.findOne({email}).lean();
    console.log("here");
    if(!userFound){
      return apiResponse(res,{statusCode:400,error:"Invalid email"})
    }
    else{
      const passwordMatched = await bcrypt.compare(password,userFound.password);
      if(!passwordMatched){
        return apiResponse(res,{statusCode:400,error:"Invalid Password"})
      }
      const secret = 'devPriyaProject921'
      const userToken  = jwt.sign({data:userFound},secret,{ expiresIn: '1m' })
      apiResponse(res,{data:{...userFound,userToken},statusCode:200,message:"Login Successfull"})
    }
  }
  catch(error){
    return apiResponse(res,{statusCode:500,error:"Problem while logging in user, Please contact administration for further help"})
  }
}