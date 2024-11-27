import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import styles from "./MyPage.module.css";

const Scrappg =()=>{

    const tabs = [
        { label: "전체", link: './intro' }, // 탭 이름과 링크 설정
        { label: "강아지", link: 'https://www.naver.com/' },
        { label: "고양이", link: 'https://www.google.com/' },
        { label: "기타동물", link: 'https://www.youtube.com/' }
    ];

    return(
       <div className={styles.subNaviBar}>
        <SubNaviBar tabs={tabs}></SubNaviBar>
       </div>
    )
}
export default Scrappg;