import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import axios from "axios";
import "./PhotoWall.css";

gsap.registerPlugin(Draggable);

export default function PhotoWall() {
  const wallRef = useRef(null);
  const rotationRef = useRef(0);
  const autoRotationRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const draggableRef = useRef(null);
  const startXRef = useRef(0);
  const dragStartRotationRef = useRef(0);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const FetchAlbumById = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/api/album/get/6733c1b1df07ccf2838503d7`
        );
        setImageList(response.data?.data.photos || []);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    FetchAlbumById();
  }, [BaseUrl]);

  // Layout settings
  const rows = 4; // reduce to 3 if needed
  const cols = 24; // reduce to 18 if needed
  const radius = 500;

  const columnGapDeg = 360 / cols;
  const rowGapPx = 120;
  const minAngleJitter = 1;
  const minYPxJitter = 15;
  const minHeight = 80;
  const maxHeight = 110;

  // Generate grid only when images are available
  const grid = useMemo(() => {
    if (!imageList || imageList.length === 0) return [];

    const gridArray = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const baseAngle = columnGapDeg * c;
        const angle = baseAngle + (Math.random() - 0.5) * minAngleJitter;
        const yPos =
          (r - rows / 2) * rowGapPx + (Math.random() - 0.5) * minYPxJitter;
        const height = minHeight + Math.random() * (maxHeight - minHeight);

        const imgSrc = imageList[(r * cols + c) % imageList.length]?.url;
        gridArray.push({ src: imgSrc, angle, yPos, height });
      }
    }

    return gridArray;
    // eslint-disable-next-line
  }, [imageList]);

  // GSAP and Draggable Setup
  useEffect(() => {
    if (!grid.length) return;

    const wall = wallRef.current;
    if (!wall) return;

    const createAutoRotate = () => {
      if (autoRotationRef.current) autoRotationRef.current.kill();
      autoRotationRef.current = gsap.to(wall, {
        rotationY: "+=360",
        duration: 120,
        repeat: -1,
        ease: "none",
      });
    };

    const stopAutoRotate = () => {
      if (autoRotationRef.current) {
        autoRotationRef.current.kill();
        autoRotationRef.current = null;
      }
    };

    createAutoRotate();

    const created = Draggable.create(thumbRef.current, {
      type: "x",
      bounds: trackRef.current,
      inertia: true,
      onPress: () => {
        stopAutoRotate();
      },
      onDrag: function () {
        const trackWidth =
          trackRef.current.offsetWidth - this.target.offsetWidth;
        const progress = this.x / trackWidth;
        const rotation = progress * 360;
        gsap.set(wall, { rotationY: rotation });
        rotationRef.current = rotation;
      },
      onRelease: () => {
        if (!selectedImage) createAutoRotate();
      },
    });
    draggableRef.current = created && created[0];

    const DEGREES_PER_PIXEL = 0.4;

    const onPointerDown = (e) => {
      if (selectedImage) return;
      e.preventDefault && e.preventDefault();

      stopAutoRotate();

      startXRef.current =
        e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;

      const currentRotation =
        Number(gsap.getProperty(wall, "rotationY")) ||
        rotationRef.current ||
        0;
      dragStartRotationRef.current = currentRotation;

      document.addEventListener("pointermove", onPointerMove, {
        passive: false,
      });
      document.addEventListener("pointerup", onPointerUp);
    };

    const onPointerMove = (e) => {
      e.preventDefault && e.preventDefault();
      const clientX =
        e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
      const delta = clientX - startXRef.current;
      const newRotation =
        dragStartRotationRef.current + delta * DEGREES_PER_PIXEL;

      gsap.set(wall, { rotationY: newRotation });

      const trackWidth =
        trackRef.current.offsetWidth - thumbRef.current.offsetWidth;
      const progress = (((newRotation % 360) + 360) % 360) / 360;
      gsap.set(thumbRef.current, { x: progress * trackWidth });
    };

    const onPointerUp = () => {
      const finalRotation =
        Number(gsap.getProperty(wall, "rotationY")) ||
        rotationRef.current ||
        0;
      rotationRef.current = finalRotation;

      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);

      if (!selectedImage) {
        createAutoRotate();
      }
    };

    wall.addEventListener("pointerdown", onPointerDown);

    return () => {
      wall.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      if (draggableRef.current) {
        draggableRef.current.kill();
        draggableRef.current = null;
      }
      stopAutoRotate();
    };
  }, [grid, selectedImage]);

  const handleImageClick = (src, e) => {
    e.stopPropagation();
    setSelectedImage(src);
    if (autoRotationRef.current) {
      autoRotationRef.current.kill();
      autoRotationRef.current = null;
    }
  };

  const handleOutsideClick = () => {
    setSelectedImage(null);
    const wall = wallRef.current;
    if (wall && !autoRotationRef.current) {
      autoRotationRef.current = gsap.to(wall, {
        rotationY: "+=360",
        duration: 120,
        repeat: -1,
        ease: "none",
      });
    }
  };

  if (isLoading) {
    return <div className="loading">Loading photos...</div>;
  }

  return (
    <div className="wall-wrapper" onClick={handleOutsideClick}>
      <div className="cylinder-blur-mask"></div>

      <div className="cylinder" ref={wallRef}>
        {grid.map((img, i) => (
          <img
            key={`${i}-${img.src}`}
            src={img.src}
            alt={`img-${i}`}
            loading="lazy"
            onClick={(e) => handleImageClick(img.src, e)}
            style={{
              transform: `rotateY(${img.angle}deg) translateZ(${radius}px) translateY(${img.yPos}px)`,
              height: `${img.height}px`,
            }}
          />
        ))}
      </div>

      {/* Optional slider UI */}
      <div className="track" ref={trackRef}>
        <div className="thumb" ref={thumbRef}></div>
      </div>

      {selectedImage && (
        <>
          <div className="blur-overlay"></div>
          <div className="enlarged-image">
            <img src={selectedImage} alt="Selected" />
          </div>
        </>
      )}
    </div>
  );
}
