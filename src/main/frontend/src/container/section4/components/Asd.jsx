import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Asd.module.css';

import img1 from './slideImg/1.png';
import img2 from './slideImg/2.png';
import img3 from './slideImg/3.png';
import img4 from './slideImg/4.png';
import img5 from './slideImg/5.png';
import img6 from './slideImg/6.jpg';
import img7 from './slideImg/7.png';
import ControlButton from './ControlButton';

function Asd({ setSlideIndex }) {
  const slides = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 }
  ];

  const [index, setIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(getSlideCount());
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  function getSlideCount() {
    if (window.innerWidth <= 768) {
      return 3;
    } else {
      return 5;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setSlideCount(getSlideCount());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    setAutoSlideInterval(interval);

    return () => clearInterval(interval);
  }, [setSlideIndex]);

  const goToNextSlide = () => {
    clearInterval(autoSlideInterval);
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    const newInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    setAutoSlideInterval(newInterval);
  };

  const goToPreviousSlide = () => {
    clearInterval(autoSlideInterval);
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    const newInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    setAutoSlideInterval(newInterval);
  };

  return (
    <div className={styles.slider}>
      <AnimatePresence>
        <motion.ul 
          className={styles.slideList} 
          // initial={{ x: '100%' }} 
          // animate={{ x: 0 }}
          // exit={{ x: '-100%' }} 
          // transition={{
          //   duration: 0.5, 
          //   ease: 'easeInOut', 
          // }}
        >
          {[...Array(slideCount)].map((_, i) => {
            const slideIndex = (index + i) % slides.length;
            const slideStyle = {
              width: `calc(100% / ${slideCount})`,
            };

            return (
              <motion.li
                key={i}
                className={styles.slide}
                style={slideStyle}
                initial={{ opacity: 0 }} // 슬라이드가 처음에는 보이지 않음
                animate={{ opacity: 1 }} // 슬라이드가 보이도록 애니메이션
                exit={{ opacity: 0 }} // 슬라이드가 나갈 때 투명해짐
                transition={{
                  duration: 0.5, // 애니메이션 지속시간
                  ease: 'easeInOut', // 부드러운 전환
                }}
              >
                <img src={slides[slideIndex].img} alt={`슬라이드 ${slideIndex + 1}`} />
              </motion.li>
            );
          })}
        </motion.ul>
      </AnimatePresence>
      <div className={styles.controls}>
        <ControlButton direction="prev" onClick={goToPreviousSlide} className={styles.ControlButton} />
        <ControlButton direction="next" onClick={goToNextSlide} className={styles.ControlButton} />
      </div>
    </div>
  );
}

export default Asd;
