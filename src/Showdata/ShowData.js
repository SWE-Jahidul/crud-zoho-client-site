import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ShowData = () => {


  const [user, setuser] = useState([]);
  const [deleteuser, setDeleteUser] = useState([]);

  const getUser = () => {
    axios.get(`http://localhost:5000/getdata`)
      .then(function (response) {
        console.log("Get data");
        console.log(response);
        setuser(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getUser()
  }, [])

  const handelDeleteUser = (id) => {
    console.log("id is ", id);
    const proceed = window.confirm("are you sure , you wanr to delete data !!")
    if (proceed) {
      // const url = `http://localhost:5000/delete/${id}`;
      // console.log("clik");
      // fetch(url, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res.deletedCount) {
      //       alert("delete");
      //       const remaininguser = user.filter((user) => user.id !== id);
      //       setuser(remaininguser);
      //     }
      //   });

      axios.post(`http://localhost:5000/delete/${id}`)
        .then(function (response) {
          console.log("Get data");
          console.log(response);
          const remaininguser = user.filter((user) => user.id !== id);
          setuser(remaininguser);
        })
        .catch(function (error) {
          console.log(error);
        });


    };
  }

  return (
    <div>
    
      <h3> Show data </h3>
         <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={1000} 
            />
      <table className="table table-bordered my-5">
     
        <thead>
          <tr>
            <th scope="col">Fist Name </th>
            <th scope="col">Last Name </th>
            <th scope="col">Email </th>
            <th scope="col">Phone </th>
            <th scope="col">Action  </th>

          </tr>
        </thead>

        {user?.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td> {item.First_Name}</td>

              <td>{item.Last_Name}</td>
              <td>{item.Email}</td>
              <td>{item.Mobile}</td>
              <button onClick={() => handelDeleteUser(item.id)}><i class="fas fa-trash-alt"></i></button>

              <Link to={`/update/${item.id} `}> <button className="btn btn-sm btn-primary"> <i className="fas fa-pen"></i> Update </button>  </Link>

            </tr>
          </tbody>
        ))}
      </table>




    </div>
  );
};

export default ShowData;
