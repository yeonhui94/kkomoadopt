import React, { useState, useEffect } from "react";
import MainHeader from '../../container/mainheader3/MainHeader';
import Section1 from "../../container/section1and2/Section1";
import Section3333 from "../../container/section3/Section3333";
import Section4 from "../../container/section4/Section4";
import Section5 from "../../container/section5/Section5";
import Footer from "../../container/footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./MainPage.module.css";

function MainPage() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAnimatingComplete, setIsAnimatingComplete] = useState(false);
  const [isFooter, setIsFooter] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionVariants = {
    enter: (direction) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: (direction) => ({
      y: direction < 0 ? "100%" : "0%",
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  const handleButtonClick = () => {
    if (currentSection >= 3) {
      setCurrentSection(1);
      setIsAnimatingComplete(true);
      setIsFooter(false);
      setIsScrolled(false);
    } else if (currentSection === 1) {
      setCurrentSection(2);
      setIsAnimatingComplete(true);
      setIsScrolled(false);
    } else if (currentSection === 2) {
      setCurrentSection(1);
      setIsAnimatingComplete(true);
      setIsScrolled(false);
    }
  };

  // const handleWheel = (e) => {
  //   if (isScrolling || !isAnimatingComplete) return;

  //   setIsScrolling(true);
  //   const direction = e.deltaY > 0 ? 1 : -1;

  //   if (direction > 0) {
  //     if (currentSection === 4) {
  //       setIsFooter(true);
  //     } else if (currentSection < 5) {
  //       setCurrentSection(currentSection + 1);
  //     }
  //   } else if (direction < 0) {
  //     if (currentSection === 4) {
  //       setIsFooter(false);
  //     }
  //     if (!isFooter) {
  //       setCurrentSection(currentSection - 1);
  //     }
  //   }

  //   setTimeout(() => {
  //     setIsScrolling(false);
  //   }, 1000);
  // };

  const handleWheel = (e) => {
    if (isScrolling || !isAnimatingComplete) return;

    setIsScrolling(true);
    const direction = e.deltaY > 0 ? 1 : -1;

    if (direction > 0) {
      if (currentSection === 4) {
        setIsFooter(true);
      } else if (currentSection < 5) {
        setCurrentSection(currentSection + 1);
      }
    } else if (direction < 0) {
      if (currentSection === 4) {
        setIsFooter(false);
      }
      if (!isFooter && currentSection > 1) {  
        setCurrentSection(currentSection - 1);
      }
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
};

  const handleSection1AnimationComplete = () => {
    // setIsAnimatingComplete(true);
    setTimeout(()=> {
      setIsAnimatingComplete(true);
    }, 1500);
  };

  const resetSection1State = () => {
    setIsAnimatingComplete(false);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling, isAnimatingComplete]);

  useEffect(() => {
    console.log('Current Section:', currentSection);
  }, [currentSection]);

  return (
    <div className={styles.mainContainer}>
      <MainHeader
        isScrolled={isScrolled}
        setIsScrolled={setIsScrolled}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setIsAnimatingComplete={setIsAnimatingComplete}
        isFooter={isFooter}
        setIsFooter={setIsFooter}
        isAnimatingComplete={isAnimatingComplete}
        />
      <div className={styles.sections}>
        <AnimatePresence custom={isScrolling}>
          {currentSection === 1 && (
            <motion.div
              key="section1"
              custom={1}
              variants={sectionVariants}
              animate="center"
              exit="exit"
              className={styles.section1}
            >
              <Section1
                onScrollChange={setIsScrolled}
                onAnimationComplete={handleSection1AnimationComplete}
                resetState={resetSection1State}
                setIsAnimatingComplete={setIsAnimatingComplete}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence custom={isScrolling}>
          {currentSection === 2 && (
            <motion.div
              key="section2"
              custom={1}
              variants={sectionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.section2}
            >
              <Section3333 />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence custom={isScrolling}>
          {currentSection === 3 && (
            <motion.div
              key="section3"
              custom={1}
              variants={sectionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.section3}
            >
              <Section4 />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence custom={isScrolling}>
          {currentSection === 4 && (
            <motion.div
              key="section4"
              custom={1}
              variants={sectionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.section4}
            >
              <Section5 />
              <AnimatePresence custom={isScrolling}>
              <motion.div
                className={styles.footerWrapper}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isFooter ? 1 : 0, y: isFooter ? 0 : 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  opacity: { duration: 0.5, ease: "easeInOut" },
                  y: { duration: 0.5, ease: "easeInOut" },
                }}
                style={{ display: isFooter ? 'block' : 'none' }}
              >
                <div className={styles.fter}>
                  <Footer />
                </div>
              </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <button className={styles.fixedButton} onClick={handleButtonClick}>
        {currentSection === 1 ? "↓" : currentSection >= 2 ? "↑" : "↑"}
      </button>
    </div>
  );
}

export default MainPage;