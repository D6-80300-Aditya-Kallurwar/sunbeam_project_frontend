import React, { useEffect, useState } from "react";
import logo from "../img/SignupImage.png";
import { NavLink } from "react-router-dom";
import SeatBooking from "./SeatBooking";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserTicketsCard from "./UserTicketsCard";


const UserTickets = () => {
  const [tickets, setTickets] = useState([]);
  console.log("inside user tickets");
  useEffect(() => {
    const id=sessionStorage.getItem("userData") - 0;
    axios.get("http://127.0.0.1:8081/user/allTickets/" + id).then((result) => {
      console.log(result.data);
      setTickets(result.data);

    }).catch((error) => {
      console.log(error)
    });
  }, [])
  return (
    <>
      <div className="container">
        {tickets.map((sw) => {
          return <UserTicketsCard ticketData={sw} />
        })}


      </div>
    </>
  )
};

export default UserTickets;
