import React from "react";
import ArtistsCard from "./ArtistsCard";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import "./AllArtists.css";

const AllArtists = () => {
  return (
    <div>
      <Navbartoplogo />

      <div className="main_artists_cards_cont">
        <ArtistsCard />
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
};

export default AllArtists;
