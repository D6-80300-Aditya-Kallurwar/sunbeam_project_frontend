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
import Admin_login from './Components/Admin_login';
import SeatBooking from './Components/SeatBooking';
import Admin from './Components/Admin';

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
<<<<<<< HEAD
        <Route path="/Admin" element={<Admin />}></Route>
=======
>>>>>>> edb1e6e7d5a34b8c68ff09af27b5df0234bb5aa2
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
