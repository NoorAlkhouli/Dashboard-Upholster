import React, { Fragment } from 'react';
import Nav from './nav';
import Footer from './footer/footer';
import Header from './header/header';
import  Card from './card';
import  Card3 from './card3';
import  Card4 from './card4';
import  Card5 from './card5';
import  Card00 from './card00';
import  Details from './details/details';
import Swiper from './swiper/swiper'
import Search  from './search/search';
import {Link} from 'react-router-dom'
import Scrolltop from './scrolltop/scrolltop';
import Slider from './slider/slider';

function Home() {
  return (
    
    <div>
      

      <Fragment>
       <Nav/>
       <Header/>

<Scrolltop/>
<Slider/>

       <Card/>
     <Details/>
     <Card00/>
     <Card3/>
     <Card4/>
     <Card5/>
        <Footer />
      </Fragment>
    </div>
    
  );
}
export default Home;
