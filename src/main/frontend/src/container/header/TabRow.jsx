import { useState } from "react";
import Tab from "./Tab.jsx";

function TabRow({ items, selectedTab, onSelect, link }) {

    const [hoveredTab, setHoveredTab] = useState(null);

    const handleTabClick = (index) => {
        onSelect(index);  // 클릭 시 선택된 탭 변경
    };

    const handleTabHover = (index) => {
        setHoveredTab(index);  // 마우스 호버 시 hoveredTab 상태 설정
    };

    const handleTabLeave = () => {
        if (selectedTab !== index) setHoveredTab(null); // 마우스가 벗어날 때 hoveredTab 초기화
    };

    return (
        <ul style={{ display: "flex", padding: 0 , outline: "none"}}>
            {items.map((item, index) => (
                <Tab
                    key={index}
                    label={item.label}
                    // link={item.link}  // {링크 넘어가는지 확인 시 사용}
                    isSelected={selectedTab === index}  // 클릭한 탭만 밑줄을 표시
                    onClick={() => handleTabClick(index)}  // 클릭 시 탭 변경
                    onMouseEnter={() => handleTabHover(index)}  // 마우스 호버 시 탭 변경
                    onMouseLeave={handleTabLeave}  // 마우스가 벗어날 때 hoveredTab 초기화
                />
            ))}
        </ul>
    );
}

export default TabRow;
