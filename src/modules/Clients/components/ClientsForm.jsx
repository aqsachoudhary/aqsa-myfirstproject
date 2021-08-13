import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import CustomeInput from "../../../components/CustomeInput";

import ClientsData from "../../../helper/ClientsData";
import "../../../styles/ClientsForm.css";

const ClientsForm = (props) => {
  //   console.log("props :>> ", props);
  const history = useHistory();
  const [clientId, setClientId] = useState(props.match.params.id);

  // console.log("history :>> ", history);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [jobTitleError, setJobTitleError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [error, setError] = useState(true);
  const [isnew, setIsNew] = useState(true);
  useEffect(() => {
    if (history.location.pathname === "/clients/new") {
      setIsNew(true);
    } else {
      setIsNew(false);
    }
  }, []);
  useEffect(() => {
    if (name == "" || name.length <= 3) {
      setNameError(true);
    } else if (email == "" || email <= 3) {
      setEmailError(true);
    } else if (jobTitle == "" || jobTitle <= 3) {
      setJobTitleError(true);
    } else if (address == "" || address <= 3) {
      setAddressError(true);
    } else {
      setError(false);
    }
  }, [name, email, jobTitle, address]);
  const handlesubmit = (e) => {
    e.preventDefault();

    if (error) {
      return;
    }

    if (isnew) {
      createClients();
    } else {
      updateClient();
    }
  };
  const createClients = () => {
    const newclients = {
      id: Math.random(),
      name,
      email,
      jobTitle,
      address,
    };

    console.log("newclients :>> ", newclients);
    ClientsData.push(newclients);
    alert("Clients created successfully ", ClientsData);
  };
  const findClients = () => {
    const ClientExist = ClientsData.find((u) => u.id == clientId);
    if (ClientExist) {
      setName(ClientExist.name);
      setEmail(ClientExist.email);
      setJobTitle(ClientExist.jobTitle);
      setAddress(ClientExist.address);
    } else {
      alert("Client not found");
    }
  };
  const updateClient = () => {
    const index = ClientsData.findIndex((u) => u.id == clientId);
    // console.log("ClientExist :>> ", ClientExist);

    ClientsData[index] = {
      ...ClientsData[index],
      name,
      email,
      jobTitle,
      address,
    };

    console.log("ClientsData :>> ", ClientsData);
  };

  // useEffect(() => {
  //   if (isnew === true) {
  //     console.log("i am new user page");
  //   } else {
  //     console.log("i am update user page");
  //   }
  // }, []);
  return (
    <div className="Clientsform">
      <div className="innercontainer">
        <h1>{isnew ? "Create clients" : "Edit clients"}</h1>
        <form action="" onSubmit={handlesubmit}>
          <CustomeInput
            placeholder="Name"
            type="text"
            value={name}
            error={nameError}
            onChange={(e) => {
              setName(e.target.value);
            }}
            // onBlur={() => {
            //   if (name == "") {
            //     setNameError("Enter Your Name");
            //   } else {
            //     setNameError("");
            //   }
            // }}
          />
          {isnew && (
            <>
              <CustomeInput
                placeholder="Email"
                type="email"
                value={email}
                error={emailError}
                onChange={(e) => {
                  // console.log("email value", email); here we console to check the value
                  setEmail(e.target.value);
                }}
                // onBlur={() => {
                //   if (email == "") {
                //     setEmailError("Enter Your Email");
                //   } else {
                //     setEmailError("");
                //   }
                // }}
              />
            </>
          )}
          <CustomeInput
            placeholder="JobTitle"
            type="text"
            value={jobTitle}
            error={jobTitleError}
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            // onBlur={() => {
            //   if ((jobTitle = "")) {
            //     setJobTitleError("Enter Your JobTitle");
            //   } else {
            //     setJobTitleError("");
            //   }
            // }}
          />
          <CustomeInput
            placeholder="Address"
            type="text"
            value={address}
            error={addressError}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            // onBlur={() => {
            //   if (address == "") {
            //     setAddressError("Enter your address");
            //   } else {
            //     setAddressError("");
            //   }
            // }}
          />
          <button
            type="submit"
            className="buttonForm"
            style={{
              backgroundColor: error ? "tomato" : "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {isnew ? "Create" : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientsForm;
