import { useState } from "react";
import SubTabRow from "./SubTapbRow";
import { LayoutGroup } from "framer-motion";



function SubNaviBar({ tabs }){

    const [selectedTab, setSelectedTab] = useState(0); // 현재 선택된 탭의 인덱스를 관리하는 상태
  
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
