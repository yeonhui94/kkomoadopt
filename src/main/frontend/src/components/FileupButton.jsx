import React, { useState } from "react";
import "./FileupButton.css";

const FileupButton = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // 파일 크기 확인 (10MB = 10 * 1024 * 1024 bytes)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("파일 크기가 10MB를 초과할 수 없습니다.");
        setFile(null);
      } else if (!selectedFile.type.startsWith("image/")) {
        setError("이미지 파일만 업로드할 수 있습니다.");
        setFile(null);
      } else {
        setError(""); // 오류 메시지 초기화
        setFile(selectedFile);
      }
    }
  };

  return (
    <div className="file-upload-container">
      <form className="file-upload-form">
        <div className="instruction-box">
          {file ? (
            <p className="file-name">첨부된 파일: {file.name}</p>
          ) : (
            <p className="placeholder-text">10MB 미만의 이미지 파일을 업로드 해주세요</p>
          )}
        </div>
        <input
          type="file"
          accept="image/*"  // 이미지 파일만 선택 가능
          onChange={handleFileChange}
          className="file-input"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="file-select-button">
          파일 선택
        </label>
      </form>
      {error && <p className="error-message">{error}</p>} {/* 오류 메시지를 박스 하단에 표시 */}
    </div>
  );
};

export default FileupButton;