import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Asd from "./components/Asd.jsx";
import styles from "./Section4.module.css";
import MyCenterBg from "./components/CenterBg";

function Section4() {
  const [slideIndex, setSlideIndex] = useState(2);

  return (
    <section className={styles.section4}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <h1>입양 후기</h1>
          <a href="#">
            <Button text={"더보기"} />
          </a>
        </div>
        <div className={styles.sliderWrapper}>
          <Asd setSlideIndex={setSlideIndex} className={styles.Asd} />
        </div>
        <div>
          <MyCenterBg slideIndex={slideIndex} className={styles.centerbg} />
        </div>
      </div>
    </section>
  );
}

export default Section4;
