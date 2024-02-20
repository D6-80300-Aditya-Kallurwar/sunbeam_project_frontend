import React, { useEffect } from "react";
import home1 from "../img/movie.jpg";
import homeBack from "../img/background.png";
import Carousel from "./Carousel";
import Cards from "./Cards";
import "./css/card.css"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { removeItem } from "../features/seatSlice";

const Home = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const option ={
        headers : {
         'Authorization': `Bearer ${user.items.token}`
       }
      }
      useEffect(() => {
        dispatch(()=>removeItem());
        console.log(user.items.token);
        axios.get("http://127.0.0.1:8081/user/email",option).then((result) => {
          console.log(result.data.id);
          sessionStorage.setItem("userData",result.data.id);
          console.log(window.sessionStorage.getItem("userData"));
          }).catch((error) => {
            toast.error(error);
          });
      }, []);


    var rowStyle = {
        height: '100%!important',
        margin: "auto"
    };
    return (
        <>
            <div className="container mt-3"  >
                <Carousel />
                <hr />
                <div className="row allign-item-center justify-content-center" style={{ height: '65vh', backgroundImage: `url(${homeBack})` }}>
                    <div className="col-md-5 col-12" style={rowStyle}>

                        <img src={home1} alt="not found" className="img-fluid rounded-circle" />

                    </div>
                    <div className="col-md-7 col-12 justify-content-center align-items-center" style={rowStyle}>
                        <form className="d-flex mt-5" style={{ marginTop: `250px` }}>
                            <input className="form-control me-2 p-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">SEARCH</button>
                        </form>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container-fluid p-0 ">
                    

                <div  style={{ paddingTop:"3%", backgroundColor: "#6c131c" }}>
                    <Cards />   
                </div>
            </div>
            
        </>)
};


export default Home;
