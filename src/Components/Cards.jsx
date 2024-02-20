import React, { useEffect, useState } from "react";
import home1 from "../img/movie.jpg";
import star from "./css/star.png"
import "./css/card.css"
import axios from "axios";
import image from "../img/movie.jpg"
/**
"movieName": "string",
"duration": 0,
"rating": 0,
"releaseDate": "2024-02-06T11:06:33.326Z",
"genre": "DRAMA",
"language": "HINDI"
*/


// Define a Card component to render individual cards


const Card = ({ movieName, duration, rating, genre, language }) => (

    <div style={{ margintop: "5%", marginBottom: "5%" }} className="col-6 col-md-4 col-lg-3 col-xl-2 p-2" >
        <div className="card p-2 " >
            <img src={image} className="card-img-top h-75" alt="Card" />
            <div className="text-center p-2" style={{ backgroundColor: "black" }}>
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
    
);


const Cards = () => {
    const [movies, setMovies] = useState([]);
    // Array of card data
        useEffect(()=>{
            axios.get("http://127.0.0.1:8081/movie/MovieList").then((result) => {
                    setMovies(result.data);
                    console.log(movies);
                });
     },[])

    return (
        <div className="p-5">
            <div className="row justify-content-center align-items-center">
                {
                    movies.map((card) => {
                    return <Card movieName={card.movieName} duration={card.duration} rating={card.rating} genre={card.genre} language={card.language} />
                })}
            </div>
        </div>
    );
};



export default Cards;
