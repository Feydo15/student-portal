

// how to create a table in mySQL

// mysql> create table students(
    // -> id INT PRIMARY KEY AUTO_INCREMENT,
    // -> student_id  varchar(10)  DEFAULT (UUID()),
    // -> name varchar(30) NOT NULL,
    // -> email varchar(30) NOT NULL,
    // -> password varchar(100) NOT NULL);



    // mysql> create table students(
        // -> id INT PRIMARY KEY AUTO_INCREMENT,
        // -> student_id  varchar(10)  DEFAULT (UUID()),
        // -> name varchar(30) NOT NULL,
        // -> email varchar(30) NOT NULL,
        // -> password varchar(100) NOT NULL);


    // show the table
    // mysql> desc students;



    // how to insert data into a table
    // mysql> INSERT INTO  students values(0001, "hjkjkks","feydo", "feydo@gail.com", "hjgsgjs78873");


    // select from a table
    // mysql> select * from students;




    // const checkPassword = async (result, req, res) => {
        // if (result.length > 0) {
        //   if (await bcrypt.compare(req.password, data[0].password)) {
            // res.json({
            //   status: 200,
            //   message: "Login success",
            // });
        //   } else {
            // res.json({
            //   status: 400,
            //   message: "password not matched",
            // });
        //   }
        // }
    //   };



    // app.post("/register", async (req, res) => {
        // const { name, email, password, confirmPassword } = req.body;
        // const salt = await bcrypt.genSalt(10);
        // const hashpwd = await bcrypt.hash(password, salt);
    //   
        // con.query("SELECT email FROM students WHERE email = ?", [email], (err, result) => {
        //   if (err) {
            // console.log(err);
        //   }
        //   if(result.length > 0){
            // res.send({ message: "User Already Exist. Please Login" });
        //   }else if(password !== confirmPassword){
            // res.send({ message: "Passwords does not match!" });
        //   } 
        //   const token = jwt.sign(
        //   { student_id: student_id, email },
            // process.env.TOKEN_KEY,
            // {
            //   expiresIn: "1h",
            // }
        //   );
    //   
        //   student.token = token;
        //   console.log(student.token)
        // con.query(
        //   "INSERT INTO students (name, email, password) VALUES(?, ?, ?)",
        //   [name, email, hashpwd],
        //   (err, result) => {
            // if (result) {
            //   console.log(result);
            //   res.send(result);
            // } else {
            //   console.log(err);
            //   res.send({ message: "ENTER CORRECT ASKED DETAILS!" });
            // }
        //   }
        // );
    //   });
    //   });
      
      
    // app.post("/login", (req, res) => {
        // const { student_id, password} = req.body
        //  console.log(req.body);
        // con.query(
        // "SELECT * FROM students WHERE student_id = ? AND password = ?",
        // [student_id, password],
        // (err, result) => {
        // console.log("hl",student_id);
        // if (err) {
        // err = req.setEncoding({ err: err });
        // } else {
        // if (result.length !== null) {
        // checkPassword(result,req.body,res)
        // res.send(result);
        // console.log(result);
        // } else {
        // console.log(err);
        // res.send({ message: "STUDENT_ID OR PASSWORD IS INCORRECT" });
        // }
        // }
        // }
        // );
        // });
// 