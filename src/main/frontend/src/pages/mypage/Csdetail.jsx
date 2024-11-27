import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";

const Csdetail =()=>{

    const tabs = [
        { label: "온라인 문의", link: './intro' }, // 탭 이름과 링크 설정
        { label: "방문상담 신청", link: 'https://www.naver.com/' },
    ];

    return(
       <div>
        <SubNaviBar tabs={tabs}></SubNaviBar>
       </div>
    )
}
export default Csdetail;