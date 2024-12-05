import { Outlet } from "react-router-dom";
import Divider from "../../components/Divider";
import IdPassword from "../../components/IdPassword";
import styles from "../../pages/Login/IdPasswordContents.module.css";

function IdPasswordContents(){
    return(
        <div className={styles.IdPasswordContainer} style={{gridArea: "section"}}>
            <div className={styles.IdPasswordTitle}>
                <Divider text="아이디/비밀번호 찾기" marTop="10px"/>
            </div>

            <div className={styles.findId}>
                <Divider text="아이디 찾기" marTop="65px" fontSize="20px"/>
                <IdPassword text1="이름" text2="휴대폰 번호" type1="text" type2="tel" labelMarginLeft1="67px" modalTxt="회원님의 아이디는 abcde**@naver.com 입니다!"/>
            </div>

            <div className={styles.findPassword}>
                <Divider text="비밀번호 찾기" marTop="65px" fontSize="20px" marBot="-5px"/>
                <IdPassword text1="이메일" text2="휴대폰 번호" type1="email" type2="tel" labelMarginLeft1="50px" modalTxt="임시비밀번호는 asdf1234 입니다!" />
            </div>
            <Outlet />
        </div>
    )
}

export default IdPasswordContents;