import { useState } from "react";
import styles from "../mypage/MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import Button from "../../components/Button/Button";
import CheckBox from "../../components/CheckBox";  // CheckBox 임포트
import Modal from "../../components/Modal/Modal";

function UserMgmt({ gridArea }) {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [searchQuery, setSearchQuery] = useState('');
    const [checkedItems, setCheckedItems] = useState({});  // 체크박스 상태를 관리

    const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 열기 상태
    const [selectedUsers, setSelectedUsers] = useState([]) // 모달 열면 체크된 사람들 보여줄 상태
    const [selectedOption, setSelectedOption] = useState(""); //모달 드롭박스

    const allPosts = [
        { name: "지소엽", nickname: "재벌3세", number: "010-1234-1234", email: "soyeob@naver.com", signupdate: "2024-11-28", lastlogin: "2024-11-28", postlist: 150 },
        { name: "조연희", nickname: "조랭삼", number: "010-2255-6688", email: "yeonhui@naver.com", signupdate: "2024-11-27", lastlogin: "2024-12-10", postlist: 230 },
        { name: "장은지", nickname: "덴버", number: "010-4525-5553", email: "eunji@naver.com", signupdate: "2024-11-26", lastlogin: "2024-11-30", postlist: 45 },
        { name: "오재헌", nickname: "텐사이재헌상", number: "010-1552-4523", email: "jaehen@naver.com", signupdate: "2024-11-25", lastlogin: "2024-12-15", postlist: 78 },
        { name: "곽대훈", nickname: "파란만잔", number: "010-4521-5698", email: "daehun@naver.com", signupdate: "2024-11-24", lastlogin: "2024-11-26", postlist: 123 },
        { name: "문상일", nickname: "주근익불주먹", number: "010-7452-5362", email: "sangil@naver.com", signupdate: "2024-11-23", lastlogin: "2024-12-18", postlist: 99 },
        { name: "김인삼", nickname: "인쟘", number: "010-1245-5623", email: "jinseng@naver.com", signupdate: "2024-11-22", lastlogin: "2024-11-25", postlist: 10 },
        { name: "김홍삼", nickname: "체리콕", number: "010-4565-8978", email: "hongsam@naver.com", signupdate: "2024-11-21", lastlogin: "2024-11-28", postlist: 55 },
        { name: "김산삼", nickname: "산삼이최고", number: "010-1202-5203", email: "jinseng1@naver.com", signupdate: "2024-11-20", lastlogin: "2024-12-01", postlist: 200 },
        { name: "김도라지", nickname: "도라지정과", number: "010-4120-0215", email: "doraji@naver.com", signupdate: "2024-11-19", lastlogin: "2024-12-11", postlist: 140 },
    ];

    // 검색 필터링된 데이터
    const filteredData = allPosts.filter(post =>
    (post.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.email.toLowerCase().includes(searchQuery.toLowerCase()))
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
    const handleCheckBoxChange = (nickname) => {
        setCheckedItems((prevState) => {
            const newCheckedItems = { ...prevState, [nickname]: !prevState[nickname] };
            // 체크된 사용자들 추출
            const selectedUsersList = Object.keys(newCheckedItems).filter(key => newCheckedItems[key]);
            setSelectedUsers(selectedUsersList); // 선택된 사용자 목록 업데이트
            console.log("선택된 사용자들:", selectedUsersList); // 선택된 사용자 콘솔 출력
            return newCheckedItems;
        });
    };

    // 블랙리스트 추가 또는 탈퇴 버튼 클릭 시 모달 열기
    const handleSubmit = () => {
        setIsModalOpen(true);  // 모달 열기
    };

    // 모달에서 확인 버튼 클릭 시 처리
    const handleConfirm = () => {
        // 여기에서 블랙리스트에 추가하는 처리를 진행합니다
        // 예를 들어, 서버로 요청 보내기 등
        closeModal();
        console.log("선택된 사유:", selectedOption);
    };

    // 모달을 닫는 함수
    const closeModal = () => {
        setIsModalOpen(false);  // 모달 닫기
    };

    const handleDropdownChange = (e) => {   //모달 드롭다운
        setSelectedOption(e.target.value);
    };

    return (
        <div style={{ gridArea: gridArea }}>
            <div className={styles.mpcontainer}>
                <div className={styles.SearchBar}>
                    <SearchBar
                        placeholder={"닉네임 & 이메일"}
                        width="300px"
                        onSearch={handleSearch} />
                </div>

                <div className={styles.content2}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>선택</th>
                                <th>이름</th>
                                <th>닉네임</th>
                                <th>이메일</th>
                                <th>전화번호</th>
                                <th>가입일</th>
                                <th>작성 글 수</th>
                                <th>마지막 접속일</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.map(post => (
                                <tr key={post.email}> {/* key는 이메일로 설정 */}
                                    <td>
                                        <CheckBox
                                            checked={!!checkedItems[post.nickname]}
                                            onChange={() => handleCheckBoxChange(post.nickname)}
                                        />
                                    </td>
                                    <td>{post.name}</td>
                                    <td>{post.nickname}</td>
                                    <td>{post.email}</td>
                                    <td>{post.number}</td>
                                    <td>{post.signupdate}</td>
                                    <td>{post.postlist}</td>
                                    <td>{post.lastlogin}</td>
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
                        <Button text={"블랙리스트 추가"} onClick={handleSubmit} />
                        <Button text={"탈퇴"} onClick={handleSubmit} />
                    </div>
                </div>
                {/* 모달 컴포넌트 */}
                <Modal
                    isOpen={isModalOpen}
                    modalText={`블랙리스트에 추가할 사용자: ${selectedUsers.join(", ")}`}
                    closeModal={closeModal}
                    onConfirm={handleConfirm}
                    selectedUsers={selectedUsers} // 선택된 사용자들 전달
                    inPut={
                        <>
                            <select value={selectedOption} onChange={handleDropdownChange}>
                                <option value="">사유</option>
                                <option value="욕설">욕설</option>
                                <option value="음담패설">음담패설</option>
                                <option value="광고">광고</option>
                                <option value="관련없는 내용">관련없는 내용</option>
                                <option value="기타">기타</option>
                            </select>
                        </>
                    }
                    confirmText="확인"
                    cancelText="취소"
                />
            </div>
        </div>
    );
}

export default UserMgmt;
