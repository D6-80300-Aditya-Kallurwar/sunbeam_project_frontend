import React from "react";
import logo from "../img/LoginImage.png";
import { NavLink } from "react-router-dom";

const Login = () => {
    var rowStyle ={
        color: "#a30617",
        margin : "auto"
    };
  return (
    <>
    <div class="container">
        
        <div class="row" style={{height: "90vh"}}>
            <div class="col-md-6" style={rowStyle}>
                <img src={logo} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6" style={rowStyle}>
                <form  >
                    <h1 style={{color: "#831422"}}>LOGIN HERE</h1>
                    <div class="form-group my-3">
                      <label for="exampleInputEmail1" class="fw-bold">Email address</label>
                      <input type="email" class="form-control border-danger text-danger" id="exampleInputEmail1"  placeholder="Enter Email" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="fw-bold">Password</label>
                      <input type="password" class="form-control border-danger text-danger" id="exampleInputPassword1" placeholder="Enter Password" style={{background: "none;"}}/>
                    </div>
                    <button type="submit" class="btn rounded-3 text-white" style={{backgroundColor:"#a30617"}}>Submit</button>
                  </form>
            </div>
        </div>

    </div>
    </>)
};

export default Login;
