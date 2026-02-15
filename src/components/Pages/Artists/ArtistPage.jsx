import React from "react";
import { Link, useParams } from "react-router-dom";
import artistsData from "./artistData";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import "./ArtistPage.css";

import SEO from "../../SEO";

const ArtistPage = () => {
  const { id } = useParams();

  // Find artist by id
  const artist = artistsData.find((a) => a.id === id);

  if (!artist) {
    return <h2 style={{ color: "white" }}>Artist Not Found</h2>;
  }

  return (
    <>

<SEO
  title={artist?.name || "Artist"}
  description={`Explore events and performances by ${artist?.name}`}
  url={`/artist/${id}`}
/>

      <Navbartoplogo />

      <div className="artist-page">
        {/* Header */}
        <div className="artist-header">
          <h1>{artist.name}</h1>

          <div className="header-actions">
            <Link to="/artists">
            <button className="play-btn">Back to all Artists</button>
            </Link>

            <Link to="/">
            <button className="follow-btn">Home</button>

            </Link>

          </div>
        </div>

        <h3 >{artist.articleTitle}</h3>

        {/* Content */}
        <div className="artist-content">
          {/* Left */}
  
          <div className="left-section">
   

            <div className="gallery">
              <img src={artist.images.main} className="main-img" alt="" />

              <div className="side-images">
                <img src={artist.images.side1} alt="" />
                <img src={artist.images.side2} alt="" />
              </div>
            </div>

            <p className="arts_bgrphy">Biography</p>

            <p className="bio">{artist.bio}</p>
          </div>

          {/* Right */}
          <div className="right-section">
            <h3>Follow {artist.name} </h3>

            <ul className="social-links">
              <li>
                <a href={artist.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li>
                <a href={artist.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a href={artist.socials.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a>
              </li>
            </ul>

            {/* <h3>Découvert sur</h3> */}

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