import Button from "../../../components/Button/Button";
import gridStyles from "../../../styles/grid.module.css";
import Uploadfile from "../../community/adopt_review/Uploadfile";
import styles from "./QnaForm.module.css";
import PropTypes from "prop-types";

const QnaResult = ({ data }) => {
  return (
    <form>
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
        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow4}`}>
          문의 내용
        </label>
        <textarea
          className={`${gridStyles.spanCol5} ${gridStyles.spanRow4}`}
          value={data.content}
          disabled
        />
        <label className={`${gridStyles.spanCol1} ${gridStyles.spanRow4}`}>
          답변 내용
        </label>
        <textarea
          className={`${gridStyles.spanCol5} ${gridStyles.spanRow4}`}
          value={data.response}
          disabled
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
        <Button text="삭제" type="submit" />
      </div>
    </form>
  );
};

QnaResult.propTypes = {
  data: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }).isRequired,
};

export default QnaResult;
