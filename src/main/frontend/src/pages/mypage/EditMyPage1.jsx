import styled from 'styled-components';
import Divider from '../../components/Divider';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button/Button';

const StyledDiv1 = styled.div`
    display : grid;
    grid-template :
    '... title1 ...'80px
    '... title2 ...' 80px
    '... input1 ...' 1fr/1fr 400px 1fr;
`;


const StyledDividerWrapper = styled.div`
  position: relative;
  margin-top: ${({ marTop }) => marTop || '0px'};
  
  &::after {
    content: '';
    position: absolute; /* 밑줄이 텍스트 바로 아래에 오도록 설정 */
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--line-color, #000); /* var(--line-color)를 사용할 수 있도록 설정 */
  }
`;

const StyledForm1 = styled.form`
    display : grid;
    grid-template :
    'input1 btn1'100px
    'text text' 1fr/ 400px 100px;
`;

const StyledP1 = styled.p`
    font-size : 15px;
    font-weight : bold;
`;



function EditMyPage1() {
 

    return (
        <StyledDiv1>
            <div style={{gridArea : "title1"}}>
                <Divider text="본인확인" fontSize="30px" />
            </div>

            <StyledDividerWrapper marTop="30px" style={{gridArea : "title2"}}>
                <StyledP1>본인확인을 위해 비밀번호를 입력해주세요.</StyledP1>
            </StyledDividerWrapper>

            <StyledForm1 style={{gridArea : "input1"}}>
                <InputBox
                    style={{ gridArea: "input1" }}
                    itype="password"
                    fontSize="20px"
                    text="비밀번호"
                    backgroundColor="white"
                    height="95px"
                    width="98%"
                    marginBottom="40px"
                />
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
                <br />

            </StyledForm1>
        </StyledDiv1>
    );
}

export default EditMyPage1;
