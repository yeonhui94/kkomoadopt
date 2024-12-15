import PropTypes from "prop-types";
import { mainContainerItem } from "./QnaList.module.css";
import { useEffect } from "react";

const QnaItem = ({ qnaId, qnaTitle, nickname, qnaCreatedAt, qnaViewCount }) => {

      // useEffect(() => {
      //   console.log("아이테에에에에에에에에ㅔ엠 ",qnaList);
      // }, [qnaList])
      // console.log("큐엔에이ㅣ 리스트ㅡ으으으응 ",qnaList);

  return (
    <div className={mainContainerItem}>
      <span>{qnaId}</span>
      <span>{qnaTitle}</span>
      <span>{nickname}</span>
      <span>{qnaCreatedAt}</span>
      <span>{qnaViewCount}</span>
    </div>
  );
};

QnaItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  views: PropTypes.number.isRequired,
};

export default QnaItem;
