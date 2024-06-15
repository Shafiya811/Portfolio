/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "Laptop Image";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", minHeight: "100vh" }}>
    <img className="background" src={image} alt={imageAltText} style={{ width: "100%", height: "100vh", objectFit: "cover", position: "absolute", zIndex: -1 }} />
    <div style={{ position: "absolute", top: "5rem", left: "2rem", backgroundColor: "#F5DEB3", padding: "1rem", borderRadius: "20px" }}>
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
    <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
      <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll Down Arrow" />
    </div>
  </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
