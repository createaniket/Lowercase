import React from "react";
import "./magnetic.css";

import img1 from "../assests/Artists/Artist-one.jpg";
import img2 from "../assests/Artists/Artist-Two.jpg"; //Drake
import img3 from "../assests/Artists/Artist-Three.jpg";
import img4 from "../assests/Artists/Artist-Four.jpg";
import img5 from "../assests/Artists/Artist-Five.jpg"; // Aboogie with a hoodie

const items = [
  { id: 1, img: img1, Title: "⁠⁠PARTYNEXTDOOR" },
  { id: 2, img: img2, Title: "⁠⁠DRAKE" },
  { id: 3, img: img3, Title: "⁠⁠KEHLANI" },
  { id: 4, img: img4, Title: "⁠⁠GUNNA" },
  { id: 5, img: img5, Title: "A BOOGIE wit da hoodie" },
];

export default function MagneticCards() {
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

  return (
    <div className="page">
      <div className="glow" />
      <div className="fade-left" />
      <div className="fade-right" />

      <div className="row">
        {items.map((item) => (
          <div
            key={item.id}
            className="card"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <img src={item.img} alt="card" />
            <p className="artist_name"> {item.Title} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
