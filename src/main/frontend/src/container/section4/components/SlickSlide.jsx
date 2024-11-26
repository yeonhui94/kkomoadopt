import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SlickSlide.module.css';
import img1 from './slideImg/1.png';
import img2 from './slideImg/2.png';
import img3 from './slideImg/3.png';
import img4 from './slideImg/4.png';
import img5 from './slideImg/5.png';
import img6 from './slideImg/6.jpg';
import img7 from './slideImg/7.png';
import { motion } from 'framer-motion'; 
import ControlButton from "./ControlButton"; 

function SlickSlide() {
  const slides = [
    { id: 1, img: img1, title: '첫 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 첫 번째 입양 후기입니다.' },
    { id: 2, img: img2, title: '두 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 두 번째 입양 후기입니다.' },
    { id: 3, img: img3, title: '세 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 세 번째 입양 후기입니다.' },
    { id: 4, img: img4, title: '네 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 네 번째 입양 후기입니다.' },
    { id: 5, img: img5, title: '다섯 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 다섯 번째 입양 후기입니다.' },
    { id: 6, img: img6, title: '여섯 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 여섯 번째 입양 후기입니다.' },
    { id: 7, img: img7, title: '일곱 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 일곱 번째 입양 후기입니다.' },
  ];

  const [slideIndex, setSlideIndexState] = useState(0);
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 태블릿에서는 3개의 슬라이드가 보이도록 설정
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 모바일에서는 1개의 슬라이드가 보이도록 설정
        },
      },
    ],
  };

  // 다음 슬라이드로 이동
  const next = () => {
    sliderRef.current.slickNext();
    setSlideIndexState((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // 이전 슬라이드로 이동
  const previous = () => {
    sliderRef.current.slickPrev();
    setSlideIndexState((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 30000); 
    return () => clearInterval(intervalId); 
  }, [slideIndex]);

  return (
    <div className={styles.slider}>
      <div className={styles.slidewrap}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, i) => (
            <div key={i}>
              <a href="#">
                <div className={styles.slide}>
                  <img src={slide.img} alt={`슬라이드 ${slide.id}`} />
                </div>
              </a>
            </div>
          ))}
        </Slider>
        <div className={styles.controls}>
          <ControlButton direction="prev" onClick={previous} className={styles.ControlButton} />
          <ControlButton direction="next" onClick={next} className={styles.ControlButton} />
        </div>
      </div>
      {/* 슬라이드 타이틀 및 내용 애니메이션 */}
      <div className={styles.textContent}>
        <motion.div
          key={slideIndex}
          className={styles.titleAndninckname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <h2>{slides[slideIndex].title}</h2>
          <p>{slides[slideIndex].nickname}</p>
        </motion.div>

        <motion.div
          key={`content-${slideIndex}`}
          className={styles.contents}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <p>{slides[slideIndex].content}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default SlickSlide;