import React, { useEffect, useState } from "react";
import "./Modernphotos.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Modernphotos = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("Base URL:", baseUrl);
  console.log(albums)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/album/getall`
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
  }, [baseUrl]);

  // const limitedAlbums = albums.slice(0, 6);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="modern_photo_parent_section">
      <div className="moodern_photos_text_sect">
        <p className="moder_photos_heading"> Photos</p>

        <Link to='/albums' className="moder_photos_btn">VIEW ALL ALBUMS </Link>
      </div>

    </div>
  );
};

export default Modernphotos;
