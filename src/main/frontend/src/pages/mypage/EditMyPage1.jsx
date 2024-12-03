import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button/Button';
import styles from '../../pages/mypage/EditMyPage.module.css';
import { useState } from 'react';

function EditMyPage1({ gridArea }) {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const correctPassword = 'asdf1234'; // 일치하는 비밀번호 지정

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== correctPassword) {
            setError('비밀번호가 일치하지 않습니다.');
        } else {
            setError('');
            // 비밀번호가 일치하면 폼 제출 (API 호출 등)
            console.log('비밀번호가 일치하여 폼이 제출되었습니다.');
        }
    };

    return (
        <div className={styles.EditMyPageDiv1} style={{ gridArea: gridArea }}>
            <div style={{ gridArea: "title1" }}>
                <Divider text="본인확인" fontweight="midium" marTop="20px" />
            </div>

            <div className={styles.SecondDividerWrapper} style={{ gridArea: "title2" }}>
                <p style={{fontSize : "20px"}}>본인확인을 위해 비밀번호를 입력해주세요.</p>
            </div>

            <form className={styles.input1Form} onSubmit={handleSubmit} style={{ gridArea: "input1" }}>
                <InputBox
                    style={{ gridArea: "input1" }}
                    itype="password"
                    fontSize="20px"
                    text="비밀번호"
                    backgroundColor="white"
                    height="95px"
                    width="97%"
                    marginBottom="40px"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {error && <p className={styles.ErrorMessage}>{error}</p>}  {/* 오류 메시지 표시 */}
                <Button
                    style={{ gridArea: "btn1" }}
                    text="확인"
                    height="44px"
                    width="100px"
                    fontSize="15px"
                    marginLeft="2px"
                    marginTop="43px"
                    horizontalPadding="12px"
                    type="submit"  // 버튼 클릭 시 폼 제출
                />
            </form>
        </div>
    );
}

export default EditMyPage1;
