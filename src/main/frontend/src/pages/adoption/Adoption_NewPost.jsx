import { useState } from "react";
import Divider from "../../components/Divider";
import InputBox from "../../components/InputBox";
import InputField from "../../components/InputField";
import Uploadfile from "../community/adopt_review/Uploadfile";
import styles from "./AdoptNewPost.module.css"
import Button from "../../components/Button/Button";

const Adoption_NewPost=()=>{
    const [fileData, setFileData] = useState([]);

    // 파일 정보가 변경될 때마다 실행되는 함수
    const handleFileChange = (files) => {
        setFileData(files); // 선택된 파일 데이터 저장
    };

    return(
        <div>
            <div className={styles.postheader}>
            <Divider text={"입양"} width={"100%"} textAlign={"center"} fontSize={"1.5rem"}/>
            <InputBox backgroundColor={"#ededed"} padding={"none"} border={"1px solid var(--line-color)"} width={"100%"} padding2={"5px"}text={"제목"} placeholder={"예시 : 3세 / 믹스견 / 소심함"} height={"auto"} radius={"none"}></InputBox>
            <InputBox backgroundColor={"#ededed"} padding={"none"} border={"1px solid var(--line-color)"} padding2={"5px"}text={"카테고리"} placeholder={"강아지,고양이,기타동물 중 입력해주세요."} height={"auto"} radius={"none"}></InputBox>
            <InputBox backgroundColor={"#ededed"} padding={"none"} border={"1px solid var(--line-color)"} padding2={"5px"}text={"품종"}  placeholder={"예시 : 믹스견"}  height={"auto"}  radius={"none"}></InputBox>
            <InputBox backgroundColor={"#ededed"} padding={"none"} border={"1px solid var(--line-color)"} padding2={"5px"}text={"공고 번호"} placeholder={"예시 : 2025-05-10T09:00:00"} height={"auto"} radius={"none"}></InputBox>
            <InputBox backgroundColor={"#ededed"} padding={"none"} border={"1px solid var(--line-color)"} padding2={"5px"}text={"공고마감 날짜"} placeholder={"예시 : 2024-12-30"} height={"auto"}  radius={"none"}></InputBox>
            <Uploadfile
                maxFiles={4}  // 파일 1개만 선택 가능
                showImagePreview={false}  // 이미지 미리보기 활성화
                onChange={handleFileChange}  // 파일 목록이 변경되면 호출될 함수
            />
            <InputBox fixedText="고정된 텍스트" padding={"none"} border={"1px solid var(--line-color)"} padding2={"5px"}text={"내용"} height={"50px"} radius={"none"}></InputBox>
            <Button text={"등록"}></Button>
            </div>
        </div>
    )
}
export default Adoption_NewPost;