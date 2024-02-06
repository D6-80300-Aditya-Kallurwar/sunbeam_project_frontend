import React from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const Signup = () => {
    var rowStyle ={
        color: "rgb(255, 0, 0)",
        margin : "auto"
    };
    const [user, setUser] = useState({Name: "", Age: "" , Address:"",mobileNo:"",emailid:""});
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');
  return (
    <>
    <div class="container">
        
        <div class="row" style={{height: "90vh"}}>
            <div class="col-md-6" style={rowStyle}>
                <img src={logo} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6" style={rowStyle}>
                <form  >
                    <h1 style={{color: "rgb(189, 4, 4)"}}>SIGNUP HERE</h1>
                    <div class="form-group my-3">
                      <label for="exampleInputEmail1" class="fw-bold">Name</label>
                      <input type="text" class="form-control border-danger text-danger" name="name" value={user.Name}  placeholder="Enter Name" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="fw-bold">Email</label>
                      <input type="email" class="form-control border-danger text-danger" id="exampleInputPassword1" placeholder="Enter Email" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="fw-bold">Phone Number</label>
                      <input type="text" class="form-control border-danger text-danger" id="exampleInputPassword1" placeholder="Enter Phone Number" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="fw-bold">Password</label>
                      <input type="password" class="form-control border-danger text-danger" id="exampleInputPassword1" placeholder="Enter Password" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="fw-bold">Conform Password</label>
                      <input type="password" class="form-control border-danger text-danger" id="exampleInputPassword1" placeholder="Conform Password" style={{background: "none;"}}/>
                    </div>
                    <button type="submit" class="btn btn-danger rounded-3 ">Sign up</button>
                  </form>
            </div>
        </div>

    </div>
    </>)
};

export default Signup;
