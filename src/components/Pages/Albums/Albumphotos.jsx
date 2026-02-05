import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Albumphotos.css";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";

const Albumphotos = () => {
  const { id } = useParams();

  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [albumTitle, setAlbumTitle] = useState("");
  const [lovedPhotos, setLovedPhotos] = useState({});

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  // ================= FETCH ALBUM =================
  const FetchAlbumById = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/album/get/${id}`);
      setAlbumTitle(res.data?.data?.club);
      setAlbumPhotos(res.data?.data?.photos || []);
    } catch (err) {
      console.log("Fetch Error:", err);
    }
  };

  useEffect(() => {
    FetchAlbumById();

    // eslint-disable-next-line
  }, [id]);

  // ================= COPY LINK =================
//   const HandleCopyLink = (photoUrl) => {
//     navigator.clipboard.writeText(photoUrl);
//     alert("Link copied!");
//   };


const HandleCopyLink = (photoUrl) => {
    navigator.clipboard
      .writeText(photoUrl)
      .then(() => {
        console.log("Photo URL copied to clipboard: ", photoUrl);
        alert("Link copied to clipboard!");
        // setShareUrl(photoUrl); // Set the URL for sharing
        // handleOpen(); // Open Modal
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  };
  // ================= DOWNLOAD =================
//   const handleDownload = (url, name, photoId) => {
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = name || "photo.png";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);

//     IncreaseDownload(photoId);
//   };



const handleDownload = async (url, name, photoId) => {
    try {
      const response = await fetch(url);
  
      const blob = await response.blob();
  
      const blobUrl = window.URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = name || "photo.png";
  
      document.body.appendChild(a);
      a.click();
  
      document.body.removeChild(a);
  
      window.URL.revokeObjectURL(blobUrl);
  
      // Increase count after success
      IncreaseDownload(photoId);
  
    } catch (err) {
      console.error("Download failed:", err);
      alert("Download failed!");
    }
  };





  
  

  // ================= LIKE =================
  const toggleLove = (index, photoId) => {
    IncreaseLike(photoId);

    setLovedPhotos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // ================= API CALLS =================
  const IncreaseLike = async (photoId) => {
    await axios.patch(
      `${BaseUrl}/api/album/albums/${id}/photos/${photoId}/increase-likes`
    );
  };

  const IncreaseDownload = async (photoId) => {
    await axios.patch(
      `${BaseUrl}/api/album/albums/${id}/photos/${photoId}/increase-downloads`
    );
  };

  // ================= UI =================
  return (
    <div>
      <Navbartoplogo />

      <div className="albumphotosnew_dev">
        {/* Album Title */}
        <h2 className="albumphotos-title">{albumTitle}</h2>

        <div className="albumphotos-container">
          {albumPhotos.length === 0 ? (
            <p>No photos found</p>
          ) : (
            albumPhotos.map((photo, index) => (
              <div className="albumphotos-card" key={photo._id}>
                {/* Image */}
                <img src={photo.url} alt="album" />

                {/* Overlay */}
                <div className="albumphotos-overlay">
                  <h4>{photo.title || "Photo"}</h4>
                  <p>{photo.createdAt?.slice(0, 10)}</p>

                  <div className="albumphotos-icons">
                    {/* Like */}
                    <span
                      onClick={() => toggleLove(index, photo._id)}
                      style={{
                        color: lovedPhotos[index] ? "red" : "white",
                      }}
                    >
                      ❤️
                    </span>

                    {/* Share */}
                    <span onClick={() => HandleCopyLink(photo.url)}>🔗</span>

                    {/* Download */}
                    <span
                      onClick={() =>
                        handleDownload(photo.url, photo.title, photo._id)
                      }
                    >
                      ⬇️
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
};

export default Albumphotos;
