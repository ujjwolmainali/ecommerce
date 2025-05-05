import React from 'react'
import about from "../assets/about.png";
import ujjwol from "../assets/ujjwol.png";
import raju from "../assets/raju.png";
import saubhagya from "../assets/saubhagya.png";
import { GoNorthStar } from "react-icons/go";
import Footer from './footer';
 import { TiSocialFacebook } from "react-icons/ti";
 import {RiInstagramFill} from "react-icons/ri";
 import { FaGooglePlusG } from "react-icons/fa";


import "./about.css";

const About = () => {
    const shopcolor = {
    color: "green",
  };
  return (
    <>
         <div className="shop">
        <span><h3>About</h3></span> 
        <h4>
          <span className='Home'><a href="#">Home </a></span>/ 
          <span style={shopcolor}> About</span>
        </h4>
      </div>
      <div className="about-we">
        <img src={about} alt="image" />
        <div className="about-us">
          <h1>About The Company</h1>
          <p>SabaikoBajar is a dynamic e-commerce platform that revolutionizes the way people shop online. Founded in the year 2081, it serves as a one-stop marketplace where customers can find a wide variety of goods ranging from daily essentials to luxury products. The platform is committed to providing a seamless, convenient, and reliable shopping experience for its users.
            SabaikoBajar's core mission is to make quality goods accessible to everyone, everywhere. The platform features an extensive catalog of products across categories such as electronics, fashion, home appliances, groceries, and more. Customers enjoy the benefits of competitive pricing, diverse product options, and secure payment gateways.
          </p>
        </div>
      </div>
      <div className="journey">
         <div className="featured-container">
                  <h1>Delivery Process</h1>
                  <div className="lines">
                    <div className="left"></div>
                    <div className="astrick">
                      <GoNorthStar size={"40px"} color="Green" />
                    </div>
                    <div className="right"></div>
                  </div>
                </div>
         <div class="steps-container">
    <div class="step left">
      <div class="step-header">
        <div class="step-number">STEP 01</div>
      </div>
      <h3>CHOOSE YOUR PRODUCTS</h3>
      <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
    </div>
    <div class="step right">
      <div class="step-header">
        <div class="step-number">STEP 02</div>
      </div>
      <h3>CONNECT NEAREST STORE</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </div>
    <div class="step left">
      <div class="step-header">
        <div class="step-number">STEP 03</div>
      </div>
      <h3>Share your location</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
    </div>
    <div class="step right">
      <div class="step-header">
        <div class="step-number">STEP 04</div>
      </div>
      <h3>Get delivered fast</h3>
      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
    </div>
  
  </div>
      </div>
        <div className="featured-container">
                  <h1>Meet Our Team</h1>
                  <div className="lines">
                    <div className="left"></div>
                    <div className="astrick">
                      <GoNorthStar size={"40px"} color="Green" />
                    </div>
                    <div className="right"></div>
                  </div>
      </div>
    <div className="teams">
  <div className="members">
    <div className="mem">
      <div className="img-container">
        <img src={ujjwol} alt="" />
        <a href="https://www.facebook.com" className="hover">
          <TiSocialFacebook size={"35px"} />
        </a>
      </div>
      <h1>Ujjwol Mainali</h1>
      <h5>Chef Officer</h5>
    </div>

    <div className="mem">
      <div className="img-container">
        <img src={raju} alt="" />
        <a href="https://www.facebook.com" className="hover">
          <TiSocialFacebook size={"35px"} />
        </a>
      </div>
      <h1>Saubhagya Maharjan</h1>
      <h5>Chef Executive</h5>
    </div>

    <div className="mem">
      <div className="img-container">
        <img src={saubhagya} alt="" />
        <a href="https://www.facebook.com" className="hover">
          <TiSocialFacebook size={"35px"} />
        </a>
      </div>
      <h1>Raju Mainali</h1>
      <h5>Chef Technical Officer</h5>
    </div>
  </div>
</div>

     
        <Footer/>
      
    </>
  )
}

export default About
