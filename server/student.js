const con = require("./database/dbConfig");
// const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const { promisify } = require("util");


const studentLogin = async (req, res) => {
  try {
      const { email, password } = req.body;
      if (!email || !password) {
          return res.status(400).send({
              message: "Please Provide an email and password"
          })
      }
     con.query('SELECT * FROM students WHERE email = ?',[email], async (err, results) => {
          console.log(results);
          if (!results || !await bcrypt.compare(password,results[0].password)) {
              res.status(401).send({
                  message: 'Email or Password is incorrect'
              })
          } else {
              const id = results[0].id;

              const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                  expiresIn: process.env.JWT_EXPIRES_IN
              });

              console.log("the token is " + token);

              // const cookieOptions = {
                  // expires: new Date(
                      // Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                  // ),
                  // httpOnly: true
              // }
              // res.cookie('userSave', token, cookieOptions);
              res.status(200).redirect("/");
          }
      })
  } catch (err) {
      console.log(err);
  }
}

const studentSignup = (req, res) => {
  console.log(req.body);
  const { name, email, password, passwordConfirm } = req.body;
  con.query('SELECT email from students WHERE email = ?',[email], async (err, results) => {
      if (err) {
          console.log(err);
      } else {
          if (results.length > 0) {
              return res.send({
                  message: 'The email is already in use'
              })
          } else if (password != passwordConfirm) {
              return res.send({
                  message: 'Password dont match'
              });
          }
      }

      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);

      con.query("INSERT INTO students(name, email, password) VALUES(?, ?, ?)",
      [name, email,hashedPassword], (err, results) => {
          if (err) {
              console.log(err);
          } else {
              return res.send({
                  message: 'Student registered'
              });
          }
      })
  })
  res.send("Form submitted");
}

module.exports ={ studentSignup, studentLogin } ;
