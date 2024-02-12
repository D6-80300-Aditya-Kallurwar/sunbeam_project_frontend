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
// import SeatBooking from './Components/SeatBooking';
import MovieCrud from './Components/Admin/Admin_MovieCrud/Admin_movie_crud';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/SingleMovie" element={<MovieDetail />}></Route>
        <Route path="/Adminlogin" element={<Admin_login />}></Route>
        {/* <Route path="/Seatbooking" element={<SeatBooking />}></Route> */}
        <Route path="/Moviecrud" element={<MovieCrud />}></Route>
        {/* <Route path="/Seatbooking" element={<SeatBooking />}></Route> */}
        
        {/* <Route path="/About" element={<About />}></Route>
        <Route path="/classes" element={<Curriculum />}></Route>
        <Route path="/Curriculum" element={<Curriculum />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Career/Contact" element={<Contact />}></Route>
        <Route path="/event" element={<Events />}></Route>
        <Route path="/Singleevent/:id" element={<Singleevents />}></Route> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
