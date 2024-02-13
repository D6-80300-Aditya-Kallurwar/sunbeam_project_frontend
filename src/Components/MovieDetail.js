import React, { useEffect, useState } from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import SeatBooking from "./SeatBooking";
import axios from "axios";
import { useLocation } from 'react-router-dom'


const MovieDetail = () => {
  var rowStyle = {
    color: "rgb(179, 16, 4)",
    margin: "auto"
  };
  var imageContainer = {
    width: "400px",
    height: "500px",
  };
  var imagee = {
    borderRadius: "35px",
    boxShadow: "20px 20px 30px 20px rgba(0, 0, 0, 0.2)"
  }
  const [movie, setMovie] = useState({});
  const [image, setImage] = useState("");
  // Array of card data
  let location = useLocation();
  console.log(location.state.id.id);
  useEffect(() => {
    axios.get("http://127.0.0.1:8081/movie/" + location.state.id.id).then((result) => {
      console.log(result.data);
      setMovie(result.data);
      axios.get("http://127.0.0.1:8081/movie/images/" + location.state.id.id).then((result) => {
        console.log(result.data);
        setImage(result.data);
        // const imagebytes =  result.arraybuffer();

      }).catch((error) => {
        console.log(error)
      });
    }).catch((error) => {
      console.log(error)
    });
  }, [])
  return (
    // <div></div>
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
              <SeatBooking />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* model end  */}
      <div class="container my-5 py-5 justify-content-center align-items-center">
        <div class="row ">
          <div class="col-md-6 mb-3" style={rowStyle}>
            <div className="rounded m-auto" style={imageContainer}>

              <img src={`data:image/jpeg;base64,${image}`}
                alt="https://www.shutterstock.com/shutterstock/photos/1811092264/display_1500/stock-vector-no-image-available-like-missing-picture-linear-flat-simple-style-modern-logotype-graphic-art-1811092264.jpg" class="img-fluid "
                style={imagee}
              />
            </div>
          </div>
          <div class="col-md-6 text-center" style={rowStyle}>
            <h1 className="movieName display-5">{movie.movieName}</h1>
            <div className="lead">

              <div>Rated : <img src="https://e7.pngegg.com/pngimages/114/147/png-clipart-yellow-star-illustration-yellow-star-color-star-blue-angle.png"
                className="img-fluid" style={{ width: "40px" }}></img> {movie.rating}/10</div>
              <div>Duration : <>{movie.duration} minutes</></div>
              <div>Language : <>{movie.language}</></div>
              <div>Genra : {movie.genre}</div>
              <div>Release Date : {movie.releaseDate}</div>
            </div>

            <button className="btn text-white btn-success p-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">Book Ticket</button>

          </div>
        </div>

      </div>
    </>
  )
};

export default MovieDetail;
