import React, { useState, useRef } from "react";
import { LayoutGroup } from "framer-motion";
import TabRow from "./TabRow.jsx";
import styles from '../components/Header.module.css';
import HeaderDivider from "./HeaderDivider.jsx";
import Mypageicon from "./Mypageicon.jsx";
import Button from "../button/Button.jsx";

function Header() {
  const [selectedTab, setSelectedTab] = useState(0); // 현재 선택된 탭의 인덱스를 관리하는 상태
  
  const tabs = [
      { label: "센터소개", link: './intro' }, // 탭 이름과 링크 설정
      { label: "입양", link: 'https://www.naver.com/' },
      { label: "커뮤니티", link: 'https://www.google.com/' },
      { label: "고객센터", link: 'https://www.youtube.com/' }
  ];

  return (
      <>
          <div className={styles.head}>
              <div className={styles.logo} /> {/* 로고 섹션 */}
              <LayoutGroup> {/* 애니메이션을 그룹화 */}
                  <TabRow
                      items={tabs} // 탭 목록 전달
                      selectedTab={selectedTab} // 현재 선택된 탭 전달
                      onSelect={setSelectedTab} // 탭 선택 시 호출될 함수 전달
                  />
                  <div className={styles.headerright}>
                      <Mypageicon /> {/* 마이페이지 아이콘 */}
                      <Button text="로그아웃" /> {/* 로그아웃 버튼 */}
                  </div>
              </LayoutGroup>
          </div>
          <HeaderDivider /> {/* 헤더 아래 구분선 */}
      </>
  );
}

export default Header;
