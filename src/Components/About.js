import React from "react";
import logo from "../img/AboutPage.png";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
    <div class="container">
        
    <div class="row" style={{height: "90vh"}}>
            <div class="col-md-6">
                <img src={logo} alt="" class="img-fluid"/>
            </div>
            <div class="col-md-6 mt-5" style={{color: "rgb(255, 0, 0)"}}>
                <h1 style={{color: "rgb(189, 4, 4)"}} class="mt-5"> // We Are Developers //  </h1>
                            <p class="mt-5">
                                The project objective is to book cinema tickets in online. The Ticket Reservation
                                Systemis an Internet based application that can be accessed throughout the Net and can
                                be accessed by anyone who has a net connection. This applicationwill reserve the
                                tickets. This online ticket reservation system provides a website for a cinema hall
                                where any user of internet can access it. User is required to login to the system and
                                needs a credit card for booking the tickets. Tickets can be collected at the counter and
                                Watching movies with family and friendsin theatresis one ofthe best medium of
                                entertainment after having a hectic schedule. But all this excitement vanishes after
                                standing in hours in long queues to get tickets booked. The website provides complete
                                information regarding currently running movies on allthe screens with details
                                ofshowtimings, available seats. Ticket reservations are done using credit card and can
                                be cancelled if needed.
                            </p>
            </div>
        </div>

    </div>
    </>)
};

export default About;
