import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Albumphotos.css";

import Navbartoplogo from "../../navbar/Navbartoplogo";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";

// ICONS
import { IoHeart } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

import SEO from "../../SEO";

const Albumphotos = () => {
  const { id } = useParams();

  const [albumPhotos, setAlbumPhotos] = useState([]);
  const [albumTitle, setAlbumTitle] = useState("");
  const [lovedPhotos, setLovedPhotos] = useState({});

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  // ================= FETCH ALBUM =================
  // const FetchAlbumById = async () => {
  //   try {
  //     const res = await axios.get(`${BaseUrl}/api/album/get/${id}`);

  //     setAlbumTitle(res.data?.data?.club);
  //     console.log("Fetched Album:", res.data.data);

  //     const FilteredPhotos = res.data?.data?.photos?.filter((photo) => photo.url.contain = 'png, jpg, jpeg, webp, avif, gif');
  //     setAlbumPhotos(FilteredPhotos || []);
  //   } catch (err) {
  //     console.log("Fetch Error:", err);
  //   }
  // };


  const FetchAlbumById = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/album/get/${id}`);
  
      const albumData = res?.data?.data;
  
      setAlbumTitle(albumData?.club || "");
  
      console.log("Fetched Album:", albumData);
  
      // allowed extensions
      const allowedExtensions = ["png", "jpg", "jpeg", "webp", "avif", "gif"];
  
      const filteredPhotos = albumData?.photos?.filter((photo) => {
        if (!photo?.url) return false;
  
        const extension = photo.url.split(".").pop().toLowerCase();
        return allowedExtensions.includes(extension);
      });
  
      setAlbumPhotos(filteredPhotos || []);
  
    } catch (err) {
      console.log("Fetch Error:", err);
    }
  };
  

  useEffect(() => {
    FetchAlbumById();
    // eslint-disable-next-line
  }, [id]);

  // ================= COPY LINK =================
  const HandleCopyLink = (photoUrl) => {
    navigator.clipboard
      .writeText(photoUrl)
      .then(() => {
        alert("Link copied!");
      })
      .catch(() => {
        alert("Copy failed!");
      });
  };

  // ================= DOWNLOAD =================
  const handleDownload = (url, name, photoId) => {
    try {
      const a = document.createElement("a");

      a.href = url;
      a.download = name || "photo.jpg";
      a.target = "_blank";

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      IncreaseDownload(photoId);
    } catch (err) {
      console.log(err);
      alert("Download failed!");
    }
  };

  // ================= LIKE TOGGLE =================
  const toggleLove = (index, photoId) => {
    IncreaseLike(photoId);

    setLovedPhotos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // ================= API CALLS =================
  const IncreaseLike = async (photoId) => {
    try {
      await axios.patch(
        `${BaseUrl}/api/album/albums/${id}/photos/${photoId}/increase-likes`
      );
    } catch (err) {
      console.log("Like error:", err);
    }
  };

  const IncreaseDownload = async (photoId) => {
    try {
      await axios.patch(
        `${BaseUrl}/api/album/albums/${id}/photos/${photoId}/increase-downloads`
      );
    } catch (err) {
      console.log("Download error:", err);
    }
  };

  // ================= UI =================
  return (
    <div>
      <SEO
        title={albumTitle || "Event Album"}
        description={
          albumTitle
            ? `Photos from ${albumTitle} by Lowercase Events`
            : "Browse event photo albums by Lowercase Events"
        }
        url={`/photobyalbum/${id}`}
      />

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
                {/* IMAGE */}
                <img src={photo.url} alt="album" />

                {/* OVERLAY */}
                <div className="albumphotos-overlay">
                  {/* <h4>{photo.title || "Photo"}</h4> */}
                  <p>{photo.createdAt?.slice(0, 10)}</p>

                  <div className="albumphotos-icons">
                    {/* LIKE SYSTEM */}
                    <div className="albumphotos-like-box">
                      {lovedPhotos[index] ? (
                        <>
                          <IoHeart
                            className="albumphotos-like-icon-active"
                            onClick={() => toggleLove(index, photo._id)}
                          />

                          <p className="albumphotos-like-text">Dislike</p>
                        </>
                      ) : (
                        <>
                          <CiHeart
                            className="albumphotos-like-icon"
                            onClick={() => toggleLove(index, photo._id)}
                          />

                          <p className="albumphotos-like-text">{photo.likes}</p>
                        </>
                      )}
                    </div>

                    {/* SHARE */}

                    <FaShare
                      className="albumphotos-action-icon"
                      onClick={() => HandleCopyLink(photo.url)}
                    />

                    {/* DOWNLOAD */}
                    <span
                      className="albumphotos-action-icon"
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
