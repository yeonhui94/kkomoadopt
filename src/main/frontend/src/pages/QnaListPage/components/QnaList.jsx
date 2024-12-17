import QnaItem from "./QnaItem";
import PropTypes from "prop-types";
import { mainContainer, mainContainerItem, link,header } from "./QnaList.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const QnaList = ({ qnaList }) => {

      // useEffect(() => {
      //     // console.log("큐엔에이ㅣ 리스트ㅡ으으으응 ",qnaList);
      // }, [qnaList])

  // console.log(qnaList)\
  
  return (
    
    <div className={mainContainer}>
      <div className={mainContainerItem+" "+header}>
        <span>번호</span>
        <span>제목</span>
        <span>작성자</span>
        <span>작성일</span>
        <span>조회수</span>
      </div>
      
      {qnaList.map((qna) => (
        <Link to={`result/${qna.qnaUid}`} key={qna.qnaUid} className={link}>
          <QnaItem key={qna.qnaId} {...qna}/>
        </Link>
      ))}
    </div>
  );
};

QnaList.propTypes = {
  qnaList: PropTypes.arrayOf(PropTypes.shape(QnaItem.propTypes)).isRequired,
};

export default QnaList;
