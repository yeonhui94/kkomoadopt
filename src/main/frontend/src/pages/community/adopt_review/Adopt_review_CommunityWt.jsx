import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import styles from "../CommunityWt.module.css";

const Adopt_review_CommunityWt = ({gridArea}) => {
  return (
    <div 
    style={{gridArea : gridArea}}>
        {/* 등록 버튼 */}
        <div className={styles.submitButtonContainer}>
          <button className={styles.smallButton}>등록</button>
        </div>

        {/* 제목과 인풋박스를 묶은 부분 */}
        <div className={styles.inputContainer}>
          <h3>제목</h3>
          <input type="text" className={styles.input} />
        </div>

        {/* 이미지와 파일첨부 버튼 */}
        <div className={styles.inputContainer}>
          <h3>이미지 (필수)</h3>
          <div className={styles.fileInputContainer}>
            <input type="text" className={styles.input} />
            <button className={styles.button}>파일첨부</button>
          </div>
        </div>

        {/* 내용 입력 */}
        <div className={styles.textAreaContainer}>
          <h3>내용</h3>
          <textarea className={styles.textArea} defaultValue={``} />
        </div>
    </div>
  );
};
export default Adopt_review_CommunityWt;
