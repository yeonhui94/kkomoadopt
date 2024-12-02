import React, { useState, useRef } from 'react';
import styles from "../../../pages/community/CommunityWt.module.css";
import Button from '../../../components/Button/Button';
import LinkButton from '../../../components/MyPage/MypageNaviBar/LinkButton';

const Uploadfile = ({ maxFiles = 4 }) => {
  const [selectedFiles, setSelectedFiles] = useState([]); // 선택된 파일들을 저장
  const fileInputRef = useRef(null);

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files); // 선택한 파일들 가져오기

    // 선택한 파일 수가 maxFiles를 초과시 팝업 띄우기
    if (newFiles.length + selectedFiles.length > maxFiles) {
      alert(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`);
      return;
    }

    // 선택된 파일 배열 업데이트
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // 버튼 클릭 시 파일 선택 창 열기
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };


  const handleRemoveFile = (index) => {
    // 파일 삭제 처리
     // selectedFiles 배열에서 해당 파일을 삭제합니다.
     setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      return updatedFiles;
    });
    

    
  };


  return (
    <div className={styles.fileInputContainer}>
      <input
        className={styles.input}
        type="file"
        ref={fileInputRef}
        diss
        multiple
        onChange={handleFileChange}
        style={{display : 'none'}}
      /> 
      <Button
        text={"파일첨부"}
        bg1color={"#bbb"}
        color={"#444"}
        onClick={() => fileInputRef.current.click()}
      />
      <div style={{color : "var(--main-color)" , fontWeight: "600" , fontSize : "12px"}}> * {selectedFiles.length} 개 파일이 첨부되었습니다.</div>
        {selectedFiles.length > 0 && (

          <div className={styles.input}>
            
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name} ({(file.size / 1024).toFixed(2)} KB) 
               <Button
               bg1color={"white"}
               text={"X"}
               color={"#444"}
               hovercolor={"var(--main-color)"}
               fontWeight={"600"}
               onClick={() => handleRemoveFile(index)}
               />
              </li>
            ))}
          </ul>
          </div>
        )}
    </div>
  );
};

export default Uploadfile;
