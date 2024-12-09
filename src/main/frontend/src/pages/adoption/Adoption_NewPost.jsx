import { useState } from "react";
import Divider from "../../components/Divider";
import InputBox from "../../components/InputBox";
import Uploadfile from "../community/adopt_review/Uploadfile";
import styles from "./AdoptNewPost.module.css";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Adoption_NewPost = ({gridArea}) => {
    const [fileData, setFileData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 열기 상태


    const [formData, setFormData] = useState({
        title: "",
        category: "",
        breed: "",
        announcementNumber: "",
        closingDate: "",
        furColor: "",
        weight: "",
        age: "",
        foundLocation: "",
        characteristics: "",
        files: [] // 파일 데이터
    });


    const navigate = useNavigate();

    // 파일 정보가 변경될 때마다 실행되는 함수
    const handleFileChange = (files) => {
        setFormData((prevData) => ({
            ...prevData,
            files // 파일을 formData에 추가
        }));
    };

    const [text, setText] = useState("");

    // // 텍스트가 변경될 때마다 textarea 높이를 자동으로 조정
    // const handleChange = (e) => {
    //   const { value } = e.target;
    //   setText(value);
  
    //   // 텍스트의 내용에 따라 textarea 높이를 자동으로 조정
    //   e.target.style.height = 'auto';  // 높이를 'auto'로 설정해서 기본 높이로 리셋
    //   e.target.style.height = `${e.target.scrollHeight}px`; // 내용에 맞춰 높이 설정
    // };


        // 텍스트가 변경될 때마다 상태를 업데이트
        const handleInputChange = (e) => {
            console.log(handleInputChange)
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));

            setText(value);
        
            // 텍스트의 내용에 따라 textarea 높이를 자동으로 조정
            e.target.style.height = 'auto';  // 높이를 'auto'로 설정해서 기본 높이로 리셋
            e.target.style.height = `${e.target.scrollHeight}px`; // 내용에 맞춰 높이 설정
        };





    // 폼 데이터를 서버로 전송하는 함수
    const handleSubmit = async () => {
        console.log("Submitting form...");
        try {
            const response = await axios.post("YOUR_API_ENDPOINT", formData); // 실제 API 엔드포인트로 교체
            console.log(response);  // 응답 확인
            if (response.status === 200) {
                console.log("Success!");
                setIsModalOpen(true); // 성공 시 모달 열기
            } else {
                console.error("Unexpected response status:", response.status);
            }
        } catch (error) {
            console.error("Error posting data:", error);
            // 에러 처리 (예: 에러 메시지 표시)
        }
    };
    

    // 모달에서 확인 버튼 클릭 시 페이지 이동
    const handleConfirm = async(e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        await handleSubmit();//서버에 데이터 전송 후 이동
        navigate("/adoption");  // '입양' 페이지로 이동
        closeModal();

    };


        // 모달을 닫는 함수
        const closeModal = () => {
            setIsModalOpen(false);  // 모달 닫기
        };



    // InputBox 설정 정보 배열
    const inputFields = [
        { text: "제목", placeholder: "예시 : 3세 / 믹스견 / 소심함", border1: "1px solid var(--mainpage-dark)", border: "none" },
        { text: "카테고리", placeholder: "강아지, 고양이, 기타동물 중 입력해주세요.", backgroundColor1: "var(--sub-color)" },
        { text: "품종", placeholder: "예시 : 믹스견", backgroundColor1: "var(--sub-color)" },
        { text: "공고 번호", placeholder: "예시 : 2025-05-10T09:00:00", backgroundColor1: "var(--sub-color)" },
        { text: "공고마감 날짜", placeholder: "예시 : 2024-12-30", backgroundColor1: "var(--sub-color)" }
    ];

    // 각 textarea에 대한 설정 배열
    const fields = [
        { label: "털색", placeholder: "털색을 입력하세요." },
        { label: "체중", placeholder: "체중을 입력하세요." },
        { label: "나이", placeholder: "나이를 입력하세요." },
        { label: "발견장소", placeholder: "발견장소를 입력하세요." },
        { label: "특징", placeholder: "특징을 입력하세요." },
    ];

    return (
        <div style={{ gridArea }}>
            <div className={styles.postheader}>
                <Divider text={"입양"} width={"100%"} textAlign={"center"} paddingbt={"10px"} fontSize={"1.5rem"} />

                {/* InputBox 컴포넌트를 map을 사용해 반복 렌더링 */}
                {inputFields.map((field, index) => (
                    <InputBox
                        key={index}
                        value={formData[field.text]}
                        backgroundColor={field.backgroundColor1 || "white"}
                        padding2={"none"}
                        onChange={handleInputChange}
                        border1={field.border1 || "none"}
                        padding3={"5px"}
                        text={field.text}
                        placeholder={field.placeholder}
                        height={"auto"}
                        borderBottom={"1px solid #ededed"}
                        border={field.border || "1px solid #ededed"}
                        radius={"none"}
                        width1={"none"}
                    />
                ))}

                <Uploadfile
                    maxFiles={4}  // 파일 1개만 선택 가능
                    showImagePreview={false}  // 이미지 미리보기 활성화
                    onChange={handleFileChange}  // 파일 목록이 변경되면 호출될 함수
                />

                <div className={styles.textarea}>
                    <p className={styles.p}>내용</p>
                    {/* 반복되는 textarea 요소들 */}
                    <div className={styles.textareaWrapper}>
                        {fields.map((field, index) => (
                            <div key={index} className={styles.fixedTextWrapper}>
                                <span className={styles.fixedText}>{field.label}: </span>
                                <textarea
                                    className={styles.textareaField}
                                    value={formData[field.label]}
                                    placeholder={field.placeholder}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.postbtn}>
                    <Button text={"등록"} onClick={handleSubmit} />
                </div>
            </div>
            <Modal 
                isOpen={isModalOpen} 
                closeModal={closeModal} 
                modalText="입양 게시물이 등록되었습니다."
                confirmText="확인"
                cancelText="취소"
                onConfirm={handleConfirm} //입양페이지로 이동
            />
            <Outlet/>
        </div>
    );
}

export default Adoption_NewPost;
