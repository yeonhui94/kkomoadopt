import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button/Button';
import styles from '../../pages/mypage/EditMyPage1.module.css';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function EditMyPage1({ gridArea }) {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const correctPassword = 'asdf1234'; // 일치하는 비밀번호 지정

    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== correctPassword) {
            setError('비밀번호가 일치하지 않습니다.');
        } else {
            setError('');
            navigate('/mypage/user/edit-profile2');
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
                    style={{ gridArea: "input2" }}
                    itype="password"
                    fontSize="20px"
                    text="비밀번호"
                    backgroundColor="white"
                    height="105px" width="97%"
                    border="none" borderBottom="none"
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
                    marginLeft="10px"
                    marginTop="52px"
                    horizontalPadding="12px"
                    type="submit"  // 버튼 클릭 시 폼 제출
                    onClick={handleSubmit}
                />
            </form>
            <Outlet />
        </div>
    );
}

export default EditMyPage1;
