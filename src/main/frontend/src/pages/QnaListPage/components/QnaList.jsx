import QnaItem from "./QnaItem";
import PropTypes from "prop-types";
import { mainContainer, mainContainerItem, link } from "./QnaList.module.css";
import { Link } from "react-router-dom";

const QnaList = ({ qnaList }) => {
  return (
    <div className={mainContainer}>
      <div className={mainContainerItem}>
        <span>번호</span>
        <span>제목</span>
        <span>작성자</span>
        <span>작성일</span>
        <span>조회수</span>
      </div>
      {qnaList.map((qna) => (
        <Link to={`result/${qna.id}`} key={qna.id} className={link}>
          <QnaItem key={qna.id} {...qna} />
        </Link>
      ))}
    </div>
  );
};

QnaList.propTypes = {
  qnaList: PropTypes.arrayOf(PropTypes.shape(QnaItem.propTypes)).isRequired,
};

export default QnaList;
