  import React, { useEffect, useState } from 'react';
  import { useLocation } from 'react-router-dom';  // useLocation 훅을 import
  import Logo from '../../components/logo/Logo';
  import Mypageicon2 from './header3/MyPageIcon2';
  import Button from '../../components/Button/Button';
  import HeaderList from './header3/HeaderList';
  import styles from './/header3/MainHeader.module.css';
  import { AnimatePresence, motion } from 'framer-motion';
  import { Link } from 'react-router-dom';

  const MainHeader = ({ isScrolled, currentSection, setCurrentSection, setIsAnimatingComplete, setIsScrolled,isFooter,setIsFooter}) => {
    const [clickedItem, setClickedItem] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 상태
    const location = useLocation(); // 현재 경로 가져오기

    const handleItemClick = (itemName) => {
      setClickedItem(itemName);
    };
    const handleLogoClick = () => {
      setCurrentSection(2);
      setIsAnimatingComplete(true);
      setIsMenuOpen(false);
      setIsScrolled(false);
      // setIsFooter(false);
      // console.log(isFooter)
    };

    useEffect(() => {
      if (currentSection === 2) {
        setIsFooter(false);
      }
    }, [currentSection]);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // 현재 경로가 '/'인 경우 absolute, 아니면 relative로 설정
    const headerPosition = location.pathname === '/' ? 'absolute' : 'relative';

    return (
      <div className={`${styles.headerGroup} ${isMenuOpen ? styles['menu-open'] : ''}`}>
        <div
          className={styles.header}
          style={{ position: headerPosition }} // 조건부로 포지션 설정
        >
          <Link className={styles.logo} to="#" onClick={handleLogoClick }>
            <Logo isScrolled={isScrolled} />
          </Link>
          <div className={styles.headerList1}>
            <HeaderList onItemClick={handleItemClick} isScrolled={isScrolled} />
          </div>
          <div className={styles.menuFooter1}>
            <Mypageicon2 style={{ display: 'flex' }} />
            <Link className={styles.btn} to="/login">
              <Button text="로그아웃" padding="12px 20px" />
            </Link>
          </div>

          {/* 모바일 화면에서만 보이는 햄버거 메뉴 */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <motion.div
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
              className={styles.lineTop}
              style={{ backgroundColor: isScrolled ? 'white' : 'black' }}
            />
            <motion.div
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className={styles.lineMiddle}
              style={{ backgroundColor: isScrolled ? 'white' : 'black' }}
            />
            <motion.div
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
              className={styles.lineBottom}
              style={{ backgroundColor: isScrolled ? 'white' : 'black' }}
            />
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ y: '0', x: '0', height: '0' }}
              animate={{
                y: isMenuOpen ? '0' : '-100%',
                x: '0',
                height: isMenuOpen ? 'calc(100vh - 105px)' : '0',
                backgroundColor: isMenuOpen ? 'white' : 'transparent',
              }}
              exit={{
                opacity: 0.9,
                height: '0',
                backgroundColor: 'white',
                transition: {
                  opacity: { duration: 0.8, ease: 'easeOut' },
                  backgroundColor: { duration: 0.5, ease: 'easeOut' },
                  height: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              className={styles.menu}
            >
              <div className={styles.menuFooter2}>
                <div style={{ paddingBottom: '20px', borderBottom: '1px solid var(--main-color)' }}>
                  <h1 style={{ paddingBottom: '20px' }}>로그인</h1>
                  <Link to="/login" className={styles.btn1} onClick={()=>setIsMenuOpen(false)}>
                    <Button text="로그인" width={'365px'} />
                  </Link>
                </div>
                <div style={{ paddingBottom: '20px', borderBottom: '1px solid var(--main-color)' }}>
                  <h1 style={{ paddingBottom: '20px' }}>마이페이지 바로가기</h1>
                  <Link className={styles.btn2} to="/mypage/user" onClick={()=>setIsMenuOpen(false)}>
                    <Button text="마이페이지" width={'365px'} />
                  </Link>
                </div>
              </div>
              <div className={styles.headerList2}>
                <HeaderList onItemClick={handleItemClick} isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* 메뉴가 열릴 때만 배경 어두워지도록 오버레이 추가 */}
        <div
          className={`${styles['menu-overlay']} ${isMenuOpen ? styles['menu-open'] : ''}`}
          style={{
            top: currentSection === 1 ? 0 : '105px',
            height: currentSection === 1 ? '100vh' : '89vh',
          }}
        ></div>
      </div>
    );
  };

  export default MainHeader;
