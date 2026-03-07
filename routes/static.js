const express = require("express");
const router = express.Router();

const staticController = require("../controllers/static");

// Privacy Page
router.get("/privacy", staticController.renderPrivacy);

// Terms Page
router.get("/terms", staticController.renderTerms);

module.exports = router;