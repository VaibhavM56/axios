//http methods
//1.get() is used to get the data from the back end  // reading data from the backend
//2.post() is used to send the data from the frontend to backend //to create the data
//3.put() is used to update the existing data //update
//4. patch() will update only the changed data // update
//5. delete() is used to delete an item // deleting

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function AddProducts() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setUser(res.data);
  };
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
        {user.map((val) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td>{val.website}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AddProducts;
