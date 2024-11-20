import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Section1.module.css";
import gratingimg from "./section1_IMG/Line45.png";
import mainPageImage from './section1_IMG/mainpage.png'; 
import happyDogImg from './section1_IMG/happyDog.png';

function Section1() {
  const [mainBg, setMainBg] = useState("rgba(0, 0, 0, 0)");
  const [gratingImagesVisible, setGratingImagesVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [text2Visible, setText2Visible] = useState(false);
  const [text3Visible, setText3Visible] = useState(false); 
  const [scrollCount, setScrollCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [bgImage, setBgImage] = useState(mainPageImage); 

  const handleScroll = (event) => {
    if (isScrolling) return; 

    setIsScrolling(true); 

    let newScrollCount = scrollCount;

    if (event.deltaY > 0) {
      // 스크롤 내릴 때
      if (newScrollCount === 0) {
        setMainBg("rgba(0, 0, 0, 0.5)");
        setBgImage(mainPageImage); 
        newScrollCount = 1;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 1) {
        setGratingImagesVisible(true);
        newScrollCount = 2;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 2) {
        setTextVisible(true);
        newScrollCount = 3;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 3) {
        setTextVisible(false);
        setText2Visible(true);
        newScrollCount = 4;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 4) {
        setGratingImagesVisible(false);
        setMainBg("rgba(0, 0, 0, 0)");
        setText2Visible(false);
        setText3Visible(true); 
        setBgImage(happyDogImg); 
        newScrollCount = 5;
        window.scrollTo({ behavior: "smooth" });
      }
    } else {
      // 스크롤 올릴 때 (역순으로 처리)
      if (newScrollCount === 5) {
        setText3Visible(false);
        setBgImage(mainPageImage); 
        setGratingImagesVisible(true); 
        setMainBg("rgba(0, 0, 0, 0.5)"); 
        setText2Visible(true); 
        newScrollCount = 4;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 4) {
        setText2Visible(false); 
        setTextVisible(true);
        setGratingImagesVisible(true); 
        newScrollCount = 3;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 3) {
        setGratingImagesVisible(false); 
        setTextVisible(false); 
        setMainBg("rgba(0, 0, 0, 0.5)"); 
        newScrollCount = 2;
        window.scrollTo({  behavior: "smooth" });
      } else if (newScrollCount === 2) {
        setMainBg("rgba(0, 0, 0, 0)"); 
        newScrollCount = 1;
        window.scrollTo({ behavior: "smooth" });
      } else if (newScrollCount === 1){
        setMainBg("rgba(0, 0, 0, 0)"); 
        newScrollCount = 0;
        window.scrollTo({ behavior: "smooth" });
      }
    }

    setTimeout(() => {
      setIsScrolling(false); 
    }, 500); 
    setScrollCount(newScrollCount);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollCount, isScrolling]);

  return (
    <motion.section
      className={styles.main}
      style={{ backgroundColor: mainBg }} 
      animate={{ backgroundColor: mainBg }}  // 배경 색을 애니메이션화
      transition={{ duration: 1 }}  // 부드러운 전환
    >
      <div
        className={styles.retriever}
        style={{
          backgroundImage: `url(${bgImage})`, 
        }}
      >
        <motion.div
          className={styles.overlay}
          style={{ backgroundColor: mainBg }}
          animate={{ backgroundColor: mainBg }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            // 애니메이션이 끝난 후에 상태 변경이 필요할 경우
            if (mainBg === "rgba(0, 0, 0, 0.5)") {
              // 배경색이 rgba(0, 0, 0, 0.5)일 때 스크롤 상태 리셋
              setIsScrolling(false); 
            }
          }}
        >
          <div className={styles.grating}>
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.img
                key={index}
                src={gratingimg}
                alt="grating"
                className={styles.gratingImage}
                initial={{ opacity: 0, y: -1000 }}
                animate={{
                  opacity: gratingImagesVisible ? 1 : 0,
                  y: gratingImagesVisible ? 0 : -1000,
                }}
                transition={{
                  opacity: { duration: 1, ease: "easeInOut" },
                  y: { duration: 1, ease: "easeInOut" },
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
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

      <motion.div
        className={styles.scrollText}
        animate={{
          y: ["0px", "-10px", "0px"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
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
