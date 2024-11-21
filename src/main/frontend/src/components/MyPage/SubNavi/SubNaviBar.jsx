import { useState } from "react";
import SubTabRow from "./SubTapbRow";
import { LayoutGroup } from "framer-motion";



function SubNaviBar(){

    const [selectedTab, setSelectedTab] = useState(0); // 현재 선택된 탭의 인덱스를 관리하는 상태
  
    const tabs = [
        { label: "아이를 찾습니다", link: './intro' }, // 탭 이름과 링크 설정
        { label: "입양후기", link: 'https://www.naver.com/' },
        { label: "사고팝니다", link: 'https://www.google.com/' },
        { label: "신고합니다", link: 'https://www.youtube.com/' }
    ];

    return(
    <div>
        <LayoutGroup> {/* 애니메이션을 그룹화 */}
                  <SubTabRow
                      items={tabs} // 탭 목록 전달
                      selectedTab={selectedTab} // 현재 선택된 탭 전달
                      onSelect={setSelectedTab} // 탭 선택 시 호출될 함수 전달
                  />
                  </LayoutGroup>
    </div>
    )
}

export default SubNaviBar;
