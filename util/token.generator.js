const jwt = require("jsonwebtoken");
const keys = require("../util/constants")

class TokenManager {
  static async tokenGenerator(mobile) {
    const token = await jwt.sign({ mobile: mobile }, keys.JWT_SECRET, {
      expiresIn: "1d",
    });
    return token;
  }
}

module.exports = TokenManager