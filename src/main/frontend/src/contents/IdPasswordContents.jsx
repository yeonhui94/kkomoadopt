import Divider from "../components/Divider";
import IdPassword from "../components/IdPassword";


function IdPasswordContents(){
    return(
        <div>
            <Divider text="아이디/비밀번호 찾기" marTop="50px" />
            <div>
            <Divider text="아이디 찾기" marTop="84px" fontSize="20px"marBot="-5px"/>
            <IdPassword text1="이름" text2="휴대폰 번호" type1="text" type2="number" labelMarginLeft1="67px"/>
            </div>

            <div>
            <Divider text="비밀번호 찾기" marTop="65px" fontSize="20px" marBot="-5px"/>
            <IdPassword text1="이메일" text2="인증번호" type1="email" type2="number" labelMarginLeft1="48px" labelMarginLeft2="28px"/>
            </div>
        </div>
    )
}

export default IdPasswordContents;