const User = require("../models/User");
const tokenManager = require("../util/token.generator");
const { validationResult } = require("express-validator");

const userController = {
  registerUser: async (req, res) => {
    try {
      const { name, mobile, ig_username } = req.body;
      const token = await tokenManager.tokenGenerator(mobile);
      const new_user = await User.create({
        name: name,
        mobile: mobile,
        ig_username: ig_username,
        token: token,
      });
      res.status(201).json({
        message: new_user,
        code: 201,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  //   end of registerUser
  loginUser: async (req, res) => {
    const { mobile, sms } = req.body;
    try {
      const user = await User.findOne({
        where: { mobile: mobile },
      });
      if (user === null) {
        return res.status(404).json({
          message: "User not found.",
          code: 404,
        });
      } else {
        const token = await tokenManager.tokenGenerator(mobile);
        const user = await User.findByPk(mobile);
        user.token = token;
        await user.save();
        return res.status(200).json({
          message: user.mobile,
          token: token,
          code: 200,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
};

module.exports = userController;
