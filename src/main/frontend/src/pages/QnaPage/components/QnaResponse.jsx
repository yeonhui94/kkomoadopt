import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../../components/Button/Button";
import gridStyles from "../../../styles/grid.module.css";
import styles from "./QnaForm.module.css";
import PropTypes from "prop-types";

const QnaResult = ({ data, onAnswerSubmit }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.includes('admin');
  const isResponseEmpty = !data.response || data.response.trim() === "";

  // 관리자가 답변을 수정할 수 있도록 상태 관리
  const [response, setResponse] = useState(data.response);

  // 답변 내용 변경 시 호출되는 함수
  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onAnswerSubmit) {
      // 답변을 제출하면, 부모 컴포넌트에 상태 업데이트를 요청
      onAnswerSubmit(data.id, response); // 답변 내용도 함께 전달
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.gridResponseContainer}>
        <label className={gridStyles.spanCol1}>닉네임</label>
        <input
          className={gridStyles.spanCol1}
          type="text"
          value={data.nickname}
          disabled
        />
        <label className={gridStyles.spanCol2}>연락처</label>
        <input
          className={gridStyles.spanCol2}
          type="text"
          value={data.contact}
          disabled
        />
        <label className={gridStyles.spanCol1}>제목</label>
        <input
          className={gridStyles.spanCol5}
          type="text"
          value={data.title}
          disabled
        />
        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow4}`}>문의 내용</label>
        <textarea
          className={`${gridStyles.spanCol5} ${gridStyles.spanRow4}`}
          value={data.content}
          disabled
        />
        
        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow4}`}>답변 내용</label>
        <textarea
          className={`${gridStyles.spanCol5} ${gridStyles.spanRow4}`}
          value={response} // 상태 값으로 설정
          onChange={handleResponseChange} // 입력 시 상태 업데이트
          disabled={!isAdminPage || !isResponseEmpty} // 관리자가 아니거나 답변이 이미 있으면 수정 불가
        />

        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow4}`}>첨부 파일</label>
        <div className={`${gridStyles.spanCol5} ${gridStyles.spanRow4}`}>
          {data.files && data.files.length > 0 ? (
            data.files.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <a href={file.url} download>
                  {file.name} (다운로드)
                </a>
              </div>
            ))
          ) : (
            <span>첨부된 파일이 없습니다.</span>
          )}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        {isAdminPage ? (
          // 관리자인 경우
          isResponseEmpty ? (
            <Button text="등록" type="submit" />
          ) : null
        ) : (
          // 관리자가 아닌 경우
          <Button text="삭제" type="submit" />
        )}
      </div>
    </form>
  );
};

QnaResult.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nickname: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }).isRequired,
  onAnswerSubmit: PropTypes.func.isRequired, // 부모에서 전달되는 답변 제출 함수
};

export default QnaResult;
