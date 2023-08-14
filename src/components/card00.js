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
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar'
  
    function Card00() {
      const [products, setProducts] = useState([]);
      const baseUrl = "http://127.0.0.1:8000/storage"; // Replace with your actual base URL

      useEffect(() => {
        fetch("http://127.0.0.1:8000/api/get/product/category/3")
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);

      console.log(products);
      return (
        <div className="gg">
          <h2 className="sub-headin "> طاولات </h2>
          <div className="container">
            <div className="row ">
              {products.map((product) => {
                return (
                  <div className="col-md-3 mb-2 " key={product.id}>
                    <div>
                      <div class="card " style={{ borderRadius: "25px" }}>
                        <img
                          className="imag m-3"
                          src={baseUrl + "/" + product.image}
                          style={{ height: "300px", borderRadius: "25px" }}
                        />
                        <div class="card-body">
                          <h5 class="card-title ">{product.name}</h5>
                          <p className="text-truncate  "> {product.details} </p>
                          <div className="text">
                            <Link className="btn" to={`/product/${product.id}`}>
                              عرض المزيد
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }


export default Card00;