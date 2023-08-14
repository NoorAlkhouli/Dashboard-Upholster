import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "./components/card";
import Card3 from "./components/card3";
import Nav from "./components/nav";
import Footer from "./components/footer/footer";
import Swiper from "./components/swiper/swiper";
import axios from "axios";
import "./App.css";
import Home from "./components/home";
import Details from "./components/details/details";
import Home2 from "./components/home2";
import Home3 from "./components/home3";
import Home4 from "./components/home4";
import Home5 from "./components/home5";
import Home6 from "./components/home6";
import Home7 from "./components/home7";
import Search from "./components/search/search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home2" element={<Home2 />}></Route>
        <Route path="/home3" element={<Home3 />}></Route>
        <Route path="/home4" element={<Home4 />}></Route>
        <Route path="/home5" element={<Home5 />}></Route>
        <Route path="/home6" element={<Home6 />}></Route>
        <Route path="/home7" element={<Home7 />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/swiper" element={<Swiper />}></Route>
        <Route path="product/:productId" element={<Swiper />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
