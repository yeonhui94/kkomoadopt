import styled from "styled-components";
import { Form, Link, useNavigate } from "react-router-dom";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import Uploadfile from "../adopt_review/Uploadfile";
import Button from "../../../components/Button/Button";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { useState } from "react";

const Find_child_CommunityWt = ({ text, gridArea }) => {
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
      const formData  = new FormData();
      formData.append("postCategory", "FINDCHILD");
      formData.append("postTitle", state.postTitle);
      formData.append("postContent", state.postContent);
      formData.append("files", files);

      actions.createCommunityPostAction(formData);

      // 폼 제출 후 이동
      alert("게시글이 작성되었습니다!");
      navigate("/community/find-child");
    } else {
      console.log("모든 필드를 채워주세요");
    }
  };

  return (
    <div className="commwrapper" style={{ gridArea: gridArea }}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{ textAlign: "center" }}>{(text = "아이를 찾습니다")}</h1>
        <Divider />
        <Form className={wtstyles.Container} >
          {/* 제목과 인풋박스를 묶은 부분 */}
          <div className={wtstyles.inputContainer}>
            <h3 style={{ color: "#444" }}>제목</h3>
            <input
              type="text"
              className={wtstyles.input}
              onChange={(e) => actions.changePostTitle(e.target.value)}
              value={state.postTitle}
            />
          </div>

          {/* 이미지와 파일첨부 버튼 */}
          <div className={wtstyles.inputContainer}>
            <h3>이미지 (필수)</h3>
            <Uploadfile onChange={handleFileChange} />
          </div>

          {/* 내용 입력 */}
          <div className={wtstyles.textAreaContainer}>
            <h3>내용</h3>
            <textarea
              className={wtstyles.textArea}
              onChange={(e) => actions.changePostContent(e.target.value)}
              value={state.postContent} // value 사용
            />
          </div>

          {/* 등록 버튼 */}
          <div className={wtstyles.submitButtonContainer}>
            <Button
              onClick={handleSubmit}
              className={wtstyles.smallButton}
              text={"등록"}
              width={"100px"}
              fontSize={"20px"}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Find_child_CommunityWt;
