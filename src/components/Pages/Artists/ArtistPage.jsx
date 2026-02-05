import React from "react";
import { useParams } from "react-router-dom";
import artistsData from "./artistData";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import "./ArtistPage.css";

const ArtistPage = () => {
  const { id } = useParams();

  // Find artist by id
  const artist = artistsData.find((a) => a.id === id);

  if (!artist) {
    return <h2 style={{ color: "white" }}>Artist Not Found</h2>;
  }

  return (
    <>
      <Navbartoplogo />

      <div className="artist-page">
        {/* Header */}
        <div className="artist-header">
          <h1>{artist.name}</h1>

          <div className="header-actions">
            <button className="play-btn">LIRE</button>
            <button className="follow-btn">ABONNÉ</button>
            <button className="more-btn">•••</button>
          </div>
        </div>

        {/* Content */}
        <div className="artist-content">
          {/* Left */}
          <div className="left-section">
            <h3>Galerie d'images</h3>

            <div className="gallery">
              <img src={artist.images.main} className="main-img" alt="" />

              <div className="side-images">
                <img src={artist.images.side1} alt="" />
                <img src={artist.images.side2} alt="" />
              </div>
            </div>

            <h3>Biographie</h3>

            <p className="bio">{artist.bio}</p>
          </div>

          {/* Right */}
          <div className="right-section">
            <h3>Plus d'infos</h3>

            <ul className="social-links">
              <li>
                <a href={artist.socials.instagram}>Instagram</a>
              </li>
              <li>
                <a href={artist.socials.facebook}>Facebook</a>
              </li>
              <li>
                <a href={artist.socials.wikipedia}>Wikipedia</a>
              </li>
            </ul>

            <h3>Découvert sur</h3>

            <div className="playlist">
              {artist.playlists.map((item, i) => (
                <div className="playlist-item" key={i}>
                  <img src={item.image} alt="" />

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </>
  );
};

export default ArtistPage;
