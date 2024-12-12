import React, { useState, useRef,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SlickSlide.module.css';
import img4_1 from './slideImg/1.png';
import img4_2 from './slideImg/2.png';
import img4_3 from './slideImg/3.png';
import img4_4 from './slideImg/4.png';
import img4_5 from './slideImg/5.png';
import img4_6 from './slideImg/6.png';
import img4_7 from './slideImg/7.png';
import { motion, AnimatePresence } from 'framer-motion';
import ControlButton from "./ControlButton";

function SlickSlide() {
  const slides = [
    { id: 1, img: img4_1, title: '첫 번째 입양 후기', nickname: '글쓴이', content: '이것은 첫 번째 입양 후기입니다.' },
    { id: 2, img: img4_2, title: '두 번째 입양 후기', nickname: '글쓴이', content: '이것은 두 번째 입양 후기입니다.' },
    { id: 3, img: img4_3, title: '세 번째 입양 후기', nickname: '글쓴이', content: '이것은 세 번째 입양 후기입니다.' },
    { id: 4, img: img4_4, title: '네 번째 입양 후기', nickname: '글쓴이', content: '이것은 네 번째 입양 후기입니다.' },
    { id: 5, img: img4_5, title: '다섯 번째 입양 후기', nickname: '글쓴이', content: '이것은 다섯 번째 입양 후기입니다.' },
    { id: 6, img: img4_6, title: '여섯 번째 입양 후기', nickname: '글쓴이', content: '이것은 여섯 번째 입양 후기입니다.' },
    { id: 7, img: img4_7, title: '일곱 번째 입양 후기', nickname: '글쓴이', content: '이것은 일곱 번째 입양 후기입니다.' },
  ];

  const [slideIndex, setSlideIndexState] = useState(0);
  const sliderRef = useRef(null);
  const [isEdge, setIsEdge] = useState(false); // Edge 감지 상태

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Edge") !== -1 || userAgent.indexOf("Edg/") !== -1) {
      setIsEdge(true); // 엣지 브라우저 감지
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,  // 슬라이드가 자동으로 이동하지 않도록 설정
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setSlideIndexState(next);  // 슬라이드가 변경될 때, 슬라이드 인덱스를 업데이트
    },
  };

  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slidewrap}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, i) => (
            <div key={i}>
              <a href="#" style={{display:"inline-block"}}>
                <div className={styles.slide}>
                  <img src={slide.img} alt={`슬라이드 ${slide.id}`} />
                </div>
              </a>
            </div>
          ))}
        </Slider>
        <div className={styles.controls}>
          <ControlButton
            direction="prev"
            onClick={goToPreviousSlide} // 이전 슬라이드로 이동
            className={styles.ControlButton}
          />
          <ControlButton
            direction="next"
            onClick={goToNextSlide} // 다음 슬라이드로 이동
            className={styles.ControlButton}
          />
        </div>
      </div>

       <div className={`${styles.textContent} ${isEdge ? styles.edge : ""}`}> {/* 엣지인 경우 styles.edge 추가 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            className={`${styles.titleAndninckname} ${isEdge ? styles.edge : ''}`} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h2 className={styles.slideTitle}>{slides[slideIndex].title}</h2>
            <p className={styles.slideNickname}>{slides[slideIndex].nickname}</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${slideIndex}`} // 각 콘텐츠에 고유한 key 부여
            className={styles.contents}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p>{slides[slideIndex].content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SlickSlide;
