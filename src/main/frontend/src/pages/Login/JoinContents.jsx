import styled from 'styled-components';
import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from "../../pages/Login/JoinContents.module.css";
import {emailPattern, nicknamePattern, pwPattern} from "../../utils/regExp";
import { useState } from 'react';

const StyledDividerWrapper = styled.div`
  position: relative;
  margin-top: ${({ marTop }) => marTop || '0px'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;  /* 밑줄이 텍스트 바로 아래에 오도록 설정 */
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--line-color, #000); /* var(--line-color)를 사용할 수 있도록 설정 */
  }
`;
const StyledText = styled.p`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  padding-bottom: 8px;
  margin-left : 11px;
`;
const ValidationMessage = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  position: absolute;
  margin-left: 18px;
  margin-top : 100px;
`;

function JoinContents() {
  
  const navigate = useNavigate();

  const handleButtonClick1 = (e) => {
    e.preventDefault(); // 기본 동작(새로 고침)을 막습니다.
  
    // 모든 입력값과 체크박스 상태를 바탕으로 회원가입 버튼 활성화 여부 계산
    if (isFormValid) {
      navigate('/welcome'); // 유효성 검사 통과 시 '/welcome'으로 이동
    } else {
      alert("모든 항목을 올바르게 입력해주세요."); // 유효성 검사 실패 시 알림
    }
  };

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [validationMessage1, setValidationMessage1] = useState("");
  const [validationMessage2, setValidationMessage2] = useState("");
  const [messageColor1, setMessageColor1] = useState("");
  const [messageColor2, setMessageColor2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNciknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked); // 체크박스 상태 변경
  };


  const handleButtonClick = (e) => {
    e.preventDefault(); // 기본 동작(새로 고침)을 막습니다.

    // 이메일 유효성 검사
    if (emailPattern.test(email)) {
      setValidationMessage1(`사용 가능한 이메일 입니다.`);
      setMessageColor1("green"); 
    } else {
      setValidationMessage1("올바른 이메일이 아닙니다.");
      setMessageColor1("red"); // 조건 맞지 않는 경우
    }
  };

  const handleButton1Click = (e) => {
    e.preventDefault(); // 기본 동작(새로 고침)을 막습니다.

    // 이메일 유효성 검사
    if (nicknamePattern.test(nickname)) {
      setValidationMessage2(`사용 가능한 닉네임 입니다.`);
      setMessageColor2("green"); 
    } else {
      setValidationMessage2("중복된 닉네임 입니다.");
      setMessageColor2("red"); // 조건 맞지 않는 경우
    }
  };


  // 비밀번호 조건을 위한 정규 표현식
  // 비밀번호와 비밀번호 확인이 일치하는지 확인하는 함수
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

    // 비밀번호 유효성 검사
    if (!pwPattern.test(passwordValue)) {
      setPasswordError("비밀번호는 최소 8자 이상 16자이하, 숫자와 문자가 모두 포함되어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPass = event.target.value;
    setConfirmPassword(confirmPass);

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password === confirmPass) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const isFormValid =
  emailPattern.test(email) &&
  nicknamePattern.test(nickname) &&
  pwPattern.test(password) &&
  password === confirmPassword &&
  checkboxChecked;

  return (
    <div className={styles.JoinContentsContainer} style={{gridArea: "section"}}>
      <div className={styles.title}>
      <Divider text="회원가입"  />
      </div>

      <StyledDividerWrapper marTop="50px" className={styles.subTitle}>
        <Divider text="회원가입 정보" fontSize="20px" marBot="-4px" />
      </StyledDividerWrapper>

      <form className={styles.form1}>
            <InputBox 
                itype="text"
                fontSize="20px" 
                text="이름" 
                backgroundColor="white" 
                height="105px" width="85%"
                border="none" borderBottom="none"
                marginBottom="40px"/>

            <InputBox 
                itype="number"
                fontSize="20px" 
                text="휴대전화 번호" 
                backgroundColor="white" 
                height="105px" width="85%"
                border="none" borderBottom="none"
                marginBottom="40px"/>
                
        <form className={styles.form2}>
            <InputBox 
                itype="email"
                fontSize="20px" 
                text="이메일" 
                backgroundColor="white" 
                height="105px" width="98%"
                border="none" borderBottom="none"
                onChange={handleEmailChange}
                marginBottom="40px"
                placeholder="ex) example@naver.com"/>
            <Button 
                text="중복확인" 
                height="44px"
                width="100px" 
                fontSize="15px" 
                marginLeft="10px"
                marginTop="52px" 
                horizontalPadding="12px"
                onClick={handleButtonClick}/><br />
                {validationMessage1 && (
        <ValidationMessage color={messageColor1}>
          {validationMessage1}
        </ValidationMessage>
                )}
        </form>
        
        <from className={styles.from3}>
            <InputBox 
                itype="text"
                fontSize="20px" 
                text="닉네임" 
                backgroundColor="white" 
                height="105px" width="98%"
                border="none" borderBottom="none"
                marginBottom="40px"
                onChange={handleNciknameChange}/>
            <Button 
                text="중복확인" 
                height="44px"
                width="100px" 
                fontSize="15px"
                marginLeft="10px" 
                marginTop="52px" 
                horizontalPadding="12px"
                onClick={handleButton1Click}/><br />
                {validationMessage1 && (
        <ValidationMessage color={messageColor2}>
          {validationMessage2}
        </ValidationMessage>
                )}
        </from >

      <div>
        <InputBox 
                itype="password"
                fontSize="20px" 
                text="비밀번호" 
                backgroundColor="white" 
                height="105px" width="85%"
                border="none" borderBottom="none"
                marginBottom="40px"
                value={password}
                onChange={handlePasswordChange}/>

                {/* 비밀번호 유효성 검사 에러 메시지 */}
      {passwordError && <p style={{color: "red", fontSize: "16px",
                                   position: "absolute", marginTop : "-45px", marginLeft:"18px" }}>{passwordError}</p>}
                
        <InputBox 
                itype="password"
                fontSize="20px" 
                text="비밀번호 확인" 
                backgroundColor="white" 
                height="105px" width="85%"
                border="none" borderBottom="none"
                marginBottom="40px"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}/>

      {/* 비밀번호 일치 여부에 따른 메시지 표시 */}
      {passwordMatch !== null && (
        <p
          style={{
            color: passwordMatch ? "green" : "red",
            fontSize: "16px",
            position: "absolute",
            marginTop : "-45px",
            marginLeft:"20px"
          }}
        >
          {passwordMatch ? "비밀번호가 일치합니다" : "비밀번호가 일치하지 않습니다"}
        </p>
      )}
      </div>          

        <StyledText>개인정보 이용 약관 동의</StyledText>
        <div className={styles.div2}>
            <p>개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 
                    개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

                    1. 수집하는 개인정보
                    이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 
                    이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 
                    네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.</p>
        </div>
        
            <div className={styles.checkboxWrapper}>
              <label htmlFor="checkbox">약관에 동의 하십니까</label>
              <input 
                  type="checkbox" id="checkbox" 
                  style={{ width: "18px", height: "18px", marginLeft: "10px" }} 
                  checked={checkboxChecked}
                  onChange={handleCheckboxChange}
                    />
            </div>

            <Button text="회원가입" width="100%" height="60px"  onClick={handleButtonClick1} disabled={!isFormValid}/>  
        </form>
        <Outlet/>
    </div>
  );
}

export default JoinContents;
