import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArtistsCard.css";

import img1 from "../../assests/Artists/Artist-one.jpg";
import img2 from "../../assests/Artists/Artist-Two.jpg"; // Drake
import img3 from "../../assests/Artists/Artist-Three.jpg";
import img4 from "../../assests/Artists/Artist-Four.jpg";
import img5 from "../../assests/Artists/Artist-Five.jpg"; // A Boogie
import img6 from "../../assests/Artists/Don_Toliver/DON1.jpg";

const items = [
  { id: "partynextdoor", img: img1, Title: "PARTYNEXTDOOR" },
  { id: "drake", img: img2, Title: "DRAKE" },
  { id: "kehlani", img: img3, Title: "KEHLANI" },
  { id: "gunna", img: img4, Title: "GUNNA" },
  { id: "a-boogie", img: img5, Title: "A BOOGIE" },
  { id: "don-toliver", img: img6, Title: "DON TOLIVER" },
];

const ArtistsCard = () => {
  const navigate = useNavigate();

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    const moveX = x * 35;
    const moveY = y * 35;

    card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    card.style.zIndex = 50;
  };

  const handleLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `translate(0px, 0px) scale(1)`;
    card.style.zIndex = 1;
  };

  // 👉 Navigate on click
  const handleClick = (id) => {
    navigate(`/artist/${id}`);
  };

  return (
    <div className="artist_page_main_container">
      <div className="glow" />
      <div className="fade-left" />
      <div className="fade-right" />

      <div className="artist_cards_container">
        {items.map((item) => (
          <div
            key={item.id}
            className="artists_card_main"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(item.id)}   // ✅ CLICK
            style={{ cursor: "pointer" }}
          >
            <img src={item.img} alt={item.Title} />
            <p className="artist_name">{item.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsCard;
