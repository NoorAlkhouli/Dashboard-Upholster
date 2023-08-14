import { React, useState, useEffect } from "react";
import "./details.css";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

const UsingAxios = () => {
  const [products, setProducts] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/storage"; // Replace with your actual base URL

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get/product/category/2")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <section className="dsm">
      <h2 className="sub-heading m-1"> غرف الصالون</h2>
      <div className="container py-5">
        <div className="row justify-content-center mb-3">
          {products.map((product) => (
            <div className="col-md-12 col-xl-10 p-3" key={product.id}>
              <div className="card shadow-0 border rounded-3 ">
                <div className="card-body ">
                  <div className="row ">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 ">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img
                          src={baseUrl + "/" + product.image}
                        
                          className="w-100"
                          style={{ borderRadius: "25px" }}
                        />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div className="mask"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h2 className="hr">{product.name}</h2>
                      <p className="text mb-4 mb-md-0">{product.details}</p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1"></div>
                      <h6 className="hr text-success">(التسويق مجاني) </h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          style={{ borderRadius: "25px" }}
                        >
                          {product.is_available == "1" ? "متاح" : "غير متاح"}:
                          حالة المنتج
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsingAxios;
