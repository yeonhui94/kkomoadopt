import React from 'react';
import styled from 'styled-components'; // styled-components를 임포트

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  /* border: 1px solid #ddd; */
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;

  &.active {
    /* background-color: var(--main-color); */
    color: var(--main-color);
    font-weight: bold;
  }

  &:hover {
    
  }
`;

const Pagination = ({ totalPages, currentPage, handlePageClick }) => {
  const pageNumbers = [];

  // 페이지 번호 배열 생성
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          className={currentPage === number ? 'active' : ''}
          onClick={() => handlePageClick(number)}
        >
          {number}
        </PageButton>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
