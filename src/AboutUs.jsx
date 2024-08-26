import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Plants4U, your new plants e-commerce platform!</p>
      <p className="about-us-content">
        Our story dates to 2020, during the pandemic. We are a group of friends who had to completely remake themselves in order to cope with the disorientation and crisis that marked that time. Plants 4U was founded as a youthful and vibrant startup focused to the electronic trade of plants.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        We believe that the client should come first. For this reason, we strive every day to provide an efficient delivery service that meets the expectations of our consumers.      
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        What are you waiting for to explore the world of Plants 4U?
      </p>
    </div>
  );
}

export default AboutUs;
