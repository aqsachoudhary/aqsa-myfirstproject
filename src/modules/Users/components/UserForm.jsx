import React, { useState, useEffect } from "react";
import { link, useHistory, useLocation } from "react-router-dom";
import CustomeInput from "../../../components/CustomeInput";
import usersData from "../../../helper/usersData";

import "../../../styles/UserForm.css";
const UserForm = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [userId, setUerId] = useState(props.match.params.id);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmil] = useState("");
  const [password, setPassword] = useState("");
  const [conformpassword, setConformPassword] = useState("");
  const [address, setAddress] = useState({
    street: "",
    city: "",
  });
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmilError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conformpasswordError, setConformPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [cityError, setCityError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [company, setCompany] = useState({ name: "" });
  const [error, setError] = useState(true);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    // console.log("location :>> ", location);
    // console.log("history :>> ", history);
    // console.log("userId :>> ", userId);
    // console.log("history :>> ", history.location.pathname);
    if (history.location.pathname === "/users/new") {
      setIsNew(true);
    } else {
      setIsNew(false);
      if (userId) {
        findUser(userId);
      }
    }
  }, []);

  useEffect(() => {
    if (name == "" || name.length <= 3) {
      setError(true);
      return;
    } else if (userName == "" || userName.length <= 3) {
      setError(true);
      return;
    } else if (isNew && (email == "" || email.length <= 8)) {
      setError(true);
      return;
    } else if (isNew && (password == "" || password.length <= 6)) {
      setError(true);
      return;
    } else if (
      isNew &&
      (conformpassword == "" || conformpassword.length <= 6)
    ) {
      setError(true);
      return;
    } else if (address.city == "" || address.city.length <= 3) {
      setError(true);
      return;
    } else if (address.street == "" || address.street.length <= 3) {
      setError(true);
      return;
    } else if (phone == "" || phone.length <= 11) {
      setError(true);
      return;
    } else if (company.name == "" || company.name.length <= 3) {
      setError(true);
      return;
    } else {
      setError(false);
    }
  }, [
    name,
    userName,
    email,
    password,
    conformpassword,
    phone,
    address,
    company,
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) {
      return;
    }

    if (isNew) {
      createUser();
    } else {
      updateUser();
    }
  };
  const createUser = () => {
    const userExist = usersData.find((u) => u.email == email);
    if (userExist) {
      alert("user exist already ");
    } else {
      const newUser = {
        name,
        userName,
        email,
        password,
        conformpassword,
        phone,
        address,
        company,
      };
      usersData.push(newUser);
      console.log("usersData :>> ", usersData);
      alert("User Created successfully");
    }
  };

  const updateUser = () => {
    const index = usersData.findIndex((u) => u.id == userId); //find index of user
    const updatedUser = usersData[index]; ///it will give us user object
    usersData[index] = {
      ...updatedUser,
      name: name,
      username: userName,
      phone: phone,
      address: address,
      company: company,
    };
    console.log("usersData :>> ", usersData);
  };

  const findUser = (id) => {
    const isUser = usersData.find((u) => u.id == id);
    console.log("isUser :>> ", isUser);
    if (isUser) {
      setName(isUser.name);
      setUserName(isUser.username);
      setPhone(isUser.phone);
      setCompany({ name: isUser.company.name });
      setAddress({ city: isUser.address.city, street: isUser.address.street });
    }
  };
  return (
    <div className="UserForm">
      <div className="innerContainer">
        <h1 style={{ color: "white" }}>
          {isNew ? "Create User" : "Edit User"}
        </h1>
        <form action="" onSubmit={handleSubmit} style={{ width: "60%" }}>
          <CustomeInput
            type="text"
            placeholder="Name"
            error={nameError}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={() => {
              if (name == "" || name.length <= 3) {
                setNameError("Enter More then 3 Characters");
              } else {
                setNameError("");
              }
            }}
          />
          <CustomeInput
            type="text"
            placeholder="User Name"
            error={userNameError}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onBlur={() => {
              if (userName == "" || userName.length <= 3) {
                setUserNameError("Enter More then 3 Characters");
              } else {
                setUserNameError("");
              }
            }}
          />
          {isNew && (
            <>
              <CustomeInput
                type="email"
                placeholder="Email"
                error={emailError}
                value={email}
                onChange={(e) => {
                  setEmil(e.target.value);
                }}
                onBlur={() => {
                  if (email == "" || email.length <= 3) {
                    setEmilError("Enter a Valid email");
                  } else {
                    setEmilError("");
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
                  if (password == "" || password.length <= 6) {
                    setPasswordError("passwod length must be 6");
                  } else {
                    setPasswordError("");
                  }
                }}
              />
              <CustomeInput
                type="password"
                placeholder="Confirm Password"
                error={conformpasswordError}
                value={conformpassword}
                onChange={(e) => {
                  setConformPassword(e.target.value);
                }}
                onBlur={() => {
                  if (conformpassword == "" || conformpassword !== password) {
                    setConformPasswordError(" Confirm Password not match ");
                  } else {
                    setConformPasswordError("");
                  }
                }}
              />
            </>
          )}

          <CustomeInput
            type="tel"
            placeholder="+92-88845"
            error={phoneError}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            onBlur={() => {
              if (phone == "" || phone.length <= 11) {
                setPhoneError("Enter a valid number");
              } else {
                setPhoneError("");
              }
            }}
          />
          <CustomeInput
            type="text"
            placeholder="Company"
            error={companyError}
            value={company.name}
            onChange={(e) => {
              let newCompany = {
                ...company,
                name: e.target.value,
              };
              setCompany(newCompany);
            }}
            onBlur={() => {
              if (company.name == "") {
                setCompanyError("Enter Your Company");
              } else {
                setCompanyError("");
              }
            }}
          />

          <div className="address">
            <div style={{ width: "48%" }}>
              <CustomeInput
                type="text"
                placeholder="City"
                error={cityError}
                value={address.city}
                onChange={(e) => {
                  let newAddress = {
                    ...address,
                    city: e.target.value,
                  };
                  setAddress(newAddress);
                }}
                onBlur={() => {
                  if (address.city == "") {
                    setCityError("Enter Your City");
                  } else {
                    setCityError("");
                  }
                }}
              />
            </div>
            <div style={{ width: "48%" }}>
              <CustomeInput
                type="text"
                placeholder="Street"
                error={streetError}
                value={address.street}
                onChange={(e) => {
                  let newAddress = {
                    ...address,
                    street: e.target.value,
                  };
                  setAddress(newAddress);
                }}
                onBlur={() => {
                  if (address.street == "") {
                    setStreetError("Enter Your street");
                  } else {
                    setStreetError("");
                  }
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="buttonForm"
            style={{
              backgroundColor: error ? "#3f4d68" : "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {isNew ? "Create" : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserForm;
