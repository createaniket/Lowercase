import React from "react";
import "./BrandCreator.css";
import { Link } from "react-router-dom";

const items = [
  { text: "ARE YOU A CREATOR ?", link: "/ugc" },
  { text: "GET IN TOUCH" },
  { text: "ARE YOU A CREATOR ?", link: "/ugc" },
  { text: "GET IN TOUCH" },
];

const BrandCreator = () => {
  return (
    <div className="strip-wrapper">
      <div className="scroll-container">
        <div className="scroll-content">
          
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {item.link ? (
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.text}
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
              <span className="dot">|</span>
            </React.Fragment>
          ))}

          {/* 🔁 Duplicate for infinite loop */}
          {items.map((item, i) => (
            <React.Fragment key={`dup-${i}`}>
              {item.link ? (
                <Link
                  to={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.text}
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
              <span className="dot">|</span>
            </React.Fragment>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BrandCreator;
