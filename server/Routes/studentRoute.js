const express = require("express");
const Router = express.Router();
const student = require("../student");

Router.post("/login",student.studentLogin);
Router.post("/register",student.studentSignup);

module.exports = Router;
