import React, { Fragment } from 'react';
import Nav from './nav';
import Footer from './footer/footer';
import Header from './header/header';
import  Card from './card';
import  Details from './details/details';
import Swiper from './swiper/swiper'

import Scrolltop from './scrolltop/scrolltop';

function Home() {
  return (
    <div>
      <Fragment>
       <Nav/>
     
 <Scrolltop/>
       <Card/>
   

        <Footer />
      </Fragment>
    </div>
  );
}
export default Home;
