import React from "react";
import ArtistsCard from "./ArtistsCard";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import "./AllArtists.css";

import SEO from "../../SEO";

const AllArtists = () => {
  return (
    <div>

<SEO
  title="Artists"
  description="Discover DJs, performers and artists collaborating with us."
  url="/artists"
/>

      <Navbartoplogo />



      <div className="main_artists_cards_cont">
      <div className="allartists-heading">ARTISTS</div>
        <ArtistsCard />
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
};

export default AllArtists;
