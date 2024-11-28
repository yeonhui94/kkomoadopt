import Divider from "../../components/Divider";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import styles from "./MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Card2 from "../../components/Card2/Card2";
import img1 from "../../assets/CardImage/1.jpg"
import img2 from "../../assets/CardImage/2.jpg"
import img3 from "../../assets/CardImage/3.jpg"
import img4 from "../../assets/CardImage/4.jpg"
import Pagenumber from "../../components/pagenumber/Pagenumber";

const Scrappg =({gridArea})=>{

    const tabs = [
        { label: "전체", link: './intro' }, // 탭 이름과 링크 설정
        { label: "강아지", link: 'https://www.naver.com/' },
        { label: "고양이", link: 'https://www.google.com/' },
        { label: "기타동물", link: 'https://www.youtube.com/' }
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
            <div className={styles.content}>
            <Card2 imageFile={img1}></Card2>
            <Card2 imageFile={img2}></Card2>
            <Card2 imageFile={img3}></Card2>
            <Card2 imageFile={img4}></Card2>
            </div>
       </div>
    )
}
export default Scrappg;