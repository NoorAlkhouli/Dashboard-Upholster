import {React, useState , useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './card2.css'
import Search from './search/search'
import {FaSearch} from 'react-icons/fa'
import hrr from '../photos/hrr.jpg';
import '../components/search/search.css'

   

function nac() {

  return (
    
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <nav class="container">
  <div class="logo">
    <img src={hrr}></img>
  </div>

  <a class="navbar-brand" href="#">ALHARIRI & DOM MOBEL</a>
 

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>

  </button>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
  <div className='search-box '>
    <form>
<Search/>
    </form>
    </div>
    <ul class="navbar-nav ms-auto">
   
      <li class="nav-item active">
       <Link to="/home">
        <button class="mbc" >الصفحة الرئيسية </button>
     </Link>
      </li>
      <li class="nav-item">
        <button class="mbc" >خدمة توصيل<span class="sr-only">(current)</span></button>
      </li>
      <Link to='/home3'>
     
      </Link>
      <li class="dropdown">
        <button class=" dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       الاصناف
        </button>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to='/home' class="dropdown-item" >جميع الاصناف</Link>
        <Link to='/home2' class="dropdown-item" >غرف النوم</Link>
        <Link to='/home3' class="dropdown-item" >غرف الصالون</Link>
        <Link to='/home4' class="dropdown-item" >الاراجيح</Link>
        <Link to='/home5' class="dropdown-item" >البرادي</Link>
        <Link to='/home7' class="dropdown-item" > ديكورات خشب</Link>
        <Link to='/home6' class="dropdown-item" >طاولات</Link>
     
        </div>
      </li>
    </ul>
    
  </div>
</nav>
    </nav>
  );
}

      export default nac;