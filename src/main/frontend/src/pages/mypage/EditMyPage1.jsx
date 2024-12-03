import styled from 'styled-components';
import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button/Button';
import { useState } from 'react';

const StyledDiv1 = styled.div`
    display : grid;
    grid-template :
    'title1 ... ...'80px
    'title2 title2 title2' 80px
    'input1 ... ...' 1fr/1fr 1fr 1fr;
    margin-left : 20px;
`;

const StyledDividerWrapper = styled.div`
  position: relative;
  margin-top: ${({ marTop }) => marTop || '0px'};
  &::after {
    content: '';
    position: absolute; 
    width: 98%;
    height: 2px;
    background-color: var(--line-color, #000); /* var(--line-color)를 사용할 수 있도록 설정 */
  }
`;

const StyledForm1 = styled.form`
    margin-top : 10px;
    display : grid;
    grid-template :
    'input1 btn1'100px
    'text text' 1fr/ 400px 100px;
`;

const StyledP1 = styled.p`
    font-size : 20px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 15px;
    margin-top: 3px;
    margin-left : 15px;
    grid-area : text;
`;

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
        <StyledDiv1 style={{ gridArea: gridArea }}>
            <div style={{ gridArea: "title1" }}>
                <Divider text="본인확인" fontweight="midium" marTop="20px" />
            </div>

            <StyledDividerWrapper marTop="20px" style={{ gridArea: "title2" }}>
                <StyledP1>본인확인을 위해 비밀번호를 입력해주세요.</StyledP1>
            </StyledDividerWrapper>

            <StyledForm1 onSubmit={handleSubmit} style={{ gridArea: "input1" }}>
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
                {error && <ErrorMessage>{error}</ErrorMessage>}  {/* 오류 메시지 표시 */}
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
            </StyledForm1>
        </StyledDiv1>
    );
}

export default EditMyPage1;
