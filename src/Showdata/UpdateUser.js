import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/getdata`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handelFirstNameChange = (e) => {
    const updtaeFirstName = e.target.value;
    const updateduser = { firstName: updtaeFirstName };
    setUser(updateduser);
  };

  const handelUpdateUser = e => {
      console.log("Clicked");
    const url = `http://localhost:5000/update/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
          if(data.modifiedCount > 0) {
              alert("updated sucessfully");
              setUser({});
          }
      });

    e.preventDefault();
  };
  return (
    <div className="container">
   
      <form onSubmit={handelUpdateUser}>
        <input
          type="text"
          onChange={handelFirstNameChange}
          value={user.firstName || ""}
        ></input>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
