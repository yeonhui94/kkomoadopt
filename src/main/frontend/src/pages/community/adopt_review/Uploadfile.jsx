import React, { useState, useRef } from 'react';
import styles from "../../../pages/community/CommunityWt.module.css";

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

  return (
    <div className={styles.fileInputContainer}>
      <input
        className={styles.input}
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
      />
      <div className={styles.input}>
        {selectedFiles.length > 0 && (
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Uploadfile;
