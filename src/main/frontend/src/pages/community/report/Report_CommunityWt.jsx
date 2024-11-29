import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import styles from "../CommunityWt.module.css";
import { Form, useOutletContext } from "react-router-dom";
import Uploadfile from "../adopt_review/Uploadfile";

const Report_CommunityWt = ({ gridArea}) => {

  return (
    <Form 
    style={{gridArea : gridArea}} className={styles.Container}>
        {/* 제목과 인풋박스를 묶은 부분 */}
        <div className={styles.inputContainer}>
          <h3>제목</h3>
          <input type="text" className={styles.input} />
        </div>

        {/* 이미지와 파일첨부 버튼 */}
        <div className={styles.inputContainer}>
          <h3>이미지 (필수)</h3>
          <Uploadfile/>
        </div>

        {/* 내용 입력 */}
        <div className={styles.textAreaContainer}>
          <h3>내용</h3>
          <textarea className={styles.textArea} defaultValue={`\n신고대상:\n\n신고 게시물 번호:\n신고 내용:\n\n첨부자료:\n`} />
        </div>
        
        {/* 등록 버튼 */}
        <div className={styles.submitButtonContainer}>
          <button className={styles.smallButton}>등록</button>
        </div>
    </Form>
  );
};
export default Report_CommunityWt;
