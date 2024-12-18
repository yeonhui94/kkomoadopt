import React, { useEffect, useState } from 'react';
import { useLocation, Link,useNavigate } from 'react-router-dom'; // useLocation 훅을 import
import Logo2 from '../../components/logo/Logo2';
import Mypageicon2 from './header3/MyPageIcon2';
import Button from '../../components/Button/Button';
import HeaderList from './header3/HeaderList';
import styles from './/header3/MainHeader.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const MainHeader = ({ isScrolled, currentSection, setCurrentSection, setIsAnimatingComplete, setIsScrolled, isFooter, setIsFooter,isAnimatingComplete}) => {
  const [clickedItem, setClickedItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const location = useLocation(); // 현재 경로 가져오기
  const navigate = useNavigate();
  // 로컬 스토리지에서 유저 데이터를 확인하여 로그인 상태를 설정
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location.pathname]);

  const handleItemClick = (itemName) => {
    setClickedItem(itemName);
  };

  const handleLogoClick = () => {
//     setCurrentSection(2);
    // setIsAnimatingComplete(true);
    setIsMenuOpen(false);
    setIsScrolled(false);
  };

  useEffect(() => {
    if (currentSection === 2) {
      setIsFooter(false);
    }
  }, [currentSection]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // 현재 경로가 '/'인 경우 absolute, 아니면 relative로 설정
  const headerPosition = location.pathname === '/' ? 'absolute' : 'relative';

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    } else {
      document.body.style.overflow = 'auto'; // 기본 스크롤 활성화
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트가 언마운트될 때 스크롤 활성화
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setIsMenuOpen(false);
      }
    };

    // 초기 크기 설정
    handleResize();

    // 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);

    // 클린업 함수로 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 로그아웃 처리
  const handleLogout = () => {
      alert('로그아웃');
       localStorage.removeItem("user"); // 로컬 스토리지에서 유저 데이터 제거
       setIsLoggedIn(false); // 로그인 상태를 false로 설정
       navigate('/'); // 메인 페이지로 리디렉션
  };

  return (
    <div className={`${styles.headerGroup} ${isMenuOpen ? styles['menu-open'] : ''}`}>
      <div className={styles.header} style={{ position: headerPosition }}>
        <Link className={styles.logo} to="#" onClick={handleLogoClick}>
          <Logo2 isScrolled={isScrolled} />
        </Link>
        <div className={styles.headerList1}>
          <HeaderList onItemClick={handleItemClick} isScrolled={isScrolled} />
        </div>
        <div className={styles.menuFooter1}>
          <Mypageicon2 isLoggedIn={isLoggedIn} isScrolled={isScrolled} isAnimatingComplete={isAnimatingComplete}/>

          {/* 로그인 상태에 따라 버튼 변경 */}
          {isLoggedIn ? (
            <Button text="로그아웃" padding="12px 20px" onClick={handleLogout} color={isScrolled ? 'white' : 'black'} backColor={isScrolled ? 'transparent' : 'transparent'}hovercolor='white'/>
          ) : (
            <Link className={styles.btn} to="/login">
              <Button text="로그인" padding="12px 20px" isScrolled={isScrolled} color={isScrolled ? 'white' : 'var(--main-color)'} backColor={isScrolled ? 'transparent' : 'transparent'} hovercolor='white'/>
            </Link>
          )}
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
              {/* 로그인/로그아웃 버튼을 모바일 햄버거 메뉴에도 추가 */}
              <div style={{ paddingBottom: '20px', borderBottom: '1px solid var(--main-color)' }}>
                  <h1 style={{ paddingBottom: '20px' }}>
                    {isLoggedIn ? '로그아웃' : '로그인'}
                  </h1>
                  {isLoggedIn ? (
                      <Button text="로그아웃" width={'365px'} onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false); // 로그아웃 후 메뉴 닫기
                      }}/>
                            ) : (
                                <Link to="/login" className={styles.btn1} onClick={() => setIsMenuOpen(false)}>
                                <Button text="로그인" width={'365px'} />
                              </Link>
                            )}
                          </div>
              <div style={{ paddingBottom: '20px', borderBottom: '1px solid var(--main-color)' }}>
                <h1 style={{ paddingBottom: '20px' }}>마이페이지 바로가기</h1>
                <Link className={styles.btn2} to="/mypage/user" onClick={() => setIsMenuOpen(false)}>
                  <Button text="마이페이지" width={'365px'} />
                </Link>
              </div>
            </div>
            <div className={styles.headerList2}>
              <HeaderList onItemClick={handleItemClick} isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 메뉴가 열릴 때만 배경 어두워지도록 오버레이 추가 */}
      <div
        className={`${styles['menu-overlay']} ${isMenuOpen ? styles['menu-open'] : ''}`}
        style={{
          display: isMenuOpen ? 'block' : 'none', // 메뉴 닫힘 시 숨김
          top: currentSection === 1 ? 0 : '105px',
          height: currentSection === 1 ? '100vh' : '89vh',
        }}
      ></div>
    </div>
  );
};

export default MainHeader;
