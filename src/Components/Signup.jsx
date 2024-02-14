import React from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
const Signup = () => {
    var rowStyle ={
        color: "#a30617",
        margin : "auto"
    };
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Age,setAge]=useState("");
    const [Address,setAddress]=useState("");
    const [MobileNo,setMobileNo]=useState("");
    const [Password,setPassword]=useState("");
    const [Gender,setGender]=useState("");
    const [message, setMessage] = useState("");
    const [isDisabled, setisDisabled] = useState('disabled');
    const [searchText, setSearchText] = useState('');

    var user={name:"",age:"",address:"",mobileNo:"",emailId:"",password:"",gender:""};
    const reset=()=>{
      user={name:"",age:"",address:"",mobileNo:"",emailId:"",password:"",gender:""};
    }

    const ShowMessage=(msg)=>{
      setMessage(msg);
      setTimeout(() => {
              setMessage("");
      }, 2000);
 }

    const handleSubmit=()=>{
          user={name:Name,age:Age,address:Address,mobileNo:MobileNo,emailId:Email,password:Password,gender:Gender};
          console.log(user);
          axios.post("http://127.0.0.1:8081/user/addNew",user).then((result)=>{
              console.log(result);
              reset();
          })
    }
  return (
    <>
    <div className="container">
        

        <div class="row" style={{height: "108vh"}}>
            <div class="col-md-6" style={rowStyle}>
                <img src={logo} alt="" class="img-fluid"/>

            </div>
            <div className="col-md-6 lead" style={rowStyle}>
                <form  >
                    <h1 style={{color: "rgb(189, 4, 4)"}} className="display-5">SIGNUP HERE</h1>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputEmail1" >Name</label>


                      <input type="text" className="form-control border-none" id="exampleInputEmail1" value={Name} onChange={e=>setName(e.target.value)} placeholder="Enter Name" style={{background: "none;"}}/>

                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Age</label>
                      <input type="number" className="form-control border-none" id="exampleInputAge1" value={Age} onChange={e=>setAge(e.target.value)} placeholder="Enter Age" style={{background: "none;"}}/>

                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Address</label>
                      <input type="text" className="form-control border-none" id="exampleInputAddress1" value={Address} onChange={e=>setAddress(e.target.value)} placeholder="Enter Address" style={{background: "none;"}}/>
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Email</label>
                      <input type="email" className="form-control border-none" id="exampleInputEmail1" value={Email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" style={{background: "none;"}}/>
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Phone Number</label>


                      <input type="text" className="form-control border-none" id="exampleInputMobile1" value={MobileNo} onChange={e=>setMobileNo(e.target.value)} placeholder="Enter Phone Number" style={{background: "none;"}}/>
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Password</label>
                      <input type="password" className="form-control border-none" id="exampleInputPassword1" value={Password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" style={{background: "none;"}}/>
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Conform Password</label>
                      <input type="password" className="form-control border-none" id="exampleInputPassword1" placeholder="Conform Password" style={{background: "none;"}}/>
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="exampleInputPassword1" >Gender</label>
                      <select className="form-control border-none" onClick={e=>setGender(e.target.value)}>
                         <option value="select">Select Gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="OTHER">Other</option>
                      </select>

                    </div>
                    <button type="submit" className="btn rounded-3 text-white" style={{backgroundColor:"#a30617"}} onClick={handleSubmit}>Sign up</button>
                  </form>
            </div>
        </div>

    </div>
    </>)
};

export default Signup;
