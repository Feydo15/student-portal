import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
   const [name ,setName] = useState("");
   const [email ,setEmail] = useState("");
   const [password ,setPassword] = useState("");
   const [loginStatus ,setLoginStatus] = useState("");
   const [registerStatus ,setRegisterStatus] = useState("");
   const [student_id ,setStudent_id] = useState("")

    const register = (e) =>{
   e.preventDefault();
axios.post("http://localhost:8000/student/register",{
name: name,
email: email,
password: password,
}).then(res => {
  if (res.data.message)
 { setRegisterStatus(res.data.message) }else {
 setRegisterStatus("Successfully registered");
  }
})

    }
   

const login = (e) =>{
e.preventDefault();
axios.post("http://localhost:8000/student/login",{
student_id: student_id,
password: password,
}).then(res => {
  if (res.data.message)
 { setLoginStatus(res.data.message) 
console.log("res.data", res.data)
}else {
  setLoginStatus(res.data[0].student_id);
  console.log(res.data);
  }
})

    }
  return (
    <div className="App">
      <div className="container">
        <form>
        <h1 className="header">Register Form</h1>
        <label htmlFor="name">Name :</label>
        <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)}   />
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          className="form-control"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <label htmlFor="confirmPassword">ConfirmPassword :</label>
       <input
    type="text"
    className="form-control"
    name="confirmPassword"
    onChange={(e) => setPassword(e.target.value)}
  />
         <input className="button" type="submit" onClick={register} value="Register" />
         </form>
         <div>{registerStatus}</div>
      </div>
      <div className="container">
        <form>
        <h1 className="header">Login Form</h1>
        <label htmlFor="name">Name :</label>
        <input type="text" className="form-control" name="name"    onChange={(e) => setName(e.target.value)}  />
        <label htmlFor="student_id">Student ID :</label>
        <input type="text" className="form-control" name="student_id"   onChange={(e) => setStudent_id(e.target.value)}  />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          className="form-control"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <input className="button" type="submit" onClick={login} value="Login" />
          </form>
          <div>{loginStatus}</div>
      </div>


    </div>
  );
}

export default App;
