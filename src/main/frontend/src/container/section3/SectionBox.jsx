import React, { useState, useEffect } from "react";
import styles from "./Section3333.module.css";

const SectionBox = ({ images, boxWidth, boxHeight, currentSlide, setCurrentSlide }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, setCurrentSlide]);

  return (
    <div
      className={styles.boxWrap}
      style={{
        width: boxWidth,
        height: boxHeight,
        overflow: "hidden",
      }}
    >
      <div
        className={styles.boxImgsContainer}
        style={{
          transform: `translateX(-${currentSlide * parseInt(boxWidth)}px)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.boxImg}>
            <img
              src={image}
              alt={`img-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionBox;
