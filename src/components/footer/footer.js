import React from 'react';
import {Box , typography} from '@mui/material';
import TwiitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faHome,faMessage} from '@fortawesome/free-solid-svg-icons';

import {FaFacebook,FaInstagramSquare,FaTiktok,FaSearch} from 'react-icons/fa'
import './footer.css'
const  footer=()=> {
  return (
    <body>
   <footer class="text-white text-center text-lg-start bg-dark">
 
    <div class="container p-4">
  
      <div class="row mt-4">

        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">About company</h5>

          <p>
          بيع جميع انواع المفروشات
          </p>
          <p>
          التي تخص المنازل
        </p>
          <div class="mt-4">
          
       
            <a type="button" class="btn-floating btn-light btn-lg"> </a>
         
            <a type="button" class="bt btn-floating btn-light btn-lg" href='https://instagram.com/alharirimobel?igshid=NTc4MTIwNjQ2YQ=='><FaInstagramSquare /></a>
     
            <a type="button" class=" bt btn-floating btn-light btn-lg" href='https://www.tiktok.com/@alhariri.dom.mobel?_t=8ec2wxMFLyk&_r=1'><FaTiktok /></a>
           
            <a type="button" class="bt btn-floating btn-light btn-lg" href='https://www.facebook.com/profile.php?id=100088168273049&mibextid=LQQJ4d'><FaFacebook/></a>
      
          </div>
        </div>
    
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4 pb-1">البحث عن منتج </h5>

          <div class="form-outline form-white mb-4">
            <input type="text" id="formControlLg" class="form-control form-control-lg" />
            <label class="form-label" for="formControlLg">البحث</label>
          </div>

          <ul class="fa-ul" >
            <li class="mb-3">
              <span class="fa-li"><FontAwesomeIcon icon={faHome} /></span><span class="ms-2">Heimerstraße 115c, 41748 Viersen</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><FontAwesomeIcon icon={faMessage} /></span><span class="ms-2">munir@xn--alharirimbel-djb.com</span>
            </li>
            <li class="mb-3">
              <span class="fa-li"><FontAwesomeIcon icon={faPhone} /></span><span class="ms-2">+49 1511 1901907</span>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h4 class="text-uppercase mb-4">أوقات الدوام</h4>

          <table class="table text-center ">
            <tbody class="fw-normal">
              <tr>
                <td>اثنين - ثلاثاء:</td>
                <td>٩صباح - ٨مساء</td>
              </tr>
              <tr>
                <td>اربعاء- خميس - جمعة:</td>
                <td>٩صباح - ٨مساء</td>
              </tr>
              <tr>
                <td>السبت:</td>
                <td>٩صباح - ٥مساء</td>
              </tr>
              <tr>
                <td>الأحد:</td>
                <td> مغلق</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
    
    </div>


    
  </footer>

</body>
  );
}
export default footer;