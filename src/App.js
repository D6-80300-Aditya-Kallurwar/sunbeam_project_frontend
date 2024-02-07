import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import MovieDetail from './Components/MovieDetail';

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
        {/* <Route path="/About" element={<About />}></Route>
        <Route path="/classes" element={<Curriculum />}></Route>
        <Route path="/Curriculum" element={<Curriculum />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Career/Contact" element={<Contact />}></Route>
        <Route path="/event" element={<Events />}></Route>
        <Route path="/Singleevent/:id" element={<Singleevents />}></Route> */}
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
