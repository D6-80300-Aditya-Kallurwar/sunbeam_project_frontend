import React from "react";
import home1 from "../img/movie.jpg";
import homeBack from "../img/background.png";
import Carousel from "./Carousel";
import Cards from "./Cards";
import "./css/card.css"

const Home = () => {
    var rowStyle = {
        height: '100%!important',
        margin: "auto"
    };
    return (
        <>
            <div className="container mt-3" >
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
                <div className="row">
                    <div className="col-md-3 bg-danger">
                        <ul className="list-group p-3">
                            <li className="list-group-item list-group-item-danger p-4">A simple primary list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple secondary list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple success list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple danger list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple warning list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple info list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple light list group item</li>
                            <li className="list-group-item list-group-item-danger p-4">A simple dark list group item</li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                    <Cards/>
                    </div>
                </div>
            </div>
        </>)
};


export default Home;
