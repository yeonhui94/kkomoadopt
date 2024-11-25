import styled from 'styled-components';
import InputField from './InputField';
import Button from './Button/Button';

// Divider 스타일 설정
const StyledDiv = styled.div`
  border: 4px solid ${props => props.border ? props.border : 'var(--line-color)' };
  border-radius: 10px;
  height: ${props => props.height ? props.height : '290px'};
  padding-bottom: ${(props) => props.paddingbt || '5px'};
  width: ${(props) => props.width || '607px'};
  margin-top: ${(props) => props.marTop || 'none'};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column; /* 기본적으로 수직 정렬 */
  margin-top: 70px;
  align-items: center;
  justify-content: center; /* 오타 수정: justify-cotent -> justify-content */
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 16px; /* 라벨과 인풋 사이의 간격 */
  margin-bottom: 10px; /* 각 라벨 컨테이너 간의 간격 */
  align-items: center; /* 수평 중앙 정렬 */
 
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽으로 정렬 */
  width: 100%; /* 버튼이 오른쪽 끝에 위치하도록 */
  margin-right : 150px
`;

function IdPassword({height, paddingbt, width, marTop, border, text1,text2, type1, type2,labelMarginLeft1,labelMarginLeft2}) {
  return (
    <StyledDiv marTop="16px">
      <StyledForm>
        {/* 이름 입력 필드 */}
        <LabelContainer>
          <label htmlFor="Input1" style={{fontSize : "20px" ,fontWeight : "bold",  marginLeft: labelMarginLeft1 || "0" }}>{text1}</label>
          <InputField type={type1} width="300px" height="20px" />
        </LabelContainer>
        
        {/* 휴대전화 번호 입력 필드 */}
        <LabelContainer>
          <label htmlFor="Input2" style={{fontSize : "20px" ,fontWeight : "bold", marginLeft: labelMarginLeft2 || "0"}}>{text2}</label>
          <InputField type={type2} width="300px" height="20px" />
        </LabelContainer>
        
        <ButtonContainer>
          <Button text="확인" />
        </ButtonContainer>
      </StyledForm>
    </StyledDiv>
  );
}

export default IdPassword;
