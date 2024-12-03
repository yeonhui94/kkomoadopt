import Divider from "../../components/Divider";
import Uploadfile from "../community/adopt_review/Uploadfile";
import Button from "../../components/Button/Button"
import styles from "./Changeprofile.module.css";
import InputBox from "../../components/InputBox";
import InputField from "../../components/InputField";
import { useState } from "react";

const ChangeProfile = () => {

    const [fileData, setFileData] = useState([]);

    // 파일 정보가 변경될 때마다 실행되는 함수
    const handleFileChange = (files) => {
        setFileData(files); // 선택된 파일 데이터 저장
    };

    return (
        <div className={styles.chfWrapper} >
            <Divider text={"프로필 변경"} fontweight={"midium"} ></Divider>
            <div className={styles.chfsmWrapper}>
            <div className={styles.chfsmWrapper1}>
                <div className={styles.divider}  >
                    <Divider text={"프로필 사진"} height={"2px"} fontSize={"1rem"} fontweight={"midium"} width={"100%"} backgroundColor={"var(--line-color)"}></Divider>
                </div>
                <div>
                    <Uploadfile
                        maxFiles={1}  // 파일 1개만 선택 가능
                        showImagePreview={true}  // 이미지 미리보기 활성화
                        onChange={handleFileChange}  // 파일 목록이 변경되면 호출될 함수
                    />
                </div>
            </div>
            <div className={styles.chfsmWrapper2}>
                <div className={styles.divider}  >
                    <Divider text={"프로필 소개글"} height={"2px"} fontSize={"1rem"} fontweight={"midium"} width={"100%"} backgroundColor={"var(--line-color)"}></Divider>
                </div>
                <InputField maxLength={15} width={"-webkit-fill-available"} placeholder={"소개글을 입력해주세요.(최대 15자)"} height={"auto"}></InputField>
            </div>
            </div>
            <div className={styles.chfsmWrapper2}>
                <Button text={"수정"} width={"100%"}></Button>
            </div>
        </div>
    )
};
export default ChangeProfile;