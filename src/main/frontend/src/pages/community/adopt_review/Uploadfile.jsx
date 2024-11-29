import React, { useState, useRef } from 'react';
import styles from "../../../pages/community/CommunityWt.module.css";


const Uploadfile = () => {
    // const [files, setFiles] = useState([]);
    // const [message, setMessage] = useState('');
  
    // // 파일 선택 시 상태 업데이트
    // const onFilesChange = (e) => {
    //   setFiles(e.target.files);
    // };
  
    // // 파일 업로드 처리
    // const onFilesUpload = async () => {
    //   const formData = new FormData();
    //   for (let i = 0; i < files.length; i++) {
    //     formData.append('files', files[i]);
    //   }
  
    //   try {
    //     const response = await fetch('/uploadFiles', {
    //       method: 'POST',
    //       body: formData,
    //     });
  
    //     if (response.ok) {
    //       const data = await response.text();
    //       setMessage('업로드 성공: ' + data);
    //     } else {
    //       setMessage('업로드 실패');
    //     }
    //   } catch (error) {
    //     setMessage('업로드 중 오류 발생');
    //   }
    // };

    const [selectedFiles, setSelectedFiles] = useState([]); // 선택된 파일들을 저장
  const fileInputRef = useRef(null);

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // 선택한 파일들 가져오기
    setSelectedFiles(files);
  };

  // 버튼 클릭 시 파일 선택 창 열기
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
    return (
        <div className={styles.fileInputContainer}>
            <input className={styles.input} 
            type="file"
            ref={fileInputRef}
            // style={{ display: 'none' }} // 화면에서 숨기기
            multiple
            onChange={handleFileChange}
            />
            {/* <button className={styles.button}
            onClick={handleButtonClick}>파일첨부</button> */}
            <div className={styles.input}>
            {selectedFiles.length > 0 && (
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index} >
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



  // const [selectedFiles, setSelectedFiles] = useState([]); // 선택된 파일들을 저장
//   const fileInputRef = useRef(null);

//   // 파일 선택 핸들러
//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files); // 선택한 파일들 가져오기
//     setSelectedFiles(files);
//   };

//   // 버튼 클릭 시 파일 선택 창 열기
//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>파일 선택</button>
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }} // 화면에서 숨기기
//         multiple
//         onChange={handleFileChange}
//       />
//       {selectedFiles.length > 0 && (
//         <ul>
//           {selectedFiles.map((file, index) => (
//             <li key={index}>
//               {file.name} ({(file.size / 1024).toFixed(2)} KB)
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


