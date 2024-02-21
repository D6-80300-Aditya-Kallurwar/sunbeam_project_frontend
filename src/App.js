import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import MovieDetail from './Components/MovieDetail';
import Footer from './Components/Footer';
import Admin_login from './Components/Admin/Admin_login';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MovieCrud from './Components/Admin/Admin_MovieCrud/Admin_movie_crud';
import Admin from './Components/Admin/Admin';
import TheaterCrud  from './Components/Admin/Admin_TheaterCrud/Admin_theater_crud'
import ShowCrud from './Components/Admin/Admin_Shows_Crud/Admin_Shows_crud';
import SeatBooking from './Components/SeatBooking';
import ShowList from './Components/ShowList';
import ContactUs from './Components/ContactUs';
import UserTickets from './Components/UserTickets';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    const data = sessionStorage.getItem("userdata");
    if(data)
    {
      
    } 
 })
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/SingleMovie" element={<MovieDetail />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/AdminLogin" element={<Admin_login />}></Route>
        <Route path="/Moviecrud" element={<MovieCrud />}></Route>
        <Route path="/TheaterCrud" element={<TheaterCrud />}></Route>
        <Route path="/show-list" element={<ShowList/>}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/mytickets" element={<UserTickets />}></Route>
        <Route path="/seatbooking" element={<SeatBooking />}></Route>
        <Route path="/showscrud" element={<ShowCrud/>}></Route>
      </Routes>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
