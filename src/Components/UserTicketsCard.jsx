
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SeatBooking from './SeatBooking';


const UserTicketsCard = (prop) => {
    console.log(prop);
    //   const [theater,setTheater] =useState({});
    // "time": "12:26:00",
    // "date": "2024-02-17",
    // "movieName": "swordsman village",
    // "theaterName": "INOX",
    // "address": "Hinjewadi",
    // "bookedSeats": "1A,1B,1C,1D,2J,3A,",
    // "totalPrice": 600

    return (
        <>
            <div className='row rounded-5 my-5 py-3 text-center' style={{ border: "2px dashed green" }}>
                <div className='col-md-4 col-12'>
                    <div className='m-1'>

                        <h1 className='display-6'> Movie Name : {prop.ticketData.movieName} </h1>
                    </div>
                    <div className='m-1'>
                        <h1 className='lead'> Theater Name :  {prop.ticketData.theaterName} </h1>
                    </div>
                    <div className='m-1'>
                        <h1 className='lead'> Address :  {prop.ticketData.address} </h1>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className='m-1'>
                        <h1 className='lead'> Start Time : {prop.ticketData.time}</h1>
                    </div>
                    <div className='m-1'>
                        <h1 className='lead'> Movie Date : {prop.ticketData.date}</h1>
                    </div>
                    <div className='m-1'>
                        <h1 className='lead'> Booked Seats : {prop.ticketData.bookedSeats}</h1>
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <div className='m-1'>
                        <h3 className=' text-danger'> Total Price : ₹{prop.ticketData.totalPrice}</h3>
                       
                        </div>
                </div>

            </div>
        </>
    );
};

export default UserTicketsCard;