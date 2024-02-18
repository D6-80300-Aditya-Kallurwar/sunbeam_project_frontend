
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SeatBooking from './SeatBooking';


const ShowListCard = (prop) => {
  const [theater,setTheater] =useState({});
    useEffect(()=>{
      // console.log(prop);
        axios.get("http://127.0.0.1:8081/theater/getTheater/"+prop.theaterId).then((result) => {
          setTheater(result.data);
          // console.log(result.data);
          
        }).catch((error) => {
          console.log(error)
        });
      },[])
      const handleAccept=()=>{
        toast.success("Tickit booked succesfully ");
      }
      
      return (
        <>
     {/* model start */}
      
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Theater Seats</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <SeatBooking theater={JSON.stringify(theater)}/> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* model end  */}
   
        <div className='row rounded-5 my-5 py-5' style={{border:"1px solid green"}}>
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
               <button className='btn btn-success' onClick={handleAccept} data-bs-toggle="modal" data-bs-target="#exampleModal">Book Tickit</button>
            </div>

        </div>
    </>
  );
};

export default ShowListCard;