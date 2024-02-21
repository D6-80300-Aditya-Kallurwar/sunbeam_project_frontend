import React, { useEffect, useState } from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import SeatBooking from "./SeatBooking";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { toast } from 'react-toastify'
import ShowListCard from "./ShowListCard";


const ShowList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  var rowStyle = {
    color: "rgb(179, 16, 4)",
    margin: "auto"
  };
 
  const [movie, setMovie] = useState({});
  const [image, setImage] = useState("");
  const [shows,setShows] = useState([]);
  
  // console.log(user.items);
  
  // Array of card data
  let location = useLocation();
  console.log(location.state.id.id);
  const id=location.state.id.id;
  useEffect(() => {
    console.log(user.items.token);

    axios.get("http://127.0.0.1:8081/show/movie-shows/" + location.state.id.id).then((result) => {
      console.log(result.data);
      setShows(result.data);
      
    }).catch((error) => {
      console.log(error)
    });
  }, [])
  return (
    <>
        <div className="container">
            {shows.map((sw)=>{
                return <ShowListCard showDate={sw.showDate} showId={sw.showId} showStartTime={sw.showStartTime} theaterId={sw.theaterId}/>
            })}

          
      </div>
    </>
  )
};

export default ShowList;
