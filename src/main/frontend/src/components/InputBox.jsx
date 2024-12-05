import styled from "styled-components";

// StyledDiv는 기본 레이아웃과 스타일을 담당합니다.
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor || 'var(--line-color)'}; // background-color를 프롭스로 받아오기
  border-radius: ${({ radius }) => radius || '10px'};
  border : ${({ border }) => border || '3px solid #ccc'};
  padding: ${({ padding2 }) => padding2 || '8px'};
  padding-right: ${({ paddingRight }) => paddingRight || "auto" };
  width: ${({ width }) => width || "100%"};  // 길이를 프롭스로 설정
  height: ${({ height }) => height || "auto"};  // 높이를 프롭스로 설정
  margin-bottom: ${({ marginBottom }) => marginBottom || ""};
  margin-right : ${props => props.marginRight ? props.marginRight : 'auto' };
`;

// StyledLabel은 라벨 스타일을 담당합니다.
const StyledLabel = styled.label`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  padding: ${({ padding3 }) => padding3 || '8px'};
  padding-bottom: 8px;
  color : ${({ color }) => color || '#444444'};
  background-color: ${({ backgroundColor1 }) => backgroundColor1 || 'none'};
`;

// StyledInput은 input의 스타일을 담당합니다.
const StyledInput = styled.input`
  width: ${({ width1 }) => width1 || "100%"};  // width를 프롭스로 설정
  height: ${({ height }) => height || "40px"};  // 기본 height를 40px로 설정
  padding: ${({ padding }) => padding || '8px'};
  border: ${({ border1 }) => border1 || '3px solid #ccc'};
  border-radius:  ${({ radius }) => radius || '10px'};
  placeholder : ${({ placeholder }) => placeholder || ""};

  
    &:focus {
    border-color: #444444; /* 포커스 시 테두리 색상 */
    outline: none;
  }
`;

// InputBox 컴포넌트
function InputBox({ text,padding2,backgroundColor1,color,padding3,border,padding, itype, value, width, height, onChange, placeholder,radius,width1,
                    backgroundColor,border1,fixedText,fontSize,marginBottom, paddingRight,marginRight}) {
  return (
    <StyledDiv 
        width={width} 
        height={height} 
        backgroundColor={backgroundColor} 
        radius={radius}
        border={border} 
        padding2={padding2}
        marginBottom={marginBottom} 
        paddingRight={paddingRight}>
      <StyledLabel fontSize={fontSize} color={color}padding3={padding3} backgroundColor1={backgroundColor1}>{text}</StyledLabel>
      {fixedText && <StyledFixedText>{fixedText}</StyledFixedText>}
      <StyledInput 
        type={itype || "text"} 
        value={value} 
        radius={radius}
        padding={padding}
        onChange={onChange}
        border1={border1}
        width1={width1}   // width 프롭 전달
        height={height} // height 프롭 전달
        marginRight={marginRight}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
}

export default InputBox;
