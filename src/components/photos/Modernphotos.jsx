import React, { useEffect, useState } from "react";
import "./Modernphotos.css";
import axios from "axios";

const Modernphotos = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/album/getall"
        );
        console.log(response.data); // Verify the structure of the data
        setAlbums(response.data.data); // Adjust this to match the data structure returned by the API
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const limitedAlbums = albums.slice(0, 5);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="modern_photo_parent_section">
      <div className="moodern_photos_text_sect">
        <p className="moder_photos_heading"> PHOTOS _</p>

        <button className="moder_photos_btn"> View All Albums</button>
      </div>

      <div className="moden_photos_section">
        <div className="moden_photos_section_container">
          {limitedAlbums.map((album) => (
            <img
              key={album._id} // Add a key for list rendering
              src={album.coverPhoto || "fallback-image-url.jpg"} // Add fallback for missing image
              alt="Album Cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modernphotos;