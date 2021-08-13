import React, { useEffect, useState } from "react";
import CustomeInput from "../components/CustomeInput";
import { Link, useHistory } from "react-router-dom";
import usersData from "../helper/usersData";
import "../styles/SignUp.css";

const SignUp = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setconformPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastNameError, setlastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conformpasswordError, setConformPasswordError] = useState("");
  useEffect(() => {}, [name, lastName]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || name.length <= 4) {
      setNameError("please enter your name");
      return;
    } else {
      setNameError("");
    }

    if (lastName === "" || lastName.length <= 4) {
      setlastNameError("please enter your lastname");
      return;
    } else {
      setlastNameError("");
    }

    if (email === "" || email.length <= 4) {
      setEmailError("please enter your name");
      return;
    } else {
      setEmailError("");
    }

    if (password === "" || password.length <= 4) {
      setPasswordError("please enter your password ");
      return;
    } else {
      setPasswordError("");
    }
    if (conformPassword === "" || conformPassword.length <= 4) {
      setConformPasswordError("please enter your conformpassword ");
      return;
    } else {
      setConformPasswordError("");
    }

    const newUser = {
      name,
      lastName,
      email,
      password,
    };
    usersData.push(newUser);
    console.log("usersData :>> ", usersData);
    // alert("Signup Successfully");
    history.push("/Login");
  };
  return (
    <div className="signupMaincontainer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          backgroundColor: "dodgerblue",
          borderRadius: "30px",
          padding: "40px 0px",
        }}
      >
        <h1>SignUp</h1>
        <form
          style={{ display: "flex", flexDirection: "column", width: "80%" }}
          onSubmit={handleSubmit}
        >
          <CustomeInput
            type="text"
            placeholder="Name"
            error={nameError}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={() => {
              if (name === "") {
                setNameError("enter you Name");
              } else {
                setNameError("");
              }
            }}
          />
          <CustomeInput
            type="text"
            placeholder="LastName"
            value={lastName}
            error={lastNameError}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            onBlur={() => {
              if (lastName === "") {
                setlastNameError("Enter Your LastName");
              } else {
                setlastNameError("");
              }
            }}
          />

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
            onBlur={() => {
              if (password == "") {
                setPasswordError("Enter Your Password");
              } else {
                setPasswordError("");
              }
            }}
          />
          <CustomeInput
            type="password"
            placeholder="ConformPassword"
            error={conformpasswordError}
            value={conformPassword}
            onChange={(e) => {
              setconformPassword(e.target.value);
            }}
            onBlur={() => {
              if (password == "") {
                setConformPasswordError("Enter Your Password");
              } else {
                setConformPasswordError("");
              }
            }}
          />

          <button type="submit" className="buttonlogin">
            SignUp
          </button>
          <h6
            style={{ color: "#0d0d80", fontSize: "13px", fontFamily: "unset" }}
          >
            If You have Account? <Link to="/Login"> LOGIN</Link>
          </h6>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
