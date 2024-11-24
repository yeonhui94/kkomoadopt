import React, { useState, useEffect } from "react";
import styles from "./Section3333.module.css";

const SectionBox = ({ images, boxWidth, boxHeight }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 이미지 인덱스 상태

  // 이미지 전환 (3초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 3초마다 인덱스를 증가시켜 이미지 변경
    }, 3000); // 3초 간격

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 해제
  }, [images.length]); // images 배열의 길이가 변경되면 effect 재실행

  return (
    <div
      className={styles.boxWrap}
      style={{
        width: boxWidth, // 전달받은 width 적용
        height: boxHeight, // 전달받은 height 적용
        overflow: "hidden", // 이미지가 넘치지 않도록
      }}
    >
      <div
        className={styles.boxImgsContainer}
        style={{
          transform: `translateX(-${currentIndex * parseInt(boxWidth)}px)`, // 슬라이드 효과 적용
          transition: "transform 0.5s ease-in-out", // 부드러운 애니메이션
        }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.boxImg}>
            <img
              src={image}
              alt={`img-${index}`}
              style={{
                width: "100%", // 이미지의 width를 100%로 설정
                height: "100%", // 이미지의 height를 100%로 설정
                objectFit: "cover", // 비율을 유지하면서 이미지가 박스 크기에 맞게 잘리도록
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionBox;
