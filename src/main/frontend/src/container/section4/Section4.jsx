import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import styles from "./Section4.module.css";
import MyCenterBg from "./components/CenterBg";
import SlickSlide from "./components/SlickSlide";
import { Link } from "react-router-dom";

function Section4() {
  const [isEdge, setIsEdge] = useState(false);

  // 엣지 브라우저 감지
  useEffect(() => {
    const userAgent = navigator.userAgent;

    // "Edg"로 시작하는 부분을 찾아 엣지 브라우저인지 확인
    if (userAgent.indexOf("Edg") > -1) {
      setIsEdge(true);
    }
  }, []);

  return (
    <section className={`${styles.section4} ${isEdge ? styles.edge : ""}`}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h1>입양 후기</h1>
          <Link to='community/adoption-review'>
            <Button text={"더보기"} />
          </Link>
        </div>
        <div className={`${styles.sliderWrapper} ${isEdge ? styles.edgeSlider : ""}`}>
          <SlickSlide />
        </div>
        <div className={styles.centerWrap}>
          <MyCenterBg />
        </div>
      </div>
    </section>
  );
}

export default Section4;
