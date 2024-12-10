import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Section1.module.css";
import gratingimg from "../../assets/section1_IMG/Line45.png";
import mainPageImage from '../../assets/section1_IMG/mainpage.png';
import happyDogImg from '../../assets/section1_IMG/happyDog.png';

function Section1({ onAnimationComplete, resetState, onScrollChange,setIsAnimatingComplete }) {
  const [mainBg, setMainBg] = useState("rgba(0, 0, 0, 0)"); // 배경 색상 초기화
  const [gratingImagesVisible, setGratingImagesVisible] = useState(false); // 격자 이미지 표시 상태
  const [textVisible, setTextVisible] = useState(false); // 첫 번째 텍스트 표시 여부
  const [text2Visible, setText2Visible] = useState(false); // 두 번째 텍스트 표시 여부
  const [text3Visible, setText3Visible] = useState(false); // 세 번째 텍스트 표시 여부
  const [scrollCount, setScrollCount] = useState(0); // 스크롤 상태 추적
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [bgImage, setBgImage] = useState(mainPageImage); // 배경 이미지 상태

  // 첫 번째 섹션으로 돌아올 때 상태 초기화
  useEffect(() => {
    resetState();
  }, []);

  const handleScroll = (event) => {
    if (isScrolling) return; // 스크롤 중일 때는 추가 스크롤 무시

    setIsScrolling(true); // 스크롤 시작 시 방지 상태 활성화
    let newScrollCount = scrollCount;

    if (event.deltaY > 0) {
      // 스크롤 내릴 때
      if (newScrollCount === 0) {
        setMainBg("rgba(0, 0, 0, 0.5)"); // 배경을 반투명 검정색으로 변경
        setBgImage(mainPageImage); // 기본 배경 이미지 설정
        newScrollCount = 1;
        onScrollChange(true);
      } else if (newScrollCount === 1) {
        setGratingImagesVisible(true); // 격자 이미지 표시
        newScrollCount = 2;
      } else if (newScrollCount === 2) {
        setTextVisible(true); // 첫 번째 텍스트 표시
        newScrollCount = 3;
      } else if (newScrollCount === 3) {
        setTextVisible(false); // 첫 번째 텍스트 숨기기
        setText2Visible(true); // 두 번째 텍스트 표시
        newScrollCount = 4;
      } else if (newScrollCount === 4) {
        setGratingImagesVisible(false); // 격자 이미지 숨기기
        setMainBg("rgba(0, 0, 0, 0)"); // 배경을 투명하게 설정
        setText2Visible(false); // 두 번째 텍스트 숨기기
        setText3Visible(true); // 세 번째 텍스트 표시
        setBgImage(happyDogImg); // 배경 이미지를 다른 이미지로 변경
        newScrollCount = 5;
        onAnimationComplete(); // 애니메이션 완료 후 호출
        onScrollChange(false);
        console.log(newScrollCount)
      }
    } else {
      // 스크롤 올릴 때 (역순으로 처리)
      if (newScrollCount === 5) {
        setText3Visible(false); // 세 번째 텍스트 숨기기
        setBgImage(mainPageImage); // 기본 배경 이미지로 돌아감
        setGratingImagesVisible(true); // 격자 이미지 다시 표시
        setMainBg("rgba(0, 0, 0, 0.5)"); // 배경을 반투명 검정색으로 변경
        setText2Visible(true); // 두 번째 텍스트 다시 표시
        newScrollCount = 4;
        onScrollChange(true);
      } else if (newScrollCount === 4) {
        setText2Visible(false); // 두 번째 텍스트 숨기기
        setTextVisible(true); // 첫 번째 텍스트 다시 표시
        setGratingImagesVisible(true); // 격자 이미지 다시 표시
        newScrollCount = 3;
      } else if (newScrollCount === 3) {
        setGratingImagesVisible(false); // 격자 이미지 숨기기
        setTextVisible(false); // 첫 번째 텍스트 숨기기
        setMainBg("rgba(0, 0, 0, 0.5)"); // 배경을 반투명 검정색으로 변경
        newScrollCount = 2;

      } else if (newScrollCount === 2) {
        setMainBg("rgba(0, 0, 0, 0)"); // 배경을 투명하게 설정
        newScrollCount = 1;
        onScrollChange(false);
        setGratingImagesVisible(false);
      } else if (newScrollCount === 1) {
        setMainBg("rgba(0, 0, 0, 0)"); // 배경을 투명하게 설정
        newScrollCount = 0;
        setGratingImagesVisible(false);
        setIsAnimatingComplete(false);
      }
    }

    setTimeout(() => {
      setIsScrolling(false); // 애니메이션이 끝난 후 스크롤 방지 상태 해제
    }, 1000);

    setScrollCount(newScrollCount); // 스크롤 상태 업데이트
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll); // 리스너 제거
    };
  }, [scrollCount, isScrolling]); // scrollCount나 isScrolling이 바뀔 때마다 실행

  return (
    <motion.section
      className={styles.main}
      style={{ backgroundColor: mainBg }} // 배경 색상에 스타일 적용
      animate={{ backgroundColor: mainBg }} // 배경 색상 애니메이션 적용
      transition={{ duration: 1 }} // 부드러운 전환 효과
    >
      <div
        className={styles.retriever}
        style={{
          backgroundImage: `url(${bgImage})`, // 배경 이미지 적용
        }}
      >
        <motion.div
          className={styles.overlay}
          style={{ backgroundColor: mainBg }} // 오버레이 색상 적용
          animate={{ backgroundColor: mainBg }} // 오버레이 배경 색상 애니메이션
          transition={{ duration: 1 }}
        >
          <div className={styles.grating}>
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.img
                key={index}
                src={gratingimg}
                alt="grating"
                className={styles.gratingImage}
                initial={{ opacity: 0, y: -1000 }} // 초기 상태에서 이미지 숨기기
                animate={{
                  opacity: gratingImagesVisible ? 1 : 0, // 격자 이미지 표시 여부
                  y: gratingImagesVisible ? 0 : -1000, // 격자 이미지 위치 조정
                }}
                transition={{
                  opacity: { duration: 1, ease: "easeInOut" },
                  y: { duration: 1, ease: "easeInOut" },
                  delay: index * 0.1, // 지연 효과
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* 첫 번째 텍스트 */}
      <AnimatePresence>
        {textVisible && (
          <motion.div
            className={styles.mainText1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>우리와 함께</h1>
            <h1>소중한 생명을 구해주세요.</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 두 번째 텍스트 */}
      <AnimatePresence>
        {text2Visible && (
          <motion.div
            className={styles.mainText2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>함께 힘을 모으면</h1>
            <h1>많은 생명을 구할 수 있습니다.</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 세 번째 텍스트 */}
      <AnimatePresence>
        {text3Visible && (
          <motion.div
            className={styles.mainText3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>kkomo센터는</h1>
            <h1>여러분을 기다립니다.</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 스크롤 텍스트 */}
      <motion.div
        className={styles.scrollText}
        animate={{
          y: ["0px", "-10px", "0px"], // 스크롤 텍스트 애니메이션
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity, // 반복 애니메이션
          repeatType: "loop",
        }}
      >
        <p>Scroll</p>
        <p>▽</p>
      </motion.div>
    </motion.section>
  );
}

export default Section1;
