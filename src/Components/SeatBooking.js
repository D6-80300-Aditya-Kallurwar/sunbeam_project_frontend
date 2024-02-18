import React, { useEffect, useState } from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";


const Seat = (prop) => {
    const [color,setcolor] = useState("secondary");
    useEffect(()=>{
        if(prop.isAvailable)
        setcolor("text-danger");
        else
        setcolor("text-success");
    },[prop]);
    const addToArray=()=>{

    }
    return (
    <div onClick={addToArray} className={color}>
        <i className='fas fa-chair text-secondary p-2 coloring'></i>
    </div>
    );
 };

const SeatBooking = (prop) => {

    const [seatsData,setSeatsData]=useState([{id:0,seatNo:"",seatType:"",price:0,isAvailable:true,isFoodContains:false}]);
    console.log(prop);
    useEffect(()=>{
    const data=JSON.parse(prop.theater);
    console.log(data);
    if(data.theaterseatlist !== undefined)
    setSeatsData(data.theaterseatlist);
    },[prop])
    console.log(seatsData);
    return (

        <div className="container ">
            <div className="row text-center">
                <div className="col-12">
                <div> SCREEN</div>
                    <div className="screen d-flex flex-wrap justify-content-center " style={{ borderTop: "4px solid skyblue" }}>
                       

                        <span className="w-100 mt-5"> Classic seats</span>
                        {seatsData.map((seat, index) => {
                           if(seat.seatType==="CLASSIC") return <Seat seat={seat}/>
                          
                        })}
                        <hr />
                        <span className="w-100"> Premium seats</span>
                        {seatsData.map((seat, index) => {
                           if(seat.seatType==="PREMIUM") return <Seat />
                          
                        })}
                    </div>
                    <button className="btn btn-success">Book Ticket</button>
                </div>

            </div>
        </div>
    )
};

export default SeatBooking;
