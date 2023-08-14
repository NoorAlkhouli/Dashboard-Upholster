import { React, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, json } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import searchFilter from "react-filter-search";

const Car22 = () => {
  const [searchInput, setSearchInput] = useState("");
  const [product, setProduct] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/storage"; // Replace with your actual base URL

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get/products")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredProducts = product.filter((item) => {
    if (searchInput == "") {
      return null;
    } else return item.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          name="search"
          placeholder="البحث عن منتج"
          value={searchInput}
          onChange={handleSearch}
        />
        <button type="submit">
          <i>
            <FaSearch />
          </i>
        </button>
      </div>

      <div>
        {filteredProducts.map((item, i) => (
          <div class="card " style={{ borderRadius: "25px" }} key={i}>
            <img
              className="imag m-3"
              src={baseUrl + "/" + item.image}
              style={{ height: "300px", borderRadius: "25px" }}
            />
            <div class="card-body">
              <h5 class="card-title ">{item.name}</h5>
              <p className="text-truncate  "> {item.details} </p>
              <div className="text">
                <Link className="btn" to={`/product/${product.id}`}>
                  عرض المزيد
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Car22;
