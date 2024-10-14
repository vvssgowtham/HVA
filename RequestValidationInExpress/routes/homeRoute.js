const express = require("express");
const router = express.Router();
const getUser = require("../controllers/userController");
const { validate } = require("../validators/users");
const { validationResult } = require('express-validator');


router.post(
  "/user",
  validate("getUser"),
  (req, res, next) => {
    const errors = validationResult(req);
    //Unprocessable Entity
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  getUser
);

module.exports = router;
