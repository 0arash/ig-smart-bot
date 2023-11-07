const Plan = require("../models/Plan");
const { validationResult } = require("express-validator");

const planController = {
  getPlans: async (req, res) => {
    try {
      const subs = await Plan.findAll();
      res.status(200).json({
        message: subs,
        code: 200,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  //   end of get subscription

  getPlanById: async (req, res) => {
    try {
      const { subId } = req.body;
      const sub = await Plan.findByPk(subId);
      res.status(200).json({
        message: sub,
        code: 200,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  // end of get subscription by id
  newPlan: async (req, res) => {
    try {
      const { title, days, price } = req.body;
      const newSub = await Plan.create({
        title: title,
        days: days,
        price: price,
      });
      res.status(201).json({
        message: newSub,
        code: 201,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  // end of new sub
  deletePlanById: async (req, res) => {
    try {
      const { title } = req.body;
      const delSub = await Plan.destroy({
        where: {
          title: title,
        },
      });
      console.log(delSub);
      res.status(200).json({
        message: delSub,
        code: 200,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  // end of delete sub by id
  updatePlanById: async (req, res) => {
    try {
      const { title, days, price } = req.body;
      const updateSub = await Plan.findByPk(title);
      updateSub.title = title;
      updateSub.price = price;
      updateSub.days = days;
      await updateSub.save();
      res.status(200).json({
        message: updateSub,
        code: 200,
      });
    } catch (error) {
      res.status(500).json({
        message: error,
        code: 500,
      });
    }
  },
  // end of update sub
};

module.exports = planController;
