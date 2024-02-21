
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SeatBooking from './SeatBooking';
import { NavLink } from 'react-router-dom';


const ShowListCard = (prop) => {
  const [theater, setTheater] = useState({});
  useEffect(() => {
    console.log(prop.showId);
    axios.get("http://127.0.0.1:8081/show/getShowSeatList/" + prop.showId).then((result) => {
      setTheater(result.data);
    }).catch((error) => {
      console.log(error)
    });
  }, [prop])

  return (
    <>
      <div className='row rounded-5 my-5 py-5' style={{ border: "1px solid green" }}>
        <div className='col-md-4 col-12'>
          <div className='m-3'>

            <h1 className='lead'> Show Date : {prop.showDate} </h1>
          </div>
          <div className='m-3'>
            <h1 className='lead'> Id : ₹ {prop.showId} </h1>
          </div>
        </div>
        <div className='col-md-4 col-12'>
          <div className='m-3'>
            <h1 className='lead'> Start Time : {prop.showStartTime}</h1>
          </div>
          <div className='m-3'>
            <h1 className='lead'> Theater Id : {prop.theaterId}</h1>
          </div>
        </div>
        <div className='col-md-4 col-12'>
          <NavLink state={{ theater: theater, showId: prop.showId }} to={"/seatbooking"} className='btn btn-success'>Book Ticket</NavLink>
        </div>

      </div>
    </>
  );
};

export default ShowListCard;