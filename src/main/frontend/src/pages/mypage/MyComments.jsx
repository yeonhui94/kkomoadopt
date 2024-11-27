import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import styles from "./MyPage.module.css";

const MyComments =()=>{

    const tabs = [
        { label: "공지사항", link: './intro' }, // 탭 이름과 링크 설정
        { label: "아이를 찾습니다", link: 'https://www.naver.com/' },
        { label: "입양후기", link: 'https://www.naver.com/' },
        { label: "사고팝니다", link: 'https://www.naver.com/' },
        { label: "신고합니다", link: 'https://www.naver.com/' },
    ];

    return(
        <div className={styles.subNaviBar}>
         <SubNaviBar tabs={tabs}></SubNaviBar>sfd
        </div>  
     )
}
export default MyComments;