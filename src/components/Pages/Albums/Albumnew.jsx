import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Albumnew.css";
import Prefooter from "../../footer/Prefooter";
import Footer from "../../footer/Footer";
import Navbartoplogo from "../../navbar/Navbartoplogo";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import BrandLogoCarouselforAlbum from "../../brandscarousel/BrandLogoCarouselforAlbum";

const baseUrl = process.env.REACT_APP_BASE_URL;

const Albumnew = () => {
  const navigate = useNavigate();

  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAlbums();
  }, []);

  // const fetchAlbums = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/api/album/getall`);

  //     const FilteredData = response.data.data.filter((album) => album.id !== "6976425b7af04a2b9f8da4f1");

  //     console.log("Fetched Albums:", FilteredData);
  //     setAlbums(response.data.data || []);
  //   } catch (error) {
  //     console.error("Error fetching albums:", error);
  //   }
  // };

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/album/getall`);

      const filteredData = response.data.data.filter(
        (album) => album._id !== "6976425b7af04a2b9f8da4f1"
      );

      console.log("Fetched Albums:", filteredData);

      setAlbums(filteredData);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const SendToPhotobyAlbum = (album) => {
    navigate(`/photobyalbum/${album._id}`);
  };

  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Filter albums (Title + Tags)
  const filteredAlbums = albums.filter((album) => {
    const search = searchTerm.toLowerCase();

    const titleMatch = album.title?.toLowerCase().includes(search);

    const tagMatch = album.tags?.some((tag) =>
      tag.toLowerCase().includes(search)
    );

    return titleMatch || tagMatch;
  });

  return (
    <div className="me">
      <Navbartoplogo />

      <div className="new_albums_head_plus_serch_box_cont">
        <p className="albumphotopage_heading">ALBUMS</p>

        <BrandLogoCarouselforAlbum />
        <p className="album_page_new_top_txt">
          Easily <span>view, share</span> and <span>download</span> your photos
        </p>

        <div className="album_search_wrapper">
          <div className="album_search_box">
            <span className="search_icon">
              <IoIosSearch />
            </span>

            <input
              type="text"
              placeholder="Search by album name or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="album_search_input"
            />
          </div>
        </div>
      </div>

      {/* Albums Grid */}
      <div className="beAlbumnew_container">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <div
              className="beAlbumnew_card"
              key={album._id}
              onClick={() => SendToPhotobyAlbum(album)}
            >
              <img
                src={album.coverPhoto}
                alt={album.title}
                className="beAlbumnew_image"
              />

              {/* Overlay */}
              <div className="beAlbumnew_overlay">
                <h3 className="beAlbumnew_title">{album.title}</h3>

                <p className="beAlbumnew_date">{formatDate(album.date)}</p>

                <p className="beAlbumnew_venue">{album.venue}</p>

                <div className="beAlbumnew_tags">
                  {album.tags
                    ?.flatMap((tag) => tag.split(",")) // comma se split
                    .map((tag, index) => (
                      <span key={index}>{tag.trim()}</span> // extra space remove
                    ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no_album_found">No albums found 😕</p>
        )}
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
};

export default Albumnew;
