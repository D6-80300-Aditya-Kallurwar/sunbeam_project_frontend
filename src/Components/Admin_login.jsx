import React from "react";
import logo from "../img/adminlogin.png";

const Admin_login = () => {
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
                    <h1 className=" text-center display-3" style={{color: "#831422"}}>Welcome Admin</h1>
                    <br></br>
                    <br></br>
                    <h3 style={{color: "#831422"}} className="display-6">LOGIN HERE</h3>
                    <div class="form-group my-3">
                      <label for="exampleInputEmail1" class="lead text-danger">Email address</label>
                      <input type="email" class="form-control text-danger" id="exampleInputEmail1"  placeholder="Enter Email" style={{background: "none;"}}/>
                    </div>
                    <div class="form-group my-3">
                      <label for="exampleInputPassword1" class="lead text-danger">Password</label>
                      <input type="password" class="form-control text-danger" id="exampleInputPassword1" placeholder="Enter Password" style={{background: "none;"}}/>
                    </div>
                    <button type="submit" class="btn rounded-3 text-white" style={{backgroundColor:"#a30617"}}>Submit</button>
                  </form>
            </div>
        </div>

    </div>
    </>)
};

export default Admin_login;
