import { useState } from "react";
import styles from "../mypage/MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import Button from "../../components/Button/Button";
import CheckBox from "../../components/CheckBox";  // CheckBox 임포트
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";

function AdoptionPostPage({ gridArea }) {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [searchQuery, setSearchQuery] = useState('');
    const [checkedItems, setCheckedItems] = useState({});  // 체크박스 상태를 관리
    const [status, setStatus] = useState(""); // 입양 상태
    const [reason, setReason] = useState(""); // 사유

    const allPosts = [
        { id: 1, category: "강아지", title: "3세/믹스견/성격 나쁨", date: "2024-11-28", status: "입양불가", reason: "입양완료" },
        { id: 2, category: "고양이", title: "2세/먼치킨/꼬리가 몸통만함", date: "2024-11-28", status: "예약중", reason: "" },
        { id: 3, category: "기타동물", title: "1세/이구아나/공원에서 발견", date: "2024-11-28", status: "입양 불가", reason: "안락사" },
        { id: 4, category: "강아지", title: "4세/시바견/산책 중 사람을 잘 따름", date: "2024-11-27", status: "입양 가능", reason: "" },
        { id: 5, category: "고양이", title: "1세/페르시안/털이 많이 빠짐", date: "2024-11-26", status: "입양 불가", reason: "안락사" },
        { id: 6, category: "기타동물", title: "2세/토끼/털이 길고 부드러움", date: "2024-11-25", status: "예약중", reason: "" },
        { id: 7, category: "강아지", title: "5세/푸들/다소 예민", date: "2024-11-24", status: "입양 가능", reason: "" },
        { id: 8, category: "고양이", title: "3세/러시안 블루/조용하고 친화적", date: "2024-11-23", status: "입양 불가", reason: "안락사" },
        { id: 9, category: "기타동물", title: "6개월/햄스터/작고 귀여움", date: "2024-11-22", status: "입양 가능", reason: "" },
        { id: 10, category: "강아지", title: "2세/비숑프리제/활발하고 사람 좋아함", date: "2024-11-21", status: "입양가능", reason: "" }
    ];

    const tabs = [
        { label: "전체", category: "전체" },
        { label: "강아지", category: "강아지" },
        { label: "고양이", category: "고양이" },
        { label: "기타동물", category: "기타동물" },
        { label: "스크랩한 동물만 보기", category: "스크랩한 동물만 보기" }
    ];
    // 검색 필터링된 데이터
    const filteredData = allPosts.filter(post =>
        (selectedCategory === "전체" || post.category === selectedCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // 페이지당 보여지는 글 수
    const postsPerPage = 8;

    // 현재 페이지에 맞는 카드 데이터 계산
    const currentPosts = filteredData.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    // 전체 페이지 수 계산
    const totalPages = Math.ceil(filteredData.length / postsPerPage);

    const handleTabClick = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);  // 카테고리 변경 시 페이지 1로 리셋
    };
    // 검색어 변경 처리 함수
    const handleSearch = (query) => {
        setSearchQuery(query);  // 검색어를 상태에 저장
        setCurrentPage(1); // 검색 시 첫 페이지로 돌아가게 설정
    };

    // 페이지네이션 처리
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 체크박스 상태 변경 처리
    const handleCheckBoxChange = (id) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false); // 아이디 정보 모달

    const openInfoModal = () => setIsInfoModalOpen(true); // 정보 모달 열기
    const closeInfoModal = () => setIsInfoModalOpen(false); // 정보 모달 닫기

    const handleBtn1 = (e) => {
        e.preventDefault(); // 폼 제출로 인한 새로 고침을 방지
        openInfoModal(); // 모달 열기
    };

    const handleBtn2 = () => {
        navigate('/adoption/adoption-newpost');

    };

    const handleConfirmClick = () => {
        // /secession 페이지로 이동
        navigate('/secession');
        // 모달 닫기
        closeInfoModal();
    };

    return (
        <div style={{ gridArea: gridArea }}>
            <div className={styles.mpcontainer}>
                <div className={styles.SearchBar}>
                    <SearchBar
                        placeholder={"공고번호"}
                        width="300px"
                        onSearch={handleSearch} />
                </div>

                <div className={styles.SubNaviBar}>
                    <SubNaviBar tabs={tabs} onTabClick={handleTabClick} />
                </div>
                <div className={styles.content2}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>공고번호</th>
                                <th>글제목</th>
                                <th>작성날짜</th>
                                <th>입양상태</th>
                                <th>사유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.map(post => (
                                <tr key={post.id}> {/* key는 이메일로 설정 */}
                                    <td>
                                        <CheckBox
                                            checked={!!checkedItems[post.id]}
                                            onChange={() => handleCheckBoxChange(post.id)}
                                        />
                                    </td>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.date}</td>
                                    <td>{post.status}</td>
                                    <td>{post.reason}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.pgnum}>
                    <Pagenumber
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageClick={handlePageClick}
                    />
                    <div className={styles.adminbtn}>
                        <Button
                            onClick={handleBtn1}
                            text={"수정"} />
                            <Link to="/adoption-newpost">
                        <Button text={"글쓰기"} 
                        />
                           </Link>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isInfoModalOpen}
                closeModal={closeInfoModal}
                modalText={"수정 하시겠습니까?"}
                inPut={
                    <>
                        <div>
                            <label> 입양상태 ▼</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="입양 가능">입양 가능</option>
                                <option value="입양 불가">입양 불가</option>
                                <option value="예약중">예약중</option>
                            </select>
                        </div>
                        <div>
                            <label> 사유를 선택하세요 ▼</label>
                            <select value={reason} onChange={(e) => setReason(e.target.value)}>
                                <option value="입양 완료">입양 완료</option>
                                <option value="안락사">안락사</option>
                                <option value="자연사">자연사</option>
                                <option value="기타">기타</option>
                                <option value="빈칸"></option>
                            </select>
                        </div>
                    </>
                }
                confirmText={"확인"}
                cancelText={"취소"}
                onConfirm={handleConfirmClick}
            />
        </div>
    );
}

export default AdoptionPostPage;
