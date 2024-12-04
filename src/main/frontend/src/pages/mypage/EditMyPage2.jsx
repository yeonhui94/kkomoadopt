import { useState } from 'react';
import Button from '../../components/Button/Button';
import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import styles from '../../pages/mypage/EditMyPage2.module.css';
import { nicknamePattern, pwPattern } from "../../utils/regExp"; // 유효성 검사 패턴 가져오기
import { Outlet, useNavigate } from 'react-router-dom';

function EditMyPage2({ gridArea }) {

    const navigate = useNavigate();
    // 닉네임 상태와 유효성 검사 상태
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [nicknameValid, setNicknameValid] = useState(false);
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(null);
    const [passwordError, setPasswordError] = useState("");
    const [passwordMessage, setPasswordMessage] = useState('');

    // 닉네임 입력값을 처리하는 함수
    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        setNicknameError(''); // 사용자가 입력할 때 오류 메시지 초기화
    };

    // 중복확인 버튼 클릭 시 유효성 검사 함수
    const handleDuplicateCheck = (e) => {
        e.preventDefault(); // 폼 제출을 막기 위해 기본 동작 방지
        // 닉네임이 유효한지 패턴으로 검사
        if (nickname.match(nicknamePattern)) {
            setNicknameValid(true);
            setNicknameError(''); // 유효한 닉네임일 경우 오류 메시지 초기화
        } else {
            setNicknameValid(false);
            setNicknameError('사용할 수 없는 닉네임 입니다.'); // 유효하지 않으면 오류 메시지 표시
        }
    };


    const correctPassword = 'asdf1234';  // 실제 비밀번호


    // 비밀번호 입력 변경 처리 함수
    const handlePassword = (e) => {
        const inputPassword = e.target.value;
        setPassword1(inputPassword);
        // 입력할 때마다 비밀번호 확인
        if (inputPassword === correctPassword) {
            setPasswordMessage('비밀번호가 일치합니다');
        } else {
            setPasswordMessage('비밀번호가 일치하지 않습니다');
        }
    };

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

    // 수정 버튼 클릭 시 처리
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        // 유효성 검사
        if (!nickname.match(nicknamePattern)) {
            alert('닉네임이 유효하지 않습니다.');
            return;
        }
        if (!pwPattern.test(password)) {
            alert('비밀번호가 유효하지 않습니다.');
            return;
        }
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        // 모든 유효성 검사를 통과했을 때만 수정 처리
        alert('수정 되었습니다.');
        navigate('/mypage'); // "/mypage"로 이동
    };

    return (
        <div style={{ gridArea: gridArea }}>
            <div style={{ gridArea: "title1" }}>
                <Divider text="회원정보수정" fontweight="midium" marTop="20px" />
            </div>
            <form>
                <div className={styles.EditMyPageDiv2}>
                    <div className={styles.SecondDividerWrapper1}>
                        <p style={{ fontSize: "1.2rem" }}>기본정보</p>
                    </div>

                    <form className={styles.input1Form}>
                        {/* 닉네임 입력 */}
                        <InputBox style={{ gridArea: "input2" }}
                            itype="text" fontSize="20px"
                            text="닉네임" backgroundColor="white"
                            height="95px" width="350px"
                            marginBottom="40px"
                            value={nickname}
                            onChange={handleNicknameChange}/>

                        <Button style={{ gridArea: "btn1" }}
                            text="중복확인" height="44px"
                            width="100px" fontSize="15px"
                            marginTop="43px" horizontalPadding="12px"
                            onClick={handleDuplicateCheck} // 버튼 클릭 시 유효성 검사 실행
                            type="button" // type="button"을 설정하여 submit 동작을 방지
                        />

                        {/* 유효성 검사 메시지 표시 */}
                        {nicknameError && (
                            <p style={{ position: "absolute", gridArea: "text", color: 'red', fontSize: '10px', marginLeft: "20px", marginTop: "90px" }}>{nicknameError}</p> // 오류 메시지
                        )}
                        {nicknameValid && (
                            <p style={{ position: "absolute", gridArea: "text", color: 'green', fontSize: '10px', marginLeft: "20px", marginTop: "90px" }}>사용이 가능한 닉네임 입니다.</p> // 유효한 닉네임 메시지
                        )}
                    </form>

                    {/* 휴대폰 번호 입력 */}
                    <div className={styles.input2}>
                        <InputBox style={{ marginTop: "20px", gridArea: "contents3" }}
                            itype="tel" text="휴대폰 번호"
                            backgroundColor="white" height="95px"
                            width="350px" marginBottom="40px"/>
                    </div>

                    <div className={styles.SecondDividerWrapper2}>
                        <p style={{ fontSize: "1.2rem" }}>비밀번호 변경</p>
                    </div>

                    <div className={styles.input3}>
                        <div>
                            <InputBox
                                itype="password" text="현재 비밀번호"
                                backgroundColor="white" height="95px"
                                width="350px" marginBottom="20px"
                                value={password1}
                                onChange={handlePassword}/>

                            {passwordMessage && (
                                <p style={{
                                        position: "absolute", color: passwordMessage === '비밀번호가 일치합니다' ? 'green' : 'red',
                                        fontSize: '10px', marginLeft: "20px", marginTop: "-25px"}}>
                                    {passwordMessage}
                                </p>
                            )}
                        </div>
                        <InputBox
                            itype="password" text="변경 비밀번호"
                            backgroundColor="white" height="95px"
                            width="350px" marginBottom="20px"
                            value={password}
                            onChange={handlePasswordChange} />

                        {/* 비밀번호 유효성 검사 에러 메시지 */}
                        {passwordError && <p style={{
                            color: "red", fontSize: "10px",
                            position: "absolute", marginTop: "-25px", marginLeft: "18px"
                        }}>{passwordError}</p>}

                        <InputBox
                            itype="password" text="변경 비밀번호 확인"
                            backgroundColor="white" height="95px"
                            width="350px" marginBottom="40px"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange} />
                        {/* 비밀번호 일치 여부에 따른 메시지 표시 */}
                        {passwordMatch !== null && (
                            <p
                                style={{
                                    color: passwordMatch ? "green" : "red",
                                    fontSize: '10px', position: "absolute",
                                    marginTop: "-45px", marginLeft: "20px"
                                }}
                            >
                                {passwordMatch ? "비밀번호가 일치합니다" : "비밀번호가 일치하지 않습니다"}
                            </p>
                        )}
                    </div>
                    <Button text="수정" width="100%" marginLeft="10px" marginBottom="40px" onClick={handleSubmit} />
                </div>
            </form>
            <div>
            <div className={styles.SecondDividerWrapper2}>
                        <p style={{ fontSize: "1.2rem"}}>회원 탈퇴</p>
                    </div>
                    <Button color="#444444" bg1color="#444444"text="회원 탈퇴" width="100%" marginLeft="10px" marginTop="60px" marginBottom="20px"/>
                    </div>
            <Outlet />
        </div>
    );
}

export default EditMyPage2;
