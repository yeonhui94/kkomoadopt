import React, { useState } from "react";
import {LayoutGroup, LayoutGroupContext} from "framer-motion";
import styles from "../header/Header.module.css";
import TabRow from "./TabRow";
// import HeaderDivider from "./HeaderDivider";
import Button from '../../components/Button/Button';
import Mypageicon from "./Mypageicon";
import Logo from "../../components/logo/Logo";
import Divider from "../../components/Divider";


function Header() {
    const [selectedTab, setSelectedTab] = useState(0); // 현재 선택된 탭의 인덱스를 관리하는 상태
    
    const tabs = [
        { label: "센터소개", link: './intro' }, // 탭 이름과 링크 설정
        { label: "입양", link: 'https://www.naver.com/' },
        { label: "커뮤니티", link: 'https://www.google.com/' },
        { label: "고객센터", link: 'https://www.youtube.com/' }
    ];
  
    return (
        // 로고는 새로 쌤이 삽입한지 얼마 안되서 꺠짐. 썜이 위치 조정하신다고 하심.
        // 멀쩡한 모양 필요할 시 위치 조정 전까지 로코 컴포넌트 대신 아래 내용 삽입할 것.
        // <a href="https://www.w3schools.com/">
        // <div className={styles.logo} /> 
        // </a>
        <>
            <div className={styles.head}>
              <Logo/>
              {/* 로고 섹션 */}
                <LayoutGroup> {/* 애니메이션을 그룹화 */}
                    <TabRow
                        items={tabs} // 탭 목록 전달
                        selectedTab={selectedTab} // 현재 선택된 탭 전달
                        onSelect={setSelectedTab} // 탭 선택 시 호출될 함수 전달
                    />
                    <div className={styles.headerright}>
                        <Mypageicon/> {/* 마이페이지 아이콘 */}
                        <Button text="로그아웃"/> {/* 로그아웃 버튼 */}
                    </div>
                </LayoutGroup>
                <Divider width="100%" paddingbt="20px"></Divider>
            </div>
            {/* 헤더 아래 구분선 */}
        </>
    );
  }
  
  export default Header;