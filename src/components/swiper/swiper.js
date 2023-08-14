import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "@mui/material";

import Nav from "../../components/nav";
import Footer from "../footer/footer";
import "./swiper.css";
import axios from "axios";

import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { json, useParams } from "react-router-dom";

function TaskDetail() {
  const [product, setProduct] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/storage"; // Replace with your actual base URL

  let { productId } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  return (
    <form>
      <Nav />
      <div class="login-box">
        <div class="contact-box">
          <div class="leftt">
            <img src={baseUrl + "/" + product.image}></img>
          </div>

          <div class="rightt">
            <h3> {product.name}</h3>
            <br />

            <p class="label">{product.details} </p>

            <p className="label">
              {product.is_available == "1" ? "متاح" : "غير متاح"}: حالة المنتج
            </p>

            <h2>يوجد خدمة توصيل</h2>
            <br />
            <a type="button" class="btn-floating btn-light btn-lg">
              {" "}
            </a>

            <a
              type="button"
              class="bt btn-floating btn-light btn-lg"
              href="https://instagram.com/alharirimobel?igshid=NTc4MTIwNjQ2YQ=="
            >
              <FaInstagramSquare />
            </a>

            <a
              type="button"
              class=" bt btn-floating btn-light btn-lg"
              href="https://www.bing.com/ck/a?!&&p=293d90315176caa3JmltdHM9MTY5MDMyOTYwMCZpZ3VpZD0zN2I4NjQxOC1mYTBhLTY1MDctMTdlYS03NzBiZmI3YjY0ZTEmaW5zaWQ9NTE5MQ&ptn=3&hsh=3&fclid=37b86418-fa0a-6507-17ea-770bfb7b64e1&psq=react+icons&u=a1aHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtaWNvbnM&ntb=1"
            >
              <FaTiktok />
            </a>

            <a
              type="button"
              class=" bt btn-floating btn-light btn-lg"
              href="https://www.facebook.com/profile.php?id=100088168273049&mibextid=LQQJ4d"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </form>
  );
}

export default TaskDetail;
