import { useState } from "react";
import style from '../pagenumber/Pagenumber.module.css';

function Pagenumber({ totalPages, currentPage, handlePageClick }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1); // 페이지 번호 배열 생성

  return (
    <div className={style.pagenumber}>
      <div className={style.side} />
      {pageNumbers.map((page) => (
        <a
          key={page}
          href="#"
          className={page === currentPage ? style.active : ""}
          onClick={(e) => {
            e.preventDefault();  // 기본 링크 동작 방지
            handlePageClick(page);  // 페이지 변경
          }}
        >
          {page}
        </a>
      ))}
      <div className={style.rightside} />
    </div>
  );
}

export default Pagenumber;
