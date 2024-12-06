import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import SearchBar from "../../components/SearchBar";
import styles from './AdminPage.module';
function AdoptionPostPage () {

    const tabs = [
        { label: "전체", category: "전체"},
        { label: "강아지", category: "강아지"},
        { label: "고양이", category: "고양이"},
        { label: "기타동물", category: "기타동물"},
        { label: "스크랩한 동물만 보기", category: "스크랩한 동물만 보기"}
    ];
    const handleTabClick = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
      };
    const handleSearch = (query) => {
        setSearchQuery(query);
      };
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    return (
        <div style={{gridArea: gridArea }}>
            <div className={styles.mpcontainer}>
                <div className={styles.SearchBar}>
                    <SearchBar
                        placeholder={"공고번호 입력"}
                        onSearch={handleSearch} 
                        width="300px"
                    />
                </div>

                <div className={styles.SubNaviBar}>
                    <SubNaviBar tabs={tabs} onTabClick={handleTabClick}/>
                </div>

                <div className={styles.content2}>
                    <div className={styles.tableHeader}>
                        

                    </div>
                </div>
                <Pagenumber
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                />
            </div>
        </div>
    )
}
export default AdoptionPostPage;