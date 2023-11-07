const express = require("express");
const router = express.Router();
const subController = require("../controller/plan.controller");
// sub validator
const {
  deleteSubscriptionValidation,
  getSubscriptionValidation,
  newSubscriptionValidation,
} = require("../validation/subscription.validation");
const { handleValidationErrors } = require("../validation/handle.validation.errors");

// routes
router.get("/api/plan", subController.getPlans);
router.get(
  "/api/plan/:title",
  getSubscriptionValidation,
  handleValidationErrors,
  subController.getPlanById
);
router.post(
  "/api/plan",
  newSubscriptionValidation,
  handleValidationErrors,
  subController.newPlan
);
router.put("/api/plan", subController.updatePlanById);
router.delete(
  "/api/plan",
  deleteSubscriptionValidation,
  handleValidationErrors,
  subController.deletePlanById
);

module.exports = router;
