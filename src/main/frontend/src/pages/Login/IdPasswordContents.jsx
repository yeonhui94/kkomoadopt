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
                <IdPassword text1="이름" text2="휴대폰 번호" type1="text" type2="tel" labelMarginLeft1="67px"/>
            </div>

            <div className={styles.findPassword}>
                <Divider text="비밀번호 찾기" marTop="65px" fontSize="20px" marBot="-5px"/>
                <IdPassword text1="이메일" text2="휴대폰 번호" type1="email" type2="tel" labelMarginLeft1="50px" />
            </div>
            <Outlet />
        </div>
    )
}

export default IdPasswordContents;