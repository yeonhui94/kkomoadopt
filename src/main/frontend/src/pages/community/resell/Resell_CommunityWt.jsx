import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import styles from "../CommunityWt.module.css";
import { Form, Outlet } from "react-router-dom";
import { useState } from "react";
import Uploadfile from "../adopt_review/Uploadfile";
import Button from "../../../components/Button/Button";
import wtstyles from "../CommunityWt.module.css";

const Resell_CommunityWt = ({ text = "사고팝니다" , gridArea}) => {
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
          <textarea className={styles.textArea} defaultValue={`\n물품명:\n\n\n번호:\n\n\n판매하고 싶은 금액:\n구매하고 싶은 금액:\n\n상품 상세설명:\n\n\n사진첨부\n`} />
        </div>

         {/* 등록 버튼 */}
         <a className={wtstyles.submitButtonContainer}>
          <Button className={wtstyles.smallButton} text={"등록"} width={"100px"} fontSize={"20px"}/>
        </a>
    </Form>
  );
};
export default Resell_CommunityWt;
