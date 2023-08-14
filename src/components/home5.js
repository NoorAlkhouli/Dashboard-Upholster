import React, { Fragment } from 'react';
import Nav from './nav';
import Footer from './footer/footer';
import Header from './header/header';
import  Card5 from './card5';
import  Details from './details/details';
import Swiper from './swiper/swiper'

import Scrolltop from './scrolltop/scrolltop';


function Home() {
  return (
    <div>
      <Fragment>
       <Nav/>
     <Scrolltop/>
 
       <Card5/>
   

        <Footer />
      </Fragment>
    </div>
  );
}
export default Home;