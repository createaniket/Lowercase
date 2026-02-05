import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Albumnew.css";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import { useNavigate } from "react-router-dom";
const baseUrl = process.env.REACT_APP_BASE_URL;

const Albumnew = () => {

  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/album/getall`);

      setAlbums(response.data.data || []);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };


  const SendToPhotobyAlbum = (album) => {
    navigate(`/photobyalbum/${album._id}`);
  };
  

  // Format date nicely
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (

    <>
    <Navbartoplogo />
    
    <div className="beAlbumnew_container">
      {albums.map((album) => (
        <div className="beAlbumnew_card" key={album._id} onClick={() => SendToPhotobyAlbum(album)}>
          <img
            src={album.coverPhoto}
            alt={album.title}
            className="beAlbumnew_image"
          />

          {/* Overlay */}
          <div className="beAlbumnew_overlay">

            <h3 className="beAlbumnew_title">
              {album.title}
            </h3>

            <p className="beAlbumnew_date">
              {formatDate(album.date)}
            </p>

            <p className="beAlbumnew_venue">
              {album.venue}
            </p>

            <div className="beAlbumnew_tags">
              {album.tags?.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>

          </div>
        </div>
      ))}
    </div>

    <Prefooter />
    <Footer />

    </>

  );
};

export default Albumnew;
