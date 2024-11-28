import Divider from "../../../components/Divider";
import SubNaviBar from "../../../components/MyPage/SubNavi/SubNaviBar";
import styles from "../MyPage.module.css";
import SearchBar from "../../../components/SearchBar";
import Card2 from "../../../components/Card2/Card2";
import img1 from "../../../assets/CardImage/1.jpg"
import img2 from "../../../assets/CardImage/2.jpg"
import img3 from "../../../assets/CardImage/3.jpg"
import img4 from "../../../assets/CardImage/4.jpg"
import Pagenumber from "../../../components/pagenumber/Pagenumber";
import { Outlet } from "react-router-dom";

const Scrappg =({gridArea})=>{

    const tabs = [
        { label: "전체", link: 'http://localhost:5173/mypage' }, // 탭 이름과 링크 설정
        { label: "강아지", link: 'http://localhost:5173/mypage/scrap-dog' },
        { label: "고양이", link: 'http://localhost:5173/mypage/scrap-cat' },
        { label: "기타동물", link: 'http://localhost:5173/mypage/scrap-etc' }
    ];

    return(
       <div className={styles.mpcontainer}
        style={{gridArea : gridArea}}>
            <div className={styles.SearchBar}>
            <SearchBar width="300px"></SearchBar>
            </div>
            <div className={styles.SubNaviBar}>
            <SubNaviBar tabs={tabs}>  </SubNaviBar>
            </div>
            <Outlet/>
            <Pagenumber/>
       </div>
    )
}
export default Scrappg;