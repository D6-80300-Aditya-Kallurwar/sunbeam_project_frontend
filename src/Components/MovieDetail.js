import React from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";

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
    <div class="container">
        <div class="row justify-content-center align-items-center" style={{height: "90vh"}}>
            <div class="col-md-6" style={rowStyle}>
            <div className="rounded m-auto" style={imageContainer}>

                <img  src="https://m.media-amazon.com/images/M/MV5BOGZmYjkxMDItNmQ3ZC00YzdlLThjMDktYWJkOGZiOWU1NmY0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg"
                 alt="" class="img-fluid"
                 style={image}
                 />
            </div>
            </div>
            <div class="col-md-6 text-center" style={rowStyle}>
               <h1 className="movieName">Demons Slayer </h1>
               <h4>Rated : <img src="https://e7.pngegg.com/pngimages/114/147/png-clipart-yellow-star-illustration-yellow-star-color-star-blue-angle.png"
                className="img-fluid" style={{width:"40px"}}></img> 8.5/10</h4>
                <h4>Duration : <>244 minutes</></h4>
                <h4>Language : <>Hindi</></h4>
                <h4>Genra : Action,Thriller</h4>
                <h4>Release Date : 2024-02-06T11:06:33.326Z</h4>

                <button className="btn text-white btn-success p-3">Book Ticket</button>

            </div>
        </div>

    </div>
    </>)
};

export default MovieDetail;
