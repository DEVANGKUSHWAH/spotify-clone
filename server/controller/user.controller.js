// import { user } from "../models/user";
// import * as bcrypt from "bcrypt";
const bcrypt = require('bcrypt')
const user = require('../models/user');
// import { apiResponse } from "../helper/helper";
const apiResponse  = require("../helper/helper");
exports.userSignup = async (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;
  try {
    const userFound = user.find({ $or: [{ email }, { userName }] });
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

// module.exports = userSignup;