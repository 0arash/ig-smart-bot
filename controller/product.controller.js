const Product = require("../models/Product");

const productController = {
  newProduct: async (req, res) => {
    try {
      const { title, description, price, color, size } = req.body;
      const new_product = await Product.create({
        title: title,
        description: description,
        price: price,
        color: color,
        size: size,
      });
      res.status(201).json({
        message: new_product,
        code: 201,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
};

module.exports = productController;
