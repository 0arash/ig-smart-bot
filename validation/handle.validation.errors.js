const { validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const validateErrors = validationResult(req);
  if (!validateErrors.isEmpty()) {
    return res.status(400).json({
      message: validateErrors.array(),
      code: 400,
    });
  }
  next();
};

module.exports = {handleValidationErrors};
