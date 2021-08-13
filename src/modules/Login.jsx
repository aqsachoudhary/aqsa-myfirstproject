import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import usersData from "../helper/usersData";
import CustomeInput from "../components/CustomeInput";
import "../styles/Login.css";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || email.length <= 3) {
      setEmailError("Please enter your email");
      return;
    } else {
      setEmailError("");
    }
    if (password === "" || password.length <= 3) {
      setPasswordError("Please enter your password");
      return;
    } else {
      setPasswordError("");
    }
    const userExist = usersData.find(
      (u) => u.email == email && u.password == password
    );
    if (userExist) {
      // alert("user login Successfully  ");
      history.push("/home");
    } else {
      alert(" Invalid Email or password  ");
    }
  };
  return (
    <div className="maincontainer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "40%",
          height: "40%",
          backgroundColor: "dodgerblue",
          borderRadius: "30px",
          padding: "40px 0px",
        }}
      >
        <h1 style={{ color: "#0d0d80" }}>Login</h1>

        <form
          action=""
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
          onSubmit={handleSubmit}
        >
          <CustomeInput
            type="email"
            placeholder="Email"
            error={emailError}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={() => {
              if (email === "") {
                setEmailError("enter you Email");
              } else {
                setEmailError("");
              }
            }}
          />
          <CustomeInput
            type="password"
            placeholder="Password"
            error={passwordError}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            // onBlur={() => {
            //   if (password == "") {
            //     setPasswordError("Enter Your Password");
            //   } else {
            //     setPasswordError("");
            //   }
            // }}
          />

          <button type="submit" className="buttonlogin">
            Login
          </button>
          <h6
            style={{
              color: "#0d0d80",
              fontSize: "13px",
              fontFamily: "unset",
            }}
          >
            If You Dont have Account?<Link to="/signup"> Signup</Link>
          </h6>
        </form>
      </div>
    </div>
  );
};
export default Login;
