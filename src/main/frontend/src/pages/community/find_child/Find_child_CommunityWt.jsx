import styled from "styled-components";
import { Form, Link, useNavigate } from "react-router-dom";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import Uploadfile from "../adopt_review/Uploadfile";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const Find_child_CommunityWt = ({ text, gridArea }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
  
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅

  const handleFileChange = (files) => {
    console.log('선택된 파일', files);
    setFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('제목:', title);
    console.log('내용:', content);
    console.log('파일들:', files);

    // 제목과 내용이 비어있지 않으면 처리
    if (title && content) {
      const postData = {
        title,
        content,
        image: files.length > 0 ? files[0] : null, // 파일이 있으면 저장, 없으면 null
        date: new Date(),
      };

      // 로컬스토리지에서 기존 게시글 목록을 가져옴
      const existingPosts = JSON.parse(localStorage.getItem('newPosts')) || [];

      // 새로운 게시글을 목록에 추가
      existingPosts.push(postData);

      // 로컬스토리지에 저장
      localStorage.setItem('newPosts', JSON.stringify(existingPosts));
      console.log("게시글 저장 완료");

      // 폼 제출 후 이동
      navigate('/community/find-child');
    } else {
      console.log('모든 필드를 채워주세요');
    }
  };

  return (
    <div className="commwrapper" style={{ gridArea: gridArea }}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{ textAlign: "center" }}>{text = "아이를 찾습니다"}</h1>
        <Divider />
        <Form
          className={wtstyles.Container}
          onSubmit={handleSubmit}
        >
          {/* 제목과 인풋박스를 묶은 부분 */}
          <div className={wtstyles.inputContainer}>
            <h3 style={{ color: "#444" }}>제목</h3>
            <input
              type="text"
              className={wtstyles.input}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              onChange={(e) => setContent(e.target.value)}
              value={content} // value 사용
            />
          </div>

          {/* 등록 버튼 */}
          <div className={wtstyles.submitButtonContainer}>
            <Button className={wtstyles.smallButton} text={"등록"} width={"100px"} fontSize={"20px"} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Find_child_CommunityWt;