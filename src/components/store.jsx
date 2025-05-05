import React, { useEffect, useState } from "react";
import "./store.css";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { FaRegEye, FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [ range, setRange] = useState([0, 500]); // Price range filter
  

  // Fetch products from the API
  useEffect(() => {
    fetch("http://localhost/API/index.php")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Filter products by category
  
  useEffect(() => {
    let filtered = products;

    // Filter by category if selected
    if (selectedCategory !== "") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

 
   
   
 

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchText, products]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }
   

  const clearSearch = () => {
    setSearchText("");
  };

  const onreset = (category) => {
    setSelectedCategory(category);
    setSearchText("");
    setRange([0, 500]);
   const filtered = products.filter(
    (product) => product.price >= 0 && product.price <= 500
  );
  setFilteredProducts(filtered);
 
  
  };
  const handleRangeChange = (value) => {
    setRange(value);
  };

   const applyPriceFilter = () => {
     // Filter products by price range
     if (products.category === selectedCategory ) {
       
    

       const filtered = products.filter(
         (product) => product.price >= range[0] && product.price <= range[1]
       );
       setFilteredProducts(filtered);
     }
     else {
         const filtered = products.filter(
         (product) => product.price >= range[0] && product.price <= range[1]
       );
       setFilteredProducts(filtered);
       
     }
  };
  

 
  return (
    <>
      <div className="shop">
        <span>
          <h3>Shop</h3>
        </span>
        <h4>
          <span className="Home">
            <a href="#">Home </a>
          </span>
          / <span style={{ color: "green" }}>Shop</span>
        </h4>
      </div>
      <section className="main-container">
        <div className="categories">
          <div className="input">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
             
              placeholder="Search products..."
            />
            <button className="search-btn">
              <CiSearch size={"30px"} />
            </button>
            {searchText && (
              <button className="cancel-btn" onClick={clearSearch}>
                <RxCross2 size={"20px"} />
              </button>
            )}
          </div>
          <h1>Product Categories</h1>
          <div className="items">
            <ul>
              <li onClick={() => handleCategoryClick("")}>Home & Lifestyle</li>
              <li onClick={() => handleCategoryClick("electronics")}>
                Electronic Accessories
              </li>
              <li onClick={() => handleCategoryClick("men's clothing")}>
                Men's Fashion
              </li>
              <li onClick={() => handleCategoryClick("women's clothing")}>
                Women's Fashion
              </li>
              <li onClick={() => handleCategoryClick("")}>Sports & Outdoor</li>
              <li onClick={() => handleCategoryClick("jewelery")}>
                Health & Beauty
              </li>
              <li onClick={() => handleCategoryClick("")}>
                Watches & Accessories
              </li>
            </ul>
          </div>
          <div>
            <h4>Filter by Price</h4>
            <RangeSlider
              min={0}
              max={1000}
              value={range}
              defaultValue={[0, 500]}
              onInput={handleRangeChange}
              className="custom-range-slider"
            />
            <p>
              Price: $ {range[0]} - $ {range[1]}
            </p>
            <button
          
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
               onClick={applyPriceFilter}
            >
              Filter
            </button>
          </div>
        </div>
        <div className="products">
          <div className="products-top">
            <h6>
              Showing {filteredProducts.length} of {products.length} results
            </h6>
            <div className="relod">
              <button onClick={() => onreset("")}>
                <GrPowerReset size={"30px"} />
              </button>
            </div>
            <div className="sorting">
              <span style={{ fontWeight: "bold" }}>Sort By :</span>
              <select>
                <option value="sort">Default sorting</option>
                <option value="sort">Default sorting</option>
                <option value="sort">Default sorting</option>
              </select>
            </div>
          </div>
          <div className="product-container">
            {loading ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <Link to="/Singlepage" state={product}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                  </Link>
                  <div className="icon-container">
                    <div className="icon">
                      <FaRegHeart size={"20px"} color="#333" />
                    </div>
                    <div className="icon">
                      <FiShoppingCart size={"20px"} color="#333" />
                    </div>
                    <div className="icon">
                      <Link to="/Singlepage" state={product}>
                        <FaRegEye size={"20px"} color="#333" />
                      </Link>
                    </div>
                  </div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Store;
