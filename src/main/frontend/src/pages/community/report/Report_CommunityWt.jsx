import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import { Form, Link, useOutletContext } from "react-router-dom";
import Uploadfile from "../adopt_review/Uploadfile";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { useNavigate } from "react-router-dom";

const Report_CommunityWt = ({ gridArea, text = "신고합니다" }) => {
  const { state, actions } = useStore();
  const [files, setFiles] = useState(null);

  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  const handleFileChange = (files) => {
    console.log("선택된 파일", files);

    const reader = new FileReader();

    reader.onloadend = () => {
      setFiles([reader.result]);
    };

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제목과 내용이 비어있지 않으면 처리
    if (state.postTitle && state.postContent) {
      const formData = new FormData();
      formData.append("postCategory", "REPORT");
      formData.append("postTitle", state.postTitle);
      formData.append("postContent", state.postContent);
      formData.append("files", files);

      actions.createCommunityPostAction(formData);

      // 폼 제출 후 이동
      alert("게시글이 작성되었습니다!");
      navigate("/community/report");
    } else {
      console.log("모든 필드를 채워주세요");
      alert("모든 필드를 채워주세요");
    }
  };

  return (
    <div className="commwrapper" style={{ gridArea: gridArea }}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{ textAlign: "center" }}>{text}</h1>
        <Divider />
        <Form
          style={{ gridArea: gridArea }}
          className={wtstyles.Container}
          onSubmit={handleSubmit}
        >
          {/* 제목과 인풋박스를 묶은 부분 */}
          <div className={wtstyles.inputContainer}>
            <h3>제목</h3>
            <input
              type="text"
              className={wtstyles.input}
              value={state.postTitle}
              onChange={(e) => actions.changePostTitle(e.target.value)}
            />
          </div>

          {/* 이미지와 파일첨부 버튼 */}
          <div className={wtstyles.inputContainer}>
            <h3>이미지 (필수)</h3>
            <Uploadfile onChange={handleFileChange}/>
          </div>

          {/* 내용 입력 */}
          <div className={wtstyles.textAreaContainer}>
            <h3>내용</h3>
            <textarea
              className={wtstyles.textArea}
              onChange={(e) => actions.changePostContent(e.target.value)}
              value={state.postContent}
            />
          </div>

          {/* 등록 버튼 */}
          <Link className={wtstyles.submitButtonContainer}>
            <Button
              className={wtstyles.smallButton}
              text={"등록"}
              width={"100px"}
              fontSize={"20px"}
              onClick={handleSubmit}
            />
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default Report_CommunityWt;
