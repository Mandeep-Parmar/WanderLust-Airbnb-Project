const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersController = require("../controllers/users.js");

router.get("/signup", usersController.renderSignUpForm);

router.post("/signup", wrapAsync(usersController.signUp));

router.get("/login", usersController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  usersController.login,
);

router.get("/logout", usersController.logout);

module.exports = router;