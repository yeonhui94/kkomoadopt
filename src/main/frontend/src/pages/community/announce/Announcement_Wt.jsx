import styled from "styled-components";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import { Form, Link, useOutletContext } from "react-router-dom";
import Uploadfile from "../adopt_review/Uploadfile";
import { useState } from "react";
import Button from "../../../components/Button/Button";


const Announcement_Wt = ({gridArea, text = "공지사항"}) => {

  const [title, setTitle] = useState("");  // 제목
  const [content, setContent] = useState("");  // 내용
  const [files, setFiles] = useState([]);  // 파일들

  // 폼 제출 시 동작sdfsdsdfsdfd
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로딩 방지

    // 새로운 게시물 데이터
    const newPost = {
      title: "새 게시물 제목",
      content: "새 게시물 내용",
      files: selectedFiles,
  };

    // addPost 함수로 게시물 추가
    addPost(newPost);

    // 폼 초기화
    setTitle("");
    setContent("");
    setFiles([]);
  };



  return (
    <div className="commwrapper"
    style={{gridArea : gridArea}}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{textAlign :"center"}}>{text}</h1>
        <Divider />
        <Form 
        style={{gridArea : gridArea}} className={wtstyles.Container}
        onSubmit={handleSubmit} >
        {/* 제목과 인풋박스를 묶은 부분 */}
        <div className={wtstyles.inputContainer}>
          <h3>제목</h3>
          <input type="text" className={wtstyles.input} 
          value={title}
          onChange={(e) => setTitle(e.target.value)}  // 제목 입력 처리
          />
        </div>

        {/* 이미지와 파일첨부 버튼dfdf */}
        <div className={wtstyles.inputContainer}>
          <h3>이미지 (필수)</h3>
          <Uploadfile setFiles={setFiles}/>
        </div>

        {/* 내용 입력 */}
        <div className={wtstyles.textAreaContainer}>
          <h3>내용</h3>
          <textarea className={wtstyles.textArea} defaultValue={``} 
          value={content}
          onChange={(e) => setContent(e.target.value)}  // 내용 입력 처리
          />
        </div>

        {/* 등록 버튼dfdfd */}
        <Link to ="/commu" className={wtstyles.submitButtonContainer}>
          <Button className={wtstyles.smallButton} text={"등록"} width={"100px"} fontSize={"20px"}/>
        </Link>
    </Form>
    </div>
    </div>
  );
};
export default Announcement_Wt;
