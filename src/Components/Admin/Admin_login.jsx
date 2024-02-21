import React, { useState } from "react";
import logo from "./../../img/adminlogin.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

const Admin_login = () => {
  const navigate = useNavigate();
  const [email, setEmail] =useState ('');
  const [password, setPassword] = useState ('');


  var rowStyle = {
    color: "#a30617",
    margin: "auto"
  };
  function toastlogin() {
    if (email == "Admin@gmail.com" && password == "12345") {
      toast.success("Logged in succesfully");
      navigate("/Admin");
    }
    else {
      toast.error("Invalid Credentials");
    }
  }
  return (
    <>
      <div class="container">
        <div class="row" style={{ height: "90vh" }}>
          <div class="col-md-6" style={rowStyle}>
            <img src={logo} alt="" class="img-fluid" />
          </div>
          <div class="col-md-6" style={rowStyle}>
            <form  >
              <h1 className=" text-center display-3" style={{ color: "#831422" }}>Welcome Admin</h1>
              <br></br>
              <br></br>
              <h3 style={{ color: "#831422" }} className="display-6">LOGIN HERE</h3>
              <div class="form-group my-3">
                <label for="exampleInputEmail1" class="lead text-danger">Email address</label>
                <input type="email" class="form-control text-danger" id="exampleInputEmail1" onChange={e => setEmail(e.target.value)} placeholder="Enter Email" style={{ background: "none;" }} />
              </div>
              <div class="form-group my-3">
                <label for="exampleInputPassword1" class="lead text-danger">Password</label>
                <input type="password" class="form-control text-danger" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} placeholder="Enter Password" style={{ background: "none;" }} />
              </div>
              <button type="button" style={{ backgroundColor: "#a30617" }} onClick={toastlogin} class="btn btn-dark">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </>)
};

export default Admin_login;
