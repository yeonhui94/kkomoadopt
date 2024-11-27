import Divider from "../../components/Divider";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import styles from "./MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Card2 from "../../components/Card2/Card2";

const Scrappg =()=>{

    const tabs = [
        { label: "전체", link: './intro' }, // 탭 이름과 링크 설정
        { label: "강아지", link: 'https://www.naver.com/' },
        { label: "고양이", link: 'https://www.google.com/' },
        { label: "기타동물", link: 'https://www.youtube.com/' }
    ];

    return(
       <div className={styles.mpcontainer}>
            <div className={styles.SearchBar}>
            <SearchBar width="300px"></SearchBar>
            </div>ss
            <div className={styles.SubNaviBar}>
            <SubNaviBar tabs={tabs}>  </SubNaviBar>
            </div>
            <div className={styles.content}>
            <Card2></Card2>
            <Card2></Card2>
            <Card2></Card2>
            </div>
       </div>
    )
}
export default Scrappg;