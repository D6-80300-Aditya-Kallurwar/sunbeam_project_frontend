import React, { useEffect, useState } from "react";
import home1 from "../img/movie.jpg";
import star from "./css/star.png"
import "./css/card.css"
import axios from "axios";
import image from "../img/movie.jpg"
import { NavLink } from "react-router-dom";
/**
"movieName": "string",
"duration": 0,
"rating": 0,
"releaseDate": "2024-02-06T11:06:33.326Z",
"genre": "DRAMA",
"language": "HINDI"
*/
// Define a Card component to render individual cards

const Card = ({ movieName, duration, rating, genre, language,id }) => {
    const [image, setImage] = useState("");
    // console.log(id);
    axios.get("http://127.0.0.1:8081/movie/images/" +id).then((result) => {
        setImage(result.data);
      }).catch((error) => {
        console.log(error)
      });
    
    return (

        <NavLink to={"/SingleMovie"}  state={{ id: {id} }} className="col-6 col-md-4 col-lg-3 col-xl-2 p-2">
    <div style={{ margintop: "5%", marginBottom: "5%" }}  >
        <div className="card p-2 text-center align-items-center" >
            <img className="card-img-top h-75"
            src={`data:image/jpeg;base64,${image}`}
                alt="https://www.shutterstock.com/shutterstock/photos/1811092264/display_1500/stock-vector-no-image-available-like-missing-picture-linear-flat-simple-style-modern-logotype-graphic-art-1811092264.jpg" class="img-fluid "
                style={{width:"150px",height:"200px"}}
              />
            <div className="text-center p-2" style={{ backgroundColor: "black" ,width:"100%"}}>
                <img src={star} height={"25px"} />
                <span className="text-white text-center ps-2" >
                    {rating}/10
                </span>
            </div>
            <div id="crd-text" className="card-body text-white text-center">
                <h5 className="card-title">{movieName}</h5>
            </div>
        </div>
    </div>
    </NavLink>
    
    );
    };


const Cards = () => {
    const [movies, setMovies] = useState([]);
    // Array of card data
        useEffect(()=>{
            axios.get("http://127.0.0.1:8081/movie/MovieList").then((result) => {
                    setMovies(result.data);
                });
                console.log(movies);
            },[])
            
            return (
                <div className="p-5">
            <div className="row justify-content-center align-items-center">
                {
                    movies.map((card) => {
                    return <Card movieName={card.movieName} duration={card.duration} rating={card.rating} genre={card.genre} language={card.language} id={card.id}/>
                })}
            </div>
        </div>
    );
};

export default Cards;
