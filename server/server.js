const express = require("express");
const dotenv = require("dotenv");
const student=require('./Routes/studentRoute')
const cors = require("cors");
// const pool = require("./database/dbConfig")
// const bcrypt = require("bcryptjs");
// const jwt = requir0e("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./.env" });

// app.use('/con',con),

app.use('/student',student);


const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log("Express server listening on port",`${port}`);
});
