import React from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import SeatBooking from "./SeatBooking";
import admin1 from "../img/admin_1.png"
import admin2 from "../img/admin_2.png"
import admin3 from "../img/admin_3.png"
const Admin = () => {


    return (
        <>
            <div className='container text-center my-5 py-5' style={{ color: "rgb(189, 4, 4)" }}>
                <div className="row my-5">
               

                    <NavLink to={"/"} className="col-md-3 m-auto rounded-5 shadow-lg p-2 my-3" style={{ border: "1px solid rgb(189, 4, 4)"}}>

                        <div className="card-hell ">
                            <img src={admin1} className=" img-fluid" style={{ width: "300px", height: "300px" }} alt="..." />
                            <p className="display-6">Movie Handler</p>
                        </div>
                    </NavLink>
               

                    <NavLink to={"/"} className="col-md-3 m-auto rounded-5 shadow-lg p-2 my-3" style={{ border: "1px solid rgb(189, 4, 4)"}}>

                        <div className="card-hell ">
                            <img src={admin2} className=" img-fluid" style={{ width: "300px", height: "300px" }} alt="..." />
                            <p className="display-6">User Handler</p>
                        </div>
                    </NavLink>

                    <NavLink to={"/"} className="col-md-3 m-auto rounded-5 shadow-lg p-2 my-3" style={{ border: "1px solid rgb(189, 4, 4)"}}>

                        <div className="card-hell ">
                            <img src={admin3} className=" img-fluid" style={{ width: "300px", height: "300px" }} alt="..." />
                            <p className="display-6">Theater Handler</p>
                        </div>
                    </NavLink>


                </div>
            </div>
        </>)
};

export default Admin;
