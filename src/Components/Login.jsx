import React from "react";
import logo from "../img/LoginImage.png";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addItem, addUser } from "../features/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      console.log(Email)
      loginInfo={emailId:Email,password:Password};
      if(loginInfo.emailId.length==0){
        toast.warn('enter email please');
      }else if (loginInfo.password.length==0){
        toast.warn('enter password please');
      }else{
        console.log(loginInfo);
          axios.post("http://127.0.0.1:8081/user/signin",loginInfo).then((result)=>{
          console.log(result);
          if (result['status'] ==200) {
              toast.success('logged in succesfully');
              const token = {token:result['data']['jwt']};
              dispatch(addUser(token));
              navigate("/");
            }else{
              toast.error('Mismatch error occured');
              reset();
            }
          }).catch((e)=>{
            console.log(e)
            toast.error('Mismatch error occured');
  
          })
        
      }
    }
  return (
    <>
    <div class="container">
        
        <div class="row">
            <div class="col-md-6" style={rowStyle}>
                <img src={logo} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6 lead" style={rowStyle}>
                <div  >
                    <h1 style={{color: "rgb(189, 4, 4)"}} className="display-5">LOGIN HERE</h1>
                    <div class="form-group my-3">
                      <label for="exampleInputEmail1" >Email address</label>

                      <input type="email" class="form-control border-none " id="exampleInputEmail1" value={Email} onChange={e=>setEmail(e.target.value)}  placeholder="Enter Email" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" >Password</label>
                      <input type="password" class="form-control border-none " id="exampleInputPassword1" value={Password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" style={{background: "none;"}}/>

                    </div>
                    <button  class="my-4 btn btn-danger rounded-3 " onClick={handleSubmit}>Submit</button>
                  </div>
            </div>
        </div>

    </div>
    </>)
};

export default Login ;
