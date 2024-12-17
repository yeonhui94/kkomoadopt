import style from '../../components/pagenumber/Pagenumber.module.css'; // 스타일 파일 import

const Pagenumber2 = ({ totalPosts, postsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage); // 총 페이지 수 계산
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);  // 페이지 번호 생성

  return (
    <div className={style.pagenumber}>
      <div className={style.side} />
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}  // 페이지 번호 클릭 시 paginate 호출
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

export default Pagenumber2;