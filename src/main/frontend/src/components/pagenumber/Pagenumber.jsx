import { useState } from "react";
import style from '../pagenumber/Pagenumber.module.css';

function Pagenumber() {
  // 현재 클릭된 링크의 인덱스를 저장
  const [activeIndex, setActiveIndex] = useState(null);

  // 페이지 번호와 링크 데이터를 배열로 정의
  const pagenums = [
    { text: "1", link: "./intro" },
    { text: "2", link: "https://www.naver.com/" },
    { text: "3", link: "https://www.google.com/" },
    { text: "4", link: "https://www.youtube.com/" },
    { text: "5", link: "https://motion.dev/docs/react-examples" },
  ];

  // 클릭 시 활성화된 링크의 인덱스를 업데이트
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={style.pagenumber}>
      <div className={style.side} />
      {pagenums.map((page, index) => (
        <a
          key={index} // 각 항목의 고유한 키
          href={page.link} // 링크 경로
          className={index === activeIndex ? style.active : ""} // 활성화 상태에 따라 클래스 동적으로 적용
          onClick={(e) => {
            e.preventDefault(); // 기본 동작 방지 (효과적용확인용)
            handleClick(index);
          }}
        >
          {page.text} {/* 텍스트 표시 */}
        </a>
      ))}
      <div className={style.rightside} />
    </div>
  );
}

export default Pagenumber;