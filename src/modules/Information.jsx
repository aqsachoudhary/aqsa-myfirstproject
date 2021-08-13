import React, { useState, useEffect } from "react";
import "../styles/information.css";
const Information = (props) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(true);
  const [cites, setCites] = useState([
    "Islambad",
    "Rawalpindi",
    "karachi",
    "Faslabad",
    "Lahore",
    "Gujar khan",
  ]);

  const [error, setError] = useState("");

  useEffect(() => {
    if (name !== "" || name.length > 3) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    if (lastName !== "" || lastName.length > 3) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    if (email !== "" || email.length > 3) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    if (adress !== "" || adress.length > 3) {
      setIsError(false);
    } else {
      setIsError(true);
    }

    if (date !== "") {
      setIsError(false);
    } else {
      setIsError(true);
    }

    if (city !== "") {
      setIsError(false);
    } else {
      setIsError(true);
    }

    if (gender !== "") {
      setIsError(false);
    } else {
      setIsError(true);
    }
    if (isChecked !== false) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [isChecked, name, lastName, email, adress, date, city, gender]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || name.length <= 3) {
      setError("Enter Name");
      return;
    } else if (lastName === "" || lastName.length <= 3) {
      setError("Enter LastName");
      return;
    } else if (email == "" || email.length <= 3) {
      setError("Enter Email");
      return;
    } else if (adress === "" || adress.length <= 3) {
      setError("Enter Adress");
      return;
    } else if (date === "") {
      setError("Enter Date");
      return;
    } else if (city === "") {
      setError("Select City");
      return;
    } else if (gender == "") {
      setError("Select gender");
      return;
    } else if (isChecked == "") {
      setError("ek nzr check box pr please :)");
    } else {
      setError("");
      alert("Form Updated");
    }
  };

  return (
    <>
      <div className="container">
        <h3>Information Form</h3>
        <form action="" className="formContainer" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="LastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Adress"
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <div className={"selectContainer"}>
            <label>Select city</label>

            <select
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value="">CITY</option>

              {cites.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="radiobutton">
            <h5>Select your Age</h5>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value={"male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value={"female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>
          <div className="checkbox">
            <label style={{ fontSize: "14px" }}>
              Are You Agree With Our Terms&Conditions?
            </label>
            <input
              type="checkbox"
              onChange={(e) => setIsChecked(!isChecked)}
              checked={isChecked}
            />
          </div>
          <h4 style={{ fontSize: "14px", color: "red" }}>{error}</h4>
          <button
            className="submitbutton"
            type="submit"
            style={{
              backgroundColor: isError ? "white" : "gold",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Information;
