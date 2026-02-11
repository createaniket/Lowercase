import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";

const NotFound = () => {
  return (
    <>
      <Navbartoplogo />

      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <h2 className="notfound-subtitle">Page Not Found</h2>

        <p className="notfound-text">
          Oops! The page you are looking for does not exist.
        </p>

        <Link to="/" className="notfound-btn">
          Go Back Home
        </Link>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default NotFound;
