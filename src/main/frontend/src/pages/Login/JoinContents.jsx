import styled from 'styled-components';
import Divider from '../../components/Divider';
import Button from '../../components/Button/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from "../../pages/Login/JoinContents.module.css";
import { emailPattern, nicknamePattern, pwPattern } from "../../utils/regExp";
import { useState } from 'react';
import { useStore } from '../../stores/UserStore2/useStore';
import InputBox from '../../components/InputBox';

const StyledDividerWrapper = styled.div`
  position: relative;
  margin-top: ${({ marTop }) => marTop || '0px'};

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--line-color, #000);
  }
`;

const StyledText = styled.p`
  font-size: ${({ fontSize }) => fontSize || "18px"};
  padding-bottom: 8px;
  margin-left: 11px;
`;

const ValidationMessage = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  position: relative;
  left: 8px;
  bottom: 40px;
`;

function JoinContents() {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [validationMessage1, setValidationMessage1] = useState("");
  const [validationMessage2, setValidationMessage2] = useState("");
  const [messageColor1, setMessageColor1] = useState("");
  const [messageColor2, setMessageColor2] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const { state, actions } = useStore();
  const navigate = useNavigate();

  // 유효성 검사 및 폼 제출
  const handleFormSubmit = async (e) => {

    e.preventDefault(); // 폼 기본 동작 방지
    console.log("폼 제출 시도"); // 디버그 로그 추가
    console.log("isFormValid:", isFormValid);
    console.log("Email valid:", emailPattern.test(formData.email));
    console.log("Nickname valid:", nicknamePattern.test(formData.nickname));
    console.log("Password valid:", pwPattern.test(formData.password));
    console.log("Password match:", formData.password === confirmPass);
    console.log("Checkbox checked:", checkboxChecked);
    if (!isFormValid) {
      alert("모든 항목을 올바르게 입력해주세요.");
      return;
    }

    const userData = { ...formData };

    try {
        console.log("회원가입 요청 데이터:", userData);
      await actions.register(userData); // 액션을 통해 상태 변경
      console.log("회원가입성공")
      navigate("/welcome");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
//     console.log("Changing input:", id, value);
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleEmailCheck = (e) => {
    e.preventDefault();

    if (emailPattern.test(formData.email)) {
      setValidationMessage1("사용 가능한 이메일 입니다.");
      setMessageColor1("green");
    } else {
      setValidationMessage1("올바른 이메일이 아닙니다.");
      setMessageColor1("red");
    }
  };

  const handleNicknameCheck = (e) => {
    e.preventDefault();

    if (nicknamePattern.test(formData.nickname)) {
      setValidationMessage2("사용 가능한 닉네임 입니다.");
      setMessageColor2("green");
    } else {
      setValidationMessage2("중복된 닉네임 입니다.");
      setMessageColor2("red");
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: passwordValue,
    }));
    if (!pwPattern.test(passwordValue)) {
      setPasswordError("비밀번호는 최소 8자 이상 16자 이하, 숫자와 문자가 모두 포함되어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

    const handleConfirmPasswordChange = (e) => {
      const value = e.target.value;
      setConfirmPass(value);

      if (formData.password === value) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    };


const isFormValid =
  emailPattern.test(formData.email) &&
  nicknamePattern.test(formData.nickname) &&
  pwPattern.test(formData.password) &&
  formData.password === confirmPass &&
  checkboxChecked;

  return (
    <div className={styles.JoinContentsContainer} style={{ gridArea: "section" }}>
      <div className={styles.title}>
        <Divider text="회원가입" />
      </div>

      <StyledDividerWrapper marTop="50px" className={styles.subTitle}>
        <Divider text="회원가입 정보" fontSize="20px" marBot="-4px" />
      </StyledDividerWrapper>

      <form className={styles.form1} onSubmit={handleFormSubmit}>
        <div className={styles.inputWrapper}>
          {/* <label htmlFor="name">이름</label> */}
          <InputBox
            itype="text"
            fontSize="20px"
            text="이름"
            backgroundColor="white"
            height="105px"
            width="85%"
            border="none"
            borderBottom="none"
            marginBottom="40px"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요"
            id={'name'} // id 속성 추가
          />
          {/* <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요"
          /> */}
        </div>

        <div className={styles.inputWrapper}>
          {/* <label htmlFor="phoneNumber">휴대전화 번호</label> */}
          {/* <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="휴대전화 번호를 입력해주세요"
          /> */}
          <InputBox
            itype="text"
            fontSize="20px"
            text="휴대전화 번호"
            backgroundColor="white"
            height="105px"
            width="85%"
            border="none"
            borderBottom="none"
            marginBottom="40px"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            id={'phoneNumber'}
          />
        </div>

        <div style={{
          display:'flex',
          justifyContent:'flex-start',
          alignItems :'center',
          width:'100%',
          // gap:'px'
          }}>
          {/* <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ex) example@naver.com"
          />
          <Button
            text="중복확인"
            height="44px"
            width="100px"
            fontSize="15px"
            marginLeft="10px"
            marginTop="52px"
            horizontalPadding="12px"
            onClick={handleEmailCheck}
          /> */}
          <InputBox
            itype="email"
            fontSize="20px"
            text="이메일"
            backgroundColor="white"
            height="105px"
            width="100%"
            border="none"
            borderBottom="none"
            marginBottom="40px"
            placeholder="ex) example@naver.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            id={'email'}
          />
          <div style={{position:'relative',left:'50px',width:'15%'}}>
            <Button
              text="중복확인"
              height="44px"
              width="100px"
              fontSize="15px"
              horizontalPadding="12px"
              onClick={handleEmailCheck}
              style={{position:'relative',left:'50px'}}
            />
          </div>
        </div>
        {validationMessage1 && (
          <ValidationMessage color={messageColor1}>
            {validationMessage1}
          </ValidationMessage>
        )}

        <div style={{
          display:'flex',
          justifyContent:'flex-start',
          alignItems :'center',
          width:'100%',
        }}>
          {/* <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            id="nickname"
            value={formData.nickname}
            onChange={handleInputChange}
            placeholder="닉네임을 입력해주세요"
          />
          <Button
            text="중복확인"
            height="44px"
            width="100px"
            fontSize="15px"
            marginLeft="10px"
            marginTop="52px"
            horizontalPadding="12px"
            onClick={handleNicknameCheck}
          /> */}
          <InputBox
            itype="text"
            fontSize="20px"
            text="닉네임"
            backgroundColor="white"
            height="105px"
            width="100%"
            border="none"
            borderBottom="none"
            marginBottom="40px"
            name="nickname"
            id={'nickname'}
            value={formData.nickname}
            onChange={handleInputChange}
          />
          {/* <Button
            text="중복확인"
            height="44px"
            width="100px"
            fontSize="15px"
            marginLeft="10px"
            marginTop="52px"
            horizontalPadding="12px"
            onClick={handleNicknameCheck}
          /> */}
          <div style={{position:'relative',left:'50px',width:'15%'}}>
            <Button
              text="중복확인"
              height="44px"
              width="100px"
              fontSize="15px"
              horizontalPadding="12px"
              onClick={handleNicknameCheck}
              style={{position:'relative',left:'50px'}}
            />
          </div>
        </div>
        {validationMessage2 && (
          <ValidationMessage color={messageColor2}>
            {validationMessage2}
          </ValidationMessage>
        )}
        <div className={styles.inputWrapper}>
          {/* <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력해주세요"
          />
          {passwordError && (
            <p
              style={{
                color: "red",
                fontSize: "16px",
                position: "absolute",
                marginTop: "-45px",
                marginLeft: "18px",
              }}
            >
              {passwordError}
            </p>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPass} // confirmPass 상태 연결
            onChange={handleConfirmPasswordChange}
            placeholder="비밀번호 확인"
          />
          {passwordMatch !== null && (
            <p
              style={{
                color: passwordMatch ? "green" : "red",
                fontSize: "16px",
                position: "absolute",
                marginTop: "-45px",
                marginLeft: "20px",
              }}
            >
              {passwordMatch ? "비밀번호가 일치합니다" : "비밀번호가 일치하지 않습니다"}
            </p>
          )} */}
          <InputBox
            itype="password"
            fontSize="20px"
            text="비밀번호"
            backgroundColor="white"
            height="105px"
            width="85%"
            border="none"
            borderBottom="none"
            marginBottom="40px"
            value={formData.password}
            onChange={handlePasswordChange}
          />

          {passwordError && (
            <p
              style={{
                color: "red",
                fontSize: "16px",
                position: "absolute",
                marginTop: "-45px",
                marginLeft: "10px",
              }}
            >
              {passwordError}
            </p>
          )}

          <InputBox
            itype="password"
            fontSize="20px"
            text="비밀번호 확인"
            backgroundColor="white"
            height="105px"
            width="85%"
            border="none"
            borderBottom="none"
            marginBottom="40px"
            value={formData.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          {passwordMatch !== null && (
            <p
              style={{
                color: passwordMatch ? "green" : "red",
                fontSize: "16px",
                position: "absolute",
                marginTop: "-45px",
                marginLeft: "10px",
              }}
            >
              {passwordMatch ? "비밀번호가 일치합니다" : "비밀번호가 일치하지 않습니다"}
            </p>
          )}
        </div>

        <StyledText>개인정보 이용 약관 동의</StyledText>
        <div className={styles.checkboxWrapper}>
          <div className={styles.div2}>
            <p>
              개인정보보호법에 따라 KKOMO_ADOPT에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적,
              개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
            </p>
          </div>
        </div>
        <div style={{display:'flex'}}>
          <StyledText>약관에 동의 하십니까?</StyledText>
            <input
              type="checkbox"
              id="checkbox"
              style={{ width: "18px", height: "18px", marginLeft: "10px" }}
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        <Button text="회원가입" width="100%" height="60px" disabled={!isFormValid} />
      </form>
      <Outlet />
    </div>
  );
}

export default JoinContents;