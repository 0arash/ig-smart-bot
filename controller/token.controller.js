const jwt = require("jsonwebtoken");
const keys = require("../util/constants")

const tokenContoller = {
  verifyToken: (req, res, next) => {
    const token = req.headers["token"];
    if (!token) {
      return res.json({
        message: "Token header is missing.",
        status: "ok",
        code: "401",
      });
    }
    jwt.verify(token, keys.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid token.",
          code: 403,
        });
      }
      next()
    });
  },
};

module.exports = tokenContoller