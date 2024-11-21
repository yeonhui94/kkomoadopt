import { useState } from "react";
import Tab from "./Tab.jsx";

function TabRow({ items, selectedTab, onSelect }) {
    const [hoveredTab, setHoveredTab] = useState(null); // 마우스 올린 탭 상태

    const handleTabClick = (index) => {
        onSelect(index); // 클릭 시 선택된 탭 업데이트
    };

    const handleTabHover = (index) => {
        setHoveredTab(index); // 호버된 탭 업데이트
    };

    const handleTabLeave = () => {
        setHoveredTab(null); // 마우스가 벗어나면 초기화
    };

    return (
        <ul style={{ display: "flex", padding: 0 }}> {/* 탭을 가로로 정렬 */}
            {items.map((item, index) => (
                <Tab
                    key={index}
                    label={item.label} // 탭 이름
                    isSelected={selectedTab === index} // 선택된 탭 여부
                    onClick={() => handleTabClick(index)} // 클릭 이벤트
                    onMouseEnter={() => handleTabHover(index)} // 마우스 올림 이벤트
                    onMouseLeave={handleTabLeave} // 마우스 벗어남 이벤트
                />
            ))}
        </ul>
    );
}

export default TabRow;
