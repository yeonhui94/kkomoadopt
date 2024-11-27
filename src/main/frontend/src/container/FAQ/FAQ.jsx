import React, { useState, useEffect } from 'react';
import styles from './FAQ.module.css';
import SearchArea from './SearchArea';
import Content from './Content';
import Category from './Category';
import Pagination from './Pagination'; 

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('title');
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 5; // 페이지당 항목 수

  const items = [
    { id: 1, category: '계정 및 회원관리', title: '로그인 정보 분실했어요.', content: '로그인 전, 로그인 정보 찾기 버튼을 통해 확인이 가능합니다.' },
    { id: 2, category: '계정 및 회원관리', title: '회원 가입은 필수인가요?', content: '서비스 이용을 위해 회원 가입이 필요합니다.' },
    { id: 3, category: '계정 및 회원관리', title: '비밀번호 변경은 어떻게 하나요?', content: '로그인 후 마이페이지의 "회원 정보 수정"을 참고해주세요!' },
    { id: 4, category: '계정 및 회원관리', title: '회원 탈퇴는 어떻게 하나요?', content: '로그인 후 마이페이지의 "회원 정보 수정"을 참고해주세요.' },
    { id: 5, category: '입양', title: '입양 절차가 궁금합니다.', content: '입양 절차는 입양 안내 페이지를 참조하세요.' },
    { id: 6, category: '입양', title: '입양 후 마음이 바뀌면 취소할 수 있나요?', content: '되겠냐?' },
    { id: 7, category: '입양', title: '입양 전 반드시 방문 상담을 해야 하나요?', content: '네. 반드시 방문 상담을 통해 실제로 아이들을 보신 후 입양이 가능합니다!' },
    { id: 8, category: '입양', title: '상담 후 입양을 하지 않아도 괜찮나요?', content: '네. 괜찮습니다!' },
    { id: 9, category: '입양', title: '입양 취소 하고 싶어요.', content: '입양 취소 관련 정책은 고객센터에 문의하세요.' },
    { id: 10, category: '입양', title: '방문 상담 후 바로 입양이 가능한가요?', content: '상담 후 내부 절차에 따라 진행됩니다.' },
    { id: 11, category: '봉사', title: '미성년자도 봉사활동을 할 수 있나요?', content: '유기동물의 경우, 사회화가 되지 않은 동물들이 많아 봉사 시 예기치 못한 상황이 발생할 수 있어 신청받고 있지 않습니다.' },
    { id: 12, category: '봉사', title: '봉사 시 필요한 준비물이 있나요?', content: '활기찬 아이들이 많으므로 편한 옷과 신발 등 값비싼 복장등은 자제해주세요.' },
    { id: 13, category: '봉사', title: '봉사 신청 절차가 궁금합니다.', content: '방문 상담 신청을 통해 신청해주세요.'},
    { id: 14, category: '후원', title: '후원 방법이 궁금합니다.', content: '문상일 카카오 3333211495582 로 부탁드립니다!' },
    { id: 15, category: '후원', title: '후원금은 어떻게 사용되나요?', content: '동물들의 영양 간식과 직원들의 사리사욕에 사용됩니다.' },
    { id: 16, category: '블랙리스트', title: '블랙리스트에 등록 되는 기준은 무엇인가요?', content: '커뮤니티 안에서 싸움 조장, 사행성 광고 및 욕설, 카테고리와 관련 없는 게시물 등을 지속해서 올릴 경우 블랙리스트가 될 수 있습니다.' },
    { id: 17, category: '블랙리스트', title: '블랙리스트가 되면 안좋은 점이 있나요?', content: '블랙리스트에 등록된 회원은 커뮤니티에 어떠한 게시글, 댓글등을 작성하실 수 없습니다.' },
    { id: 18, category: '블랙리스트', title: '블랙리스트도 입양은 가능한가요?', content: '가능합니다.' },
    { id: 19, category: '블랙리스트', title: '블랙리스트는 어떻게 하면 풀리나요?', content: 'QnA게시판에 글을 남겨주세요.' },
  ];

  const filteredItems = items.filter((item) => {
    const categoryMatch = selectedCategory === '전체' || item.category === selectedCategory;
    const searchMatch =
      filterType === 'title'
        ? item.title.toUpperCase().includes(searchTerm.toUpperCase())
        : (item.title + item.content).toUpperCase().includes(searchTerm.toUpperCase());
    return categoryMatch && searchMatch;
  });

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 카테고리가 변경될 때마다 currentPage를 1로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div id={styles['main-area']} style={{gridArea:"section"}}>
      <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div id={styles['list-area']}>
        <SearchArea
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
        />
        <Content items={currentItems} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default FAQ;
