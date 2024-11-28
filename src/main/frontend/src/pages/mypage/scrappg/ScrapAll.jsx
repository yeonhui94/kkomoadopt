import React, { useState } from "react";
import Card2 from "../../../components/Card2/Card2";  // Card2 컴포넌트 임포트
import img1 from "../../../assets/CardImage/1.jpg";   // 이미지 임포트
import img2 from "../../../assets/CardImage/2.jpg";
import img3 from "../../../assets/CardImage/3.jpg";
import img4 from "../../../assets/CardImage/4.jpg";
import SubNaviBar from "../../../components/MyPage/SubNavi/SubNaviBar";  // SubNaviBar 임포트
import styles from "../MyPage.module.css";  // 스타일시트 임포트
import SearchBar from "../../../components/SearchBar";

const ScrapAll = ({ gridArea }) => {
    const [selectedCategory, setSelectedCategory] = useState("전체");

    // 각 카테고리 아이템
    const allItems = [
        { img: img1, title: "강아지 아이템 1", description: "강아지" },
        { img: img2, title: "고양이 아이템 2", description: "고양이" },
        { img: img3, title: "기타동물 아이템 3", description: "기타동물" },
        { img: img4, title: "강아지 아이템 4", description: "강아지" }
    ];

    // 각 카테고리 필터링 함수
    const filteredItems = selectedCategory === "전체" ? allItems : allItems.filter(item => item.description === selectedCategory);

    // 탭을 클릭할 때마다 선택된 카테고리 상태 업데이트
    const tabs = [
        { label: "전체", link: "/mypage", category: "전체" },  // 링크 변경
        { label: "강아지", link: "/mypage/scrap-dog", category: "강아지" },
        { label: "고양이", link: "/mypage/scrap-cat", category: "고양이" },
        { label: "기타동물", link: "/mypage/scrap-etc", category: "기타동물" }
    ];

    const handleTabClick = (category) => {
        setSelectedCategory(category);  // 클릭한 카테고리로 상태 업데이트
    };

    return (
        <div style={{ gridArea: gridArea }}>
        <div className={styles.mpcontainer}>
            <div className={styles.SearchBar}>
                <SearchBar width="300px"></SearchBar>
            </div>
            <div className={styles.SubNaviBar}>
                <SubNaviBar tabs={tabs} onTabClick={handleTabClick}></SubNaviBar>
            </div>

            {/* 필터링된 아이템들만 렌더링 */}
            <div className={styles.content}>
                {filteredItems.map((item, index) => (
                    <Card2 
                        key={index} 
                        imageFile={item.img} 
                        title={item.title} 
                        description={item.description} 
                    />
                ))}
            </div>
        </div>
    </div>
    );
};

export default ScrapAll;
