const User = require("../model/user-model");
const bcrypt = require("bcryptjs");

// This is for home route

const home = async (req, res) => {
  try {
    res.status(200).send("This is a home page!! from controller");
  } catch (error) {
    console.log(error);
  }
};

// This is for register router
// Inside your register function in the backend
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const userCreate = await User.create({ email, password });

    // Generate JWT token
    const token = await userCreate.generateToken();

    // console.log(token);

    res.status(200).json({
      msg: "Registration successfully",
      token: token, // Include the token in the response
      userId: userCreate._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ message: "Page not found" });
  }
};


// This is for login router.

const userInfo = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports = { home, register, userInfo };
