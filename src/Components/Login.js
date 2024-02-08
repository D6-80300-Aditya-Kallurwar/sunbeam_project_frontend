import React from "react";
import logo from "../img/LoginImage.png";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


const Login = () => {
    var rowStyle ={
        color: "rgb(255, 0, 0)",
        margin : "auto"
    };
    var loginInfo={emailId:"",password:""};
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [message, setMessage] = useState("");
    const reset=()=>{
      loginInfo={emailId:"",password:""};
    }

    const ShowMessage=(msg)=>{
      setMessage(msg);
      setTimeout(() => {
              setMessage("");
      }, 2000);
 }
 
    const handleSubmit=()=>{
      loginInfo={emailId:Email,password:Password};
      console.log(loginInfo);
      axios.post("http://127.0.0.1:8080/user/addNew",loginInfo).then((result)=>{
        if(result.data.affectedRows!==undefined&&result.data.affectedRows>0){
          ShowMessage("Login successfully!!!");
          reset();
        }else{
          ShowMessage("Something went wrong!!!");
        }
      })
    }
  return (
    <>
    <div class="container">
        
        <div class="row" style={{height: "90vh"}}>
            <div class="col-md-6" style={rowStyle}>
                <img src={logo} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6" style={rowStyle}>
                <form  >
                    <h1 style={{color: "rgb(189, 4, 4)"}}>LOGIN HERE</h1>
                    <div class="form-group my-3">
                      <label for="exampleInputEmail1" class="fw-bold">Email address</label>

                      <input type="email" class="form-control border-danger text-danger" id="exampleInputEmail1" value={Email} onChange={e=>setEmail(e.target.value)}  placeholder="Enter Email" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="fw-bold">Password</label>
                      <input type="password" class="form-control border-danger text-danger" id="exampleInputPassword1" value={Password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" style={{background: "none;"}}/>

                    </div>
                    <button type="submit" class="btn btn-danger rounded-3 " onClick={handleSubmit}>Submit</button>
                  </form>
            </div>
        </div>

    </div>
    </>)
};

export default Login;
