import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubNaviBar from "../../components/MyPage/SubNavi/SubNaviBar";
import Pagenumber from "../../components/pagenumber/Pagenumber";
import SearchBar from "../../components/SearchBar";
import styles from "./MyPage.module.css";

const Mypost = () => {
  const posts = [
    { id: 1, category: "아이를 찾습니다", title: "광진구에서 실종", content: "아이에 대한 정보", date: "2024-11-28", viewCount: 150 },
    { id: 2, category: "입양후기", title: "인삼이 너무 기여워요", content: "입양 후기 내용", date: "2024-11-27", viewCount: 230 },
    { id: 3, category: "사고팝니다", title: "목줄 판매합니다", content: "중고 물건 판매", date: "2024-11-26", viewCount: 45 },
    { id: 4, category: "신고합니다", title: "체리콕", content: "불법 활동 신고", date: "2024-11-25", viewCount: 78 },
    { id: 5, category: "아이를 찾습니다", title: "부천에서 실종", content: "아이에 대한 정보", date: "2024-11-24", viewCount: 123 },
    { id: 6, category: "입양후기", title: "조랭이는 귀엽다", content: "입양 후기 내용", date: "2024-11-23", viewCount: 99 },
    { id: 7, category: "사고팝니다", title: "배변패드 판매합니다", content: "중고 물건 판매", date: "2024-11-22", viewCount: 10 },
    { id: 8, category: "신고합니다", title: "체리콕", content: "불법 활동 신고", date: "2024-11-21", viewCount: 55 },
    { id: 9, category: "아이를 찾습니다", title: "파주 실종..", content: "아이에 대한 정보", date: "2024-11-20", viewCount: 200 },
    { id: 10, category: "입양후기", title: "사지말고 입양하세요", content: "입양 후기 내용", date: "2024-11-19", viewCount: 140 },
  ];

  const { category } = useParams();  // URL에서 category를 가져옴

  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (category) {
      setFilteredPosts(posts.filter(post => post.category === category));
    } else {
      setFilteredPosts(posts);  // 카테고리가 없으면 전체 게시글 표시
    }
  }, [category]);  // category가 변경될 때마다 게시글 필터링

  const tabs = [
    { label: "아이를 찾습니다", link: "/category/아이를 찾습니다" },
    { label: "입양후기", link: "/category/입양후기" },
    { label: "사고팝니다", link: "/category/사고팝니다" },
    { label: "신고합니다", link: "/category/신고합니다" },
  ];

  return (
    <div className={styles.mpcontainer}>
      <div className={styles.SearchBar}>
        <SearchBar width="300px" />
      </div>
      <div className={styles.SubNaviBar}>
        <SubNaviBar tabs={tabs} />
      </div>
      <div className={styles.content2}>
        <div className={styles.tableHeader}>
          <span className={styles.tableColumn}>글번호</span>
          <span className={styles.tableColumn}>제목</span>
          <span className={styles.tableColumn}>작성일</span>
          <span className={styles.tableColumn}>조회수</span>
        </div>
        {filteredPosts.map(post => (
          <div key={post.id} className={styles.postItem}>
            <span className={styles.tableColumn}>{post.id}</span>
            <span className={styles.tableColumn}>{post.title}</span>
            <span className={styles.tableColumn}>{post.date}</span>
            <span className={styles.tableColumn}>{post.viewCount}</span>
          </div>
        ))}
      </div>
      <Pagenumber />
    </div>
  );
};

export default Mypost;
