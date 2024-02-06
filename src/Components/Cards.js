import React from "react";
import home1 from "../img/movie.jpg";
import star from "./css/star.png"
import "./css/card.css"
/**
"movieName": "string",
"duration": 0,
"rating": 0,
"releaseDate": "2024-02-06T11:06:33.326Z",
"genre": "DRAMA",
"language": "HINDI"
*/


// Define a Card component to render individual cards
const Card = ({ title, image , duration , rating ,releasedate , genre ,lang }) => (
    <div  style={{margintop:"5%",marginBottom:"5%"}} className="col-12 col-lg-6 col-xl-4 p-2" >
        <div className="card " >
            <img src={image} className="card-img-top h-75" alt="Card" />
            <div style={{ padding:"5px",backgroundColor:"black"}}>
                <img src={star} style={{paddingLeft:"35%"}} height={"25px"}/> 
                <span className="text-white text-center" style={{paddingLeft:"10px"}}>
                    {rating}/20
                </span>
            </div>
            <div  id="crd-text" className="card-body text-dark text-center">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    </div>
);

const Cards = () => {
    // Array of card data
    const cardsData = [
        { title: "Demon Slayer", image: home1 , duration: 240 , rating:"8.9" ,releasedate:"2024-02-06T11:06:33.326Z" , genre:"DRAMA" ,lang :"HINDI"},
        { title: "Demon Slayer", image: home1 , duration: 240 , rating:"8.9" ,releasedate:"2024-02-06T11:06:33.326Z" , genre:"DRAMA" ,lang :"HINDI"},
        { title: "Demon Slayer", image: home1 , duration: 240 , rating:"8.9" ,releasedate:"2024-02-06T11:06:33.326Z" , genre:"DRAMA" ,lang :"HINDI"},
        { title: "Demon Slayer", image: home1 , duration: 240 , rating:"8.9" ,releasedate:"2024-02-06T11:06:33.326Z" , genre:"DRAMA" ,lang :"HINDI"},
        { title: "Demon Slayer", image: home1 , duration: 240 , rating:"8.9" ,releasedate:"2024-02-06T11:06:33.326Z" , genre:"DRAMA" ,lang :"HINDI"},
        { title: "Demon Slayer", image: home1 , duration: 240 , rating:"8.9" ,releasedate:"2024-02-06T11:06:33.326Z" , genre:"DRAMA" ,lang :"HINDI"},
        // Add more card data as needed
    ];

    return (
        <div className="container">
            
            <div className="row justify-content-center align-items-center">
                {/* Map over cardsData and render a Card component for each item */}
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} image={card.image} duration={card.duration} rating={card.rating} releasedate={card.releasedate.split("T")[0]} genre={card.genre} lang={card.lang}/>
                ))}
            </div>
        </div>
    );
};

    

export default Cards;
