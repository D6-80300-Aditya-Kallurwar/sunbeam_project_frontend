import React from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import SeatBooking from "./SeatBooking";

const MovieDetail = () => {
    var rowStyle ={
        color: "rgb(179, 16, 4)",
        margin : "auto"
    };
    var imageContainer={
        width:"400px",
        height:"500px",  
    };
    var image={
        borderRadius:"35px",
        boxShadow:"20px 20px 30px 20px rgba(0, 0, 0, 0.2)"
    }
   
 return (
    <>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Theater Seats</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <SeatBooking/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    <div class="container my-5 py-5 justify-content-center align-items-center">
        <div class="row ">
            <div class="col-md-6 mb-3" style={rowStyle}>
            <div className="rounded m-auto" style={imageContainer}>

                <img  src="https://m.media-amazon.com/images/M/MV5BOGZmYjkxMDItNmQ3ZC00YzdlLThjMDktYWJkOGZiOWU1NmY0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg"
                 alt="" class="img-fluid "
                 style={image}
                 />
            </div>
            </div>
            <div class="col-md-6 text-center" style={rowStyle}>
               <h1 className="movieName display-5">Demons Slayer </h1>
               <div className="lead">

               <div>Rated : <img src="https://e7.pngegg.com/pngimages/114/147/png-clipart-yellow-star-illustration-yellow-star-color-star-blue-angle.png"
                className="img-fluid" style={{width:"40px"}}></img> 8.5/10</div>
                <div>Duration : <>244 minutes</></div>
                <div>Language : <>Hindi</></div>
                <div>Genra : Action,Thriller</div>
                <div>Release Date : 2024-02-06T11:06:33.326Z</div>
               </div>

                <button className="btn text-white btn-success p-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Book Ticket</button>

            </div>
        </div>

    </div>
    </>)
};

export default MovieDetail;
