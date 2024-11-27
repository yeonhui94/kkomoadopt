import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";

const Mypost =()=>{

    const tabs = [
        { label: "아이를 찾습니다", link: 'https://www.naver.com/' },
        { label: "입양후기", link: 'https://www.naver.com/' },
        { label: "사고팝니다", link: 'https://www.naver.com/' },
        { label: "신고합니다", link: 'https://www.naver.com/' },
    ];

    return(
       <div>
        <SubNaviBar tabs={tabs}></SubNaviBar>
       </div>
    )
}
export default Mypost;