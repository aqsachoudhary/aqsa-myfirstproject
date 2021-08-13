import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomeInput from "../../components/CustomeInput";

import ClientsData from "../../helper/ClientsData";
// import CustomeInput from "../../../components/CustomeInput";
// import "../../styles/Clients.css";

const Clients = () => {
  const [clientsList, setClientsList] = useState([]);
  const [searchfield, setSearchField] = useState("");

  const history = useHistory();
  useEffect(() => {
    setClientsList(ClientsData);
  }, []);
  useEffect(() => {
    if (searchfield !== "") {
      console.log("searchfield :>> ", searchfield);
      const results = ClientsData.filter(
        (client) =>
          client.name.toLowerCase().includes(searchfield.toLowerCase()) ||
          client.address.toLowerCase().includes(searchfield.toLocaleLowerCase())
      );
      console.log("results :>> ", results);

      if (results && results.length > 0) {
        setClientsList(results);
      }
    }
  }, [searchfield, ClientsData]);

  const onDelete = (id) => {
    const filterClients = clientsList.filter((clients) => clients.id !== id);
    setClientsList(filterClients);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          padding: "10px 10px",
        }}
      >
        <h1>Clients</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <CustomeInput
            placeholder="search"
            type="text"
            value={searchfield}
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
        </div>
        <button
          style={{
            position: "absolute",
            top: "20px",
            right: "30px",
            height: "30px",
          }}
          onClick={() => {
            history.push("/clients/new");
          }}
        >
          Create Clients
        </button>
      </div>
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>jobTitle</th>
          <th>address</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        <tbody>
          {clientsList.map((clients) => (
            <tr key={clients.id}>
              <td>{clients.name}</td>
              <td>{clients.email}</td>
              <td>{clients.jobTitle}</td>
              <td>{clients.address}</td>

              <td>
                <button
                  onClick={() => {
                    onDelete(clients.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    history.push("/clients/clients-details/" + clients.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
