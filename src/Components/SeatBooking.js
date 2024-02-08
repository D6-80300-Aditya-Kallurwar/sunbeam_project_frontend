import React from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";


const Seat = ({ color }) => (
    <div>
        <i className="fas fa-chair text-secondary p-2"></i>
    </div>

);

const SeatBooking = () => {

    return (
        // <>
        //     <div className="container text-center w-100 w-md-50 my-4">
        //         SCREEN
        //         <div className="screen d-flex flex-wrap justify-content-center " style={{ borderTop: "4px solid skyblue" }}>
        //             {/* {seatsData.map((seat, index) => (
        //         ))} */}

        //         <span className="w-100 mt-5"> Classic seats</span> 
        //         {[...Array(100)].map((elementInArray, index)=>(
        //             <div key={index}>
        //                 <Seat />
        //             </div>
        //             ))
        //         }
        //         <hr/>
        //         <span className="w-100"> Premium seats</span>
        //         {[...Array(100)].map((elementInArray, index)=>(
        //             <div key={index}>
        //                 <Seat/>
        //             </div>
        //             ))

        //         }
        //         </div>
        //     <button className="btn btn-success">Book Ticket</button>
        //     </div>
        // </>
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-sm-12 offset-md-3 col-md-6">
                <div> SCREEN</div>
                    <div className="screen d-flex flex-wrap justify-content-center " style={{ borderTop: "4px solid skyblue" }}>
                        {/* {seatsData.map((seat, index) => (
                ))} */}

                        <span className="w-100 mt-5"> Classic seats</span>
                        {[...Array(100)].map((elementInArray, index) => (
                            <div key={index}>
                                <Seat />
                            </div>
                        ))
                        }
                        <hr />
                        <span className="w-100"> Premium seats</span>
                        {[...Array(100)].map((elementInArray, index) => (
                            <div key={index}>
                                <Seat />
                            </div>
                        ))

                        }
                    </div>
                    <button className="btn btn-success">Book Ticket</button>
                </div>

            </div>
        </div>
    )
};

export default SeatBooking;
