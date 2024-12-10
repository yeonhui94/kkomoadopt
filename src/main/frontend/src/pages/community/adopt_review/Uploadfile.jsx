import { useRef, useState } from "react";
import Button from "../../../components/Button/Button";

const Uploadfile = ({ maxFiles = 4, showImagePreview = true, onChange }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    
    if (newFiles.length + selectedFiles.length > maxFiles) {
      alert(`최대 ${maxFiles}개의 파일만 업로드할 수 있습니다.`);
      return;
    }

    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...newFiles];
      
      if (typeof onChange === 'function') {
        onChange(updatedFiles);  // 부모 컴포넌트로 파일 목록 전달
      }

      return updatedFiles;
    });
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    
    if (typeof onChange === 'function') {
      onChange(updatedFiles);  // 부모 컴포넌트로 변경된 파일 목록 전달
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Button
        text={"파일첨부"}
        bg1color={"#d1d1d1"}
        color={"#444"}
        width={"100%"}
        onClick={() => fileInputRef.current.click()}
      />
      
      {selectedFiles.length > 0 && (
        <div style={{ color: "var(--main-color)", fontWeight: "600", fontSize: "0.7rem", whiteSpace: "nowrap" }}>
          * {selectedFiles.length} 개 파일이 첨부되었습니다.
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div >
          <ul style={{width : "50%", display:"flex", flexWrap:"wrap"}}>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.type.startsWith('image/') && showImagePreview ? (
                  <div style={{ display: "flex" }}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', margin: "10px" }}
                    />
                    <Button
                      bg1color={"white"}
                      text={"X"}
                      color={"#444"}
                      hovercolor={"var(--main-color)"}
                      fontWeight={"600"}
                      onClick={() => handleRemoveFile(index)}
                      verticalPadding={"none"}
                      horizontalPadding={"none"}
                    />
                  </div>
                ) : (
                  <div>
                    <span>{file.name} ({(file.size / 1024).toFixed(2)} KB)</span>
                    <Button
                      bg1color={"white"}
                      text={"X"}
                      color={"#444"}
                      hovercolor={"var(--main-color)"}
                      fontWeight={"600"}
                      onClick={() => handleRemoveFile(index)}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Uploadfile;
