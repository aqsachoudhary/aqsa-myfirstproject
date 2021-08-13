import React, { useState, useEffect } from "react";

import "../styles/Assignment.css";
import CustomeInput from "../components/CustomeInput";
import CustomeTextArea from "../components/CustomeTextArea";
import CustomeDropdown from "../components/CustomeDropdown";

const Assignment = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectsList] = useState(["Block", "contact", "message", "call"]);
  const [message, setMessage] = useState("");
  const [isVarification, setIsVarification] = useState(false);
  const [isError, setIsError] = useState(true);
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    console.log("isError :>> ", isError);
    if (name === "" || name.length < 3) {
      setIsError(true);
    } else if (lastname === "" || lastname.length < 3) {
      setIsError(true);
    } else if (email === "" || email.length < 8) {
      setIsError(true);
    } else if (phone === "" || phone.length < 11) {
      setIsError(true);
    } else if (subject === "") {
      setIsError(true);
    } else if (message === "" || message.length <= 3) {
      setIsError(true);
    } else if (isVarification == false) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [name, lastname, email, phone, subject, message, isVarification]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setIsError("enter your name");
      return;
    } else {
      setIsError("");
    }
    const info = {
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
      isVarification: isVarification,
    };
    console.log("info :>> ", info);
  };
  return (
    <>
      <div className="container">
        <h3>Contact Information</h3>

        <form action="" className="formmContainer" onSubmit={handleSubmit}>
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
            value={lastname}
            error={lastNameError}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            onBlur={() => {
              if (lastname === "") {
                setLastNameError("Enter Your LastName");
              } else {
                setLastNameError("");
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
                setEmailError("Enter Your Email");
              } else {
                setEmailError("");
              }
            }}
          />
          <CustomeInput
            type="tel"
            placeholder=" Phone"
            error={phoneError}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            onBlur={() => {
              if (phone === "") {
                setPhoneError("Enter Your phone");
              } else {
                setPhoneError("");
              }
            }}
          />
          <CustomeDropdown
            label="Subject"
            defaultOption="other"
            list={subjectsList}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <CustomeTextArea
            label="Message"
            error={messageError}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onBlur={() => {
              if (message === "") {
                setMessageError("Enter Your Message");
              } else {
                setMessageError("");
              }
            }}
          />

          <div className="fieldBox">
            <label>Varification</label>
            <div
              className="leftBox"
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                checked={isVarification}
                onChange={(e) => {
                  setIsVarification(!isVarification);
                }}
              />
              <h6 style={{ marginLeft: "20px" }}>i am not Rebort</h6>
            </div>
          </div>
          <div className="buttoninfo">
            <h1
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "10px",
              }}
            >
              {isError}
            </h1>
            <button
              type="submit"
              className="button"
              style={{ backgroundColor: isError ? "white" : "brown" }}
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Assignment;
