
import {React, useState , useEffect } from 'react';

import axios from 'axios';
import Navbar from './navbar'
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';





  const UsingAxios = () => {
    const [users, setusers] = useState([]);
    const baseUrl = "http://127.0.0.1:8000/storage"; // Replace with your actual base URL

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/get/product/category/5")
        .then((response) => response.json())
        .then((data) => setusers(data));
    }, []);

    console.log(users);
    return (
      <section className="dsm">
        <h2 className="sub-heading m-1"> الاراجيح </h2>
        <div class="container py-5">
          <div class="row justify-content-center mb-3">
            {users.map((item) => {
              return (
                <div class="col-md-12 col-xl-10 p-3">
                  <div class="card shadow-0 border rounded-3 ">
                    <div class="card-body ">
                      <div class="row ">
                        <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 ">
                          <div class="bg-image hover-zoom ripple rounded ripple-surface">
                            <img
                              src={baseUrl + "/" + item.image}
                              class="w-100"
                              style={{ borderRadius: "25px" }}
                            />
                            <a href="#!">
                              <div class="hover-overlay">
                                <div class="mask"></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-6">
                          <h2 className="hr">{item.name}</h2>

                          <p class="text mb-4 mb-md-0">{item.details}</p>
                        </div>
                        <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div class="d-flex flex-row align-items-center mb-1"></div>
                          <h6 class=" hr text-success">(التسويق مجاني) </h6>
                          <div class="d-flex flex-column mt-4">
                            <button
                              class="btn btn-primary btn-sm"
                              type="button"
                              style={{ borderRadius: "25px" }}
                            >
                              {" "}
                              *{item.is_available}* حالة المنتج
                              {item.is_available == "1" ? "متاح" : "غير متاح"}:
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
    

  

export default UsingAxios;