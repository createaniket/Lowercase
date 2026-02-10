import React from "react";
import "./Modernphotos.css";

import { Link } from "react-router-dom";

const Modernphotos = () => {


  return (
    <div className="modern_photo_parent_section">
      <div className="moodern_photos_text_sect">
        <button className="moder_photos_heading"> Albums </button>

        <Link to='/albums' className="moder_photos_btn">VIEW ALL ALBUMS </Link>
      </div>

    </div>
  );
};

export default Modernphotos;
