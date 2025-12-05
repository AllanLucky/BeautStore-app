import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import e from "express";

// REGISTER USER
// POST /api/v1/auth/register
// PUBLIC
// @aACCESS  PUBLIC


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const usewrExists = await User.findOne({ email });

  // If user exists, throw an error
  if (usewrExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create new user
  const user = await User.create({ name, email, password });

  // If user creation is successful, generate token and send response
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// LOGIN USER
// POST /api/v1/auth/login
// PUBLIC
// @aACCESS  PUBLIC

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Check if user exists and password matches 
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// LOGOUT USER
// POST /api/v1/auth/logout
// PRIVATE
// @aACCESS  PRIVATE

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export { registerUser, loginUser, logoutUser };


