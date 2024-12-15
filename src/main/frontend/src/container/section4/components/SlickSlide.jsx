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
import { Link } from "react-router-dom";

function SlickSlide() {
  const slides = [
    { id: 1, img: img4_1, title: '우리 집에 온 토리, 첫 인사', nickname: '글쓴이 : alice123', content: '토리를 입양한 후 첫날부터 반가워하며 다가와줬어요. 아주 기분 좋은 시작이었고, 이제는 집 안을 뛰어다니며 에너지를 발산하고 있어요!' , link:'/adoption-review/post/2039cfe3-aeb4-4d11-8e46-68061150667c'},
    { id: 2, img: img4_2, title: '입양 후 첫날, 정말 행복해요', nickname: '글쓴이 : mike987', content: '너무 사랑스러워서 매일매일 행복합니다. 입양을 망설이지 말고, 사랑을 주면 그만큼 돌아옵니다.', link:'/adoption-review/post/4f641944-3455-44c6-83eb-13c306073796' },
    { id: 3, img: img4_3, title: '페페의 사랑스러운 모습', nickname: '글쓴이 : steve1980', content: '처음엔 많이 겁을 먹었지만, 이제는 내 품에서 자고, 옆에서 같이 시간을 보내요. 정말 소중한 가족이 되었어요.' , link:'/adoption-review/post/9dc6f215-28e7-4212-9a76-5f1fa6f9ad2d'},
    { id: 4, img: img4_4, title: '미르의 첫날', nickname: '글쓴이 : sophia876', content: '미르가 집에 오고 나서 적응하기까지 시간이 걸렸지만, 이제는 정말 친근하게 다가와요!!', link:'/adoption-review/post/7200f7f2-18c2-4071-931f-be7bda31ce05' },
    { id: 5, img: img4_5, title: '새로운 가족이 잘 지내고 있어요!', nickname: '글쓴이 : steve1980', content: '이제 집에 적응해서 잘 지내고 있어요. 처음엔 낯설어했지만, 이제는 사람들과 함께 자고, 잘 먹고 잘 놀아요. 너무 행복합니다.', link:'/adoption-review/post/7993d9dd-2718-4ef4-bfec-2bee84885381' },
    { id: 6, img: img4_6, title: '우리집 막내 입양 후 첫날 이야기', nickname: '글쓴이 : mike23', content: '처음에는 조금 낯설어했지만, 이제는 우리 집에서 편안하게 지내고 있어요.\n너무 사랑스러워요.', link:'/adoption-review/post/0ab97bf5-b85b-4ed5-bddc-43565eb790a9' },
    { id: 7, img: img4_7, title: '구름이의 첫날', nickname: '글쓴이 : mike23', content: '처음에는 조금 낯설어했지만, 이제는 집안 곳곳을 돌아다니며 나랑 함께 놀자고 해요.', link:'/adoption-review/post/0bea6e68-30ea-4b6a-bd07-155e05a90f95' },
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
    autoplay: true,  // 슬라이드가 자동으로 이동하지 않도록 설정
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
      <div className={styles.slidewrap} style={{zIndex:1}}>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, i) => (
            <div key={i}>
              <Link to={slide.link} style={{display:"inline-block",zIndex:'2'}}>
                <div className={styles.slide}>
                  <img src={slide.img} alt={`슬라이드 ${slide.id}`} />
                </div>
              </Link>
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
        {/* 엣지인 경우 styles.edge 추가 */}
       <div className={`${styles.textContent} ${isEdge ? styles.edge : ""}`}>
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
