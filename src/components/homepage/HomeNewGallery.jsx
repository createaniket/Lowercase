import { useMemo, useState } from "react";
import "./HomeGallery.css";
import { useEffect } from "react";
import axios from "axios";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [hovered, setHovered] = useState(null);

  const hoveredRow = hovered !== null ? Math.floor(hovered / 5) : null;
  const hoveredCol = hovered !== null ? hovered % 5 : null;

  // ✅ only hovered row columns resize
  const hoveredCols = useMemo(() => {
    const base = ["1fr", "1fr", "1fr", "1fr", "1fr"];
    if (hoveredCol === null) return base;

    base[hoveredCol] = "2.6fr";
    return base;
  }, [hoveredCol]);

  // split into rows
  const rows = [images.slice(0, 5), images.slice(5, 10), images.slice(10, 15)];

  const BaseUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const FetchAlbumById = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/album/get/69921b8ce8656d3c3e221653`
        );
  
        // console.log("the response of the albums", response.data.data);
  
        const photos = response.data?.data?.photos || [];
  
        // Allowed extensions
        const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  
        // Filter only valid images
        const filteredImages = photos.filter((photo) =>
          validExtensions.some((ext) =>
            photo.url?.toLowerCase().endsWith(ext)
          )
        );
  
        setImages(filteredImages);
  
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
  
    FetchAlbumById();
  }, [BaseUrl]);
  

  return (
    <div className="galleryWrapper">
      <div className={`galleryStack ${hovered !== null ? "hasHover" : ""}`}>
        {rows.map((rowImgs, rowIndex) => {
          const isActiveRow = hoveredRow === rowIndex;

          return (
            <div
              key={rowIndex}
              className="galleryRow"
              style={{
                "--c1": isActiveRow ? hoveredCols[0] : "1fr",
                "--c2": isActiveRow ? hoveredCols[1] : "1fr",
                "--c3": isActiveRow ? hoveredCols[2] : "1fr",
                "--c4": isActiveRow ? hoveredCols[3] : "1fr",
                "--c5": isActiveRow ? hoveredCols[4] : "1fr",
              }}
            >
              {rowImgs.map((img, colIndex) => {
                const globalIndex = rowIndex * 5 + colIndex;
                const isHovered = hovered === globalIndex;

                // ✅ row position class for top/mid/bottom expand direction
                const rowPosClass =
                  rowIndex === 0
                    ? "rowTop"
                    : rowIndex === 2
                    ? "rowBottom"
                    : "rowMid";

                return (
                  <div
                    key={img.id}
                    className={`tile ${rowPosClass} ${
                      isHovered ? "hovered" : ""
                    } ${hovered !== null && !isHovered ? "dimmed" : ""}`}
                    onMouseEnter={() => setHovered(globalIndex)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={img.url} alt="" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
