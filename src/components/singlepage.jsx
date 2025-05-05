import React, { useState } from "react";
import "./Singlepage.css";
import { useLocation } from "react-router-dom";
import Footer from "./footer";

const Singlepage= () => { 
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const location = useLocation();
  const user = location.state || {};
    const shopcolor = {
    color: "green",
  };
  // const [initialvalue, finalvalue] = useState("red");
  // const setcolor = (e) => {
  //   console.log(e.target.getAttribute("data-value"));
  //   finalvalue(e.target.getAttribute("data-value"))
    
  // }

  return (
    <>
       <div className="shop">
        <span><h3>Shop</h3></span> 
        <h4>
          <span className='Home'><a href="#">Home </a></span>/ 
          <span style={shopcolor}> Store/Single product</span>
        </h4>
      </div>
    <div className="Singleproduct-container">
      <div className="Singleproduct-image">
        <img src={user.image} alt="Singleproduct" />
        {/* <img src={user.image[initialvalue]} alt="Singleproduct" /> */}
      </div>
      <div className="Singleproduct-details">
        <h1>{user.title}</h1>
        <div className="rating">
          ⭐⭐⭐⭐☆ <span>(5 customer reviews)</span>
        </div>
        <h2>${ user.price}</h2>
        <p>
 {user.description}
        </p>
          <p>Product Category: <strong>{ user.category}</strong></p>
        <p>Quantity: <strong>68 Items</strong></p>
        <p>Shipping tax: <strong>Free</strong></p>

          {user.category === "men's clothing" || user.category === "women's clothing" ? (
            <div className="options">
              <div className="size">
                <h4>Size:</h4>
                <div>
                  <button className="size-btn selected">L</button>
                  <button className="size-btn">M</button>
                  <button className="size-btn">S</button>
                  <button className="size-btn">XL</button>
                  <button className="size-btn">XXL</button>
                </div>
              </div>

              <div className="color">
                <h4>Color:</h4>
                <div className="color-options">
                  <span className="color-box"  
                   style={{ background: "red" }}></span>
                  {/* <span className="color-box"  
                    onClick={setcolor} data-value="red" style={{ background: "red" }}></span> */}
                  
                  <span className="color-box"  style={{ background: "yellow" }}></span>
                  {/* <span className="color-box" onClick={setcolor} data-value="yellow" style={{ background: "yellow" }}></span> */}

                  <span className="color-box"  style={{ background: "orange" }}></span>
                  {/* <span className="color-box" onClick={setcolor} data-value="green" style={{ background: "orange" }}></span> */}

                  <span className="color-box"  style={{ background: "purple" }}></span>
                  {/* <span className="color-box" onClick={setcolor} data-value="pink" style={{ background: "purple" }}></span> */}
                </div>
              </div>
            </div>
          ) : (
              <p>Size and color options are not available for this category.</p>  
   )}

        <div className="quantity">
          <button onClick={handleDecrement} className="quantity-btn">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="quantity-btn">+</button>
        </div>

        <button className="add-to-cart">Add To Cart</button>
        <div className="share">
          <h4>Share this product:</h4>
          <div>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Pinterest</a>
          </div>
        </div>

        <div className="Singleproduct-categories">
          <h4>Categories:</h4>
          <p>Butter & Eggs, Fruits, Milk & Cream, Vegetables</p>
          <h4>Tags:</h4>
          <p>organic food, fruits, juice</p>
          <h4>Brand:</h4>
          <p>KFC</p>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  
);

};

export default Singlepage;
