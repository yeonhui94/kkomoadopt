import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import Uploadfile from "./Uploadfile";
import { Form } from "react-router-dom";

// 폼으로 묶어줘~~~~

const Adopt_review_CommunityWt = ({gridArea}) => {
  return (
    <Form 
    style={{gridArea : gridArea}} className={wtstyles.Container}>
        {/* 제목과 인풋박스를 묶은 부분 */}
        <div className={wtstyles.inputContainer}>
          <h3>제목</h3>
          <input type="text" className={wtstyles.input} />
        </div>

        {/* 이미지와 파일첨부 버튼 */}
        <div className={wtstyles.inputContainer}>
          <h3>이미지 (필수)</h3>
          <Uploadfile/>
        </div>

        {/* 내용 입력 */}
        <div className={wtstyles.textAreaContainer}>
          <h3>내용</h3>
          <textarea className={wtstyles.textArea} defaultValue={``} />
        </div>

        {/* 등록 버튼 */}
        <div className={wtstyles.submitButtonContainer}>
          <button className={wtstyles.smallButton}>등록</button>
        </div>
    </Form>
  );
};
export default Adopt_review_CommunityWt;
