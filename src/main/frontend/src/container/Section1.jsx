import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Section1.module.css";
import gratingimg from "./section1_IMG/Line45.png";


//header추가해야함
//header 추가 시 오퍼시티 0.5일떈 로고 및 헤더 컬러 변경

function Section1() {
  const [mainBg, setMainBg] = useState("rgba(0, 0, 0, 0)");
  const [gratingImagesVisible, setGratingImagesVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false); 
  const [text2Visible, setText2Visible] = useState(false); 
  const [scrollCount, setScrollCount] = useState(0); 
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 여부를 추적하는 상태 추가

  const handleScroll = (event) => {
    if (isScrolling) return; // 이미 스크롤 애니메이션이 실행 중이면 무시

    setIsScrolling(true); // 스크롤이 진행 중임을 표시

    let newScrollCount = scrollCount;
    
    if (event.deltaY > 0) {
      // 스크롤 내릴 때 (애니메이션이 나타남)
      if (newScrollCount === 0) {
        setMainBg("rgba(0, 0, 0, 0.5)");
        newScrollCount = 1;
        window.scrollTo({ top: 100, behavior: "smooth" });
      } else if (newScrollCount === 1) {
        setGratingImagesVisible(true);
        newScrollCount = 2;
        window.scrollTo({ top: 200, behavior: "smooth" });
      } else if (newScrollCount === 2) {
        setTextVisible(true);
        newScrollCount = 3;
        window.scrollTo({ top: 300, behavior: "smooth" });
      } else if (newScrollCount === 3) {
        setTextVisible(false);  // mainText1 사라짐
        setText2Visible(true);   // mainText2 등장
        newScrollCount = 4;
        window.scrollTo({ top: 400, behavior: "smooth" });
      }
    } else {
      // 스크롤 올릴 때 (애니메이션이 역순으로 사라짐)
      if (newScrollCount === 4) {
        setText2Visible(false);
        newScrollCount = 3;
        window.scrollTo({ top: 300, behavior: "smooth" });
      } else if (newScrollCount === 3) {
        setTextVisible(true);
        setGratingImagesVisible(true);  // grating 이미지가 다시 보이도록
        newScrollCount = 2;
        window.scrollTo({ top: 200, behavior: "smooth" });
      } else if (newScrollCount === 2) {
        setMainBg("rgba(0, 0, 0, 0.5)");
        newScrollCount = 1;
        window.scrollTo({ top: 100, behavior: "smooth" });
      } else {
        setMainBg("rgba(0, 0, 0, 0)");
        setGratingImagesVisible(false);
        setTextVisible(false); 
        setText2Visible(false); 
        newScrollCount = 0;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    // 상태 업데이트 후 지연 설정 (1초 후에 다시 스크롤을 처리할 수 있도록)
    setTimeout(() => {
      setIsScrolling(false); // 스크롤 애니메이션이 끝났음을 표시
    }, 500); // 지연 시간 1초로 설정
    setScrollCount(newScrollCount);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrollCount, isScrolling]); // `isScrolling` 상태가 바뀔 때마다 효과 실행

  return (
    <section className={styles.main} style={{ backgroundColor: mainBg }}>
      <div className={styles.retriever}>
        <motion.div
          className={styles.overlay}
          style={{ backgroundColor: mainBg }}
          animate={{ backgroundColor: mainBg }}  // motion으로 배경색을 애니메이션 처리
          transition={{ duration: 1 }}  // 1초 동안 배경색이 천천히 변하도록 설정
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

      <motion.div
        className={styles.mainText1}
        initial={{ opacity: 0 }}
        animate={{ opacity: textVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>우리와 함께</h1>
        <h1>소중한 생명을 구해주세요.</h1>
      </motion.div>

      <motion.div
        className={styles.mainText2}
        initial={{ opacity: 0 }}
        animate={{ opacity: text2Visible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>함께 힘을 모으면</h1>
        <h1>많은 생명을 구할 수 있습니다.</h1>
      </motion.div>

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
    </section>
  );
}

export default Section1;
