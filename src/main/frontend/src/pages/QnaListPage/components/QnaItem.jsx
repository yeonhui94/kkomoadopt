import PropTypes from "prop-types";
import { mainContainerItem } from "./QnaList.module.css";
import { useEffect } from "react";
import { formatDate } from "../../../utils/formattedDate";
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
      <span>{formatDate(qnaCreatedAt)}</span>
      <span>{qnaViewCount}</span>
    </div>
  );
};

QnaItem.propTypes = {
  qnaId: PropTypes.string.isRequired,
  qnaTitle: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  qnaCreatedAt: PropTypes.instanceOf(Date).isRequired,
  qnaViewCount: PropTypes.number.isRequired,
};

export default QnaItem;
