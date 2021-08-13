import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import userData from "../../helper/usersData";

const Users = () => {
  const [usersList, setUsersList] = useState([]); ///returns 2 things value and a function for set value
  const history = useHistory();
  useEffect(() => {
    setUsersList(userData);
  }, []); ///this will work as component did mount
  const onDelete = (id) => {
    const filterUser = usersList.filter((user) => user.id !== id);

    setUsersList(filterUser);
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
        <h1> Users Form</h1>
      </div>
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "30px",
          height: "30px",
        }}
        onClick={() => {
          history.push("/users/new");
        }}
      >
        Create User
      </button>
      <table style={{ backgroundColor: "white" }}>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Address</th>
          <th>PhoneNo</th>
          <th>Remove</th>

          <th>Edit</th>
        </tr>

        <tbody>
          {usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  onClick={() => {
                    onDelete(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    history.push("/users/users-details/" + user.id);
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
export default Users;
