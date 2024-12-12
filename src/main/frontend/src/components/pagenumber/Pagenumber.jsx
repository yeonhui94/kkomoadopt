import { Link } from "react-router-dom";  // Link 임포트 추가
import { useState } from "react";
import style from '../pagenumber/Pagenumber.module.css';
//
// function Pagenumber({ totalPages, currentPage, handlePageClick }) {
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
//
//   return (
//     <div className={style.pagenumber}>
//       <div className={style.side} />
//       {pageNumbers.map((page) => (
//         <Link
//           key={page}
//           to={`/adoption/${page}`}  // 페이지 URL 수정
//           className={page === currentPage ? style.active : ""}
//           onClick={() => handlePageClick(page)}
//         >
//           {page}
//         </Link>
//       ))}
//       <div className={style.rightside} />
//     </div>
//   );
// }
//
// export default Pagenumber;
const Pagenumber = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);  // 페이지 번호 생성

  return (
    <div className={style.pagenumber}>
        <div className={style.side} />
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}  // 페이지 번호 클릭 시 onPageChange 호출
          disabled={pageNumber === currentPage}  // 현재 페이지는 클릭 불가능
          style={{
            fontWeight: pageNumber === currentPage ? "bold" : "normal",
            margin: "0 5px",
          }}
           className={pageNumber === currentPage ? style.active : ""}
        >
          {pageNumber}
        </button>
      ))}
      <div className={style.rightside} />
    </div>
  );
};

export default Pagenumber
