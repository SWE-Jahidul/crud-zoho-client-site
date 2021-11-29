import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowData from "../Showdata/ShowData";

const Home = () => {
  const [firstName, setfirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEamil] = useState("");

  const handelfirstname = (e) => {
    setfirstName(e.target.value);
  };

  const handellastname = (e) => {
    setLastName(e.target.value);
  };

  const handelemail = (e) => {
    setEamil(e.target.value);

  };

  const handelphone = (e) => {
    setPhone(e.target.value);
  };

  const handelcontact = (e) => {

    e.preventDefault();
    // Field Validate
    if (firstName == "" && lastName == "" && phone == "" && email == "") {
      alert("Please Enter something  ");
      return;
    }

    const data = {
      "First_Name": firstName,
      "Last_Name": lastName,
      "Mobile": phone,
      "Email": email,
    };

    axios.post(`http://localhost:5000/insert`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="App container my-5">
      {/* showing data  */}
      <h3 className="center"> User Adding </h3>
      <div className="p-5">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control my-2"
              id="exampleInputPassword1"
              placeholder="First Name "
              required
              onBlur={handelfirstname}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control my-2"
              id="exampleInputPassword1"
              placeholder="Last Name "
              required
              onBlur={handellastname}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control my-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              onBlur={handelemail}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control my-2"
              id="exampleInputPassword1"
              placeholder="Phone"
              required
              onBlur={handelphone}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handelcontact}
          >
            Add User
          </button>
        </form>
      </div>
      <ShowData/>
    </div>
  );
};

export default Home;