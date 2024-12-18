import styled from "styled-components";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import { Form, Link, useOutletContext } from "react-router-dom";
import Uploadfile from "../adopt_review/Uploadfile";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { useNavigate } from "react-router-dom";


const Announcement_Wt = ({ gridArea, text = "공지사항" }) => {
  const { state, actions } = useStore();
  const [files, setFiles] = useState(null);

  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  // 파일 변경 시 호출되는 함수
  const handleFileChange = (selectedFiles) => {
    console.log("선택된 파일", selectedFiles);
    setFiles(selectedFiles); // 파일 객체 그대로 상태에 저장
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.postTitle && state.postContent) {
      const formData = new FormData();
      formData.append("postCategory", "ANNOUNCEMENT");
      formData.append("postTitle", state.postTitle);
      formData.append("postContent", state.postContent);

      // 파일이 존재하면 FormData에 추가
      if (files && files.length > 0) {
        Array.from(files).forEach((file, index) => {
          formData.append("files", file); // 파일 객체 추가
        });
      }

      // 액션 호출 (서버로 데이터 전송)
      actions.createCommunityPostAction(formData);

      // 폼 제출 후 이동
      alert("게시글이 작성되었습니다!");
      navigate("/community");
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
          {/* 제목 입력 */}
          <div className={wtstyles.inputContainer}>
            <h3>제목</h3>
            <input
              type="text"
              className={wtstyles.input}
              value={state.postTitle}
              onChange={(e) => actions.changePostTitle(e.target.value)}
            />
          </div>

          {/* 파일 첨부 */}
          <div className={wtstyles.inputContainer}>
            <h3>이미지 (필수)</h3>
            <Uploadfile onChange={handleFileChange} />
          </div>

          {/* 내용 입력 */}
          <div className={wtstyles.textAreaContainer}>
            <h3>내용</h3>
            <textarea
              className={wtstyles.textArea}
              value={state.postContent}
              onChange={(e) => actions.changePostContent(e.target.value)}
            />
          </div>

          {/* 등록 버튼 */}
          <div className={wtstyles.submitButtonContainer}>
            <Button
              className={wtstyles.smallButton}
              text={"등록"}
              width={"100px"}
              fontSize={"20px"}
              onClick={handleSubmit}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Announcement_Wt;
