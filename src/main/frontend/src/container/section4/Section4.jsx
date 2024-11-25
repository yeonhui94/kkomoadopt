import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import styles from "./Section4.module.css";
import MyCenterBg from "./components/CenterBg";
import SlickSlide from "./components/SlickSlide";

function Section4() {

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
          <SlickSlide className={styles.SlickSlide} />
        </div>
        <div className={styles.centerWrap}>
          <MyCenterBg  className={styles.centerbg} />
        </div>
      </div>
    </section>
  );
}

export default Section4;
