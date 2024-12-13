import styled from 'styled-components';
import Divider from '../../components/Divider';
import Button from '../../components/Button/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from "../../pages/Login/JoinContents.module.css";
import { emailPattern, nicknamePattern, pwPattern } from "../../utils/regExp";
import { useState } from 'react';
import { useStore } from '../../stores/UserStore2/useStore';

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
  position: absolute;
  margin-left: 18px;
  margin-top: 100px;
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
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="이름을 입력해주세요"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="phoneNumber">휴대전화 번호</label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="휴대전화 번호를 입력해주세요"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="email">이메일</label>
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
          />
        </div>
        {validationMessage1 && (
          <ValidationMessage color={messageColor1}>
            {validationMessage1}
          </ValidationMessage>
        )}

        <div className={styles.inputWrapper}>
          <label htmlFor="nickname">닉네임</label>
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
          />
        </div>
        {validationMessage2 && (
          <ValidationMessage color={messageColor2}>
            {validationMessage2}
          </ValidationMessage>
        )}

        <div className={styles.inputWrapper}>
          <label htmlFor="password">비밀번호</label>
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
          )}
        </div>

        <StyledText>개인정보 이용 약관 동의</StyledText>
        <div className={styles.checkboxWrapper}>
          <label htmlFor="checkbox">약관에 동의 하십니까</label>
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