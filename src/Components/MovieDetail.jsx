import React, { useEffect, useState } from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import SeatBooking from "./SeatBooking";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { toast } from 'react-toastify'


const MovieDetail = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
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
  // const option ={
  //   headers : {
  //    'Authorization': `Bearer ${user.items.token}`
  //  }
  // }

  // console.log(user.items);
  
  // Array of card data
  let location = useLocation();
  console.log(location.state.id.id);
  const id=location.state.id.id;
  useEffect(() => {
    // console.log(user.items.token);
    // axios.get("http://127.0.0.1:8081/user/email",option).then((result) => {
    //   console.log(result);
    //   sessionStorage.setItem("userData",result.data);
    //   }).catch((error) => {
    //     toast.error(error);
    //   });
    axios.get("http://127.0.0.1:8081/movie/" + location.state.id.id).then((result) => {
      console.log(result.data);
      setMovie(result.data);
      axios.get("http://127.0.0.1:8081/movie/images/" + location.state.id.id).then((result) => {
      
        setImage(result.data);

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

            <NavLink className="btn text-white btn-success p-3 " to={"/show-list"} state={{ id: {id} }}>Book Ticket</NavLink>

          </div>
        </div>

      </div>
    </>
  )
};

export default MovieDetail;
