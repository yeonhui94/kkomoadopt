import { useState } from "react";
import styles from "../mypage/MyPage.module.css";
import SearchBar from "../../components/SearchBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import Button from "../../components/Button/Button";

function UserMgmt({ gridArea }) {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [searchQuery, setSearchQuery] = useState('');

    const allPosts = [
        { name: "지소엽", nickname: "재벌3세",number : "010-1234-1234", email: "soyeob@naver.com", signupdate: "2024-11-28", lastlogin: "2024-11-28", postlist: 150 },
        { name: "조연희", nickname: "조랭삼",number : "010-2255-6688", email: "yeonhui@naver.com", signupdate: "2024-11-27", lastlogin: "2024-12-10", postlist: 230 },
        { name: "장은지", nickname: "덴버",number : "010-4525-5553", email: "eunji@naver.com", signupdate: "2024-11-26", lastlogin: "2024-11-30", postlist: 45 },
        { name: "오재헌", nickname: "텐사이재헌상",number : "010-1552-4523", email: "jaehen@naver.com", signupdate: "2024-11-25", lastlogin: "2024-12-15", postlist: 78 },
        { name: "곽대훈", nickname: "파란만잔",number : "010-4521-5698", email: "daehun@naver.com", signupdate: "2024-11-24", lastlogin: "2024-11-26", postlist: 123 },
        { name: "문상일", nickname: "주근익불주먹",number : "010-7452-5362", email: "sangil@naver.com", signupdate: "2024-11-23", lastlogin: "2024-12-18", postlist: 99 },
        { name: "김인삼", nickname: "인쟘",number : "010-1245-5623", email: "jinseng@naver.com", signupdate: "2024-11-22", lastlogin: "2024-11-25", postlist: 10 },
        { name: "김홍삼", nickname: "체리콕",number : "010-4565-8978", email: "hongsam@naver.com", signupdate: "2024-11-21", lastlogin: "2024-11-28", postlist: 55 },
        { name: "김산삼", nickname: "산삼이최고",number : "010-1202-5203", email: "jinseng1@naver.com", signupdate: "2024-11-20", lastlogin: "2024-12-01", postlist: 200 },
        { name: "김도라지", nickname: "도라지정과",number : "010-4120-0215", email: "doraji@naver.com", signupdate: "2024-11-19", lastlogin: "2024-12-11", postlist: 140 },
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
                                <tr key={post.nickname}>
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
                <Button text={"블랙리스트 추가"}></Button>
                <Button text={"탈퇴"}></Button>
                </div>
                </div>

            </div>
        </div>
    );
}

export default UserMgmt;
