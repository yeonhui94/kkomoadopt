import styled from 'styled-components';

// Divider 스타일 설정
const StyledDivider = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.fontSize || '32px'}; /* 텍스트 크기 */
  font-weight : bold;
  font-family: var(--main-font);
  padding-bottom: ${(props) => props.paddingbt || '5px'};
  width: ${(props) => props.width || 'auto'}; /* width가 전달되도록 설정 */
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props)=> props.width || "100%"};
  height:${(props)=> props.height || "4px"};  /* 밑줄 두께 */
  background-color: ${(props) => props.backgroundColor || 'var(--main-color)'};
  
`;

function Divider({ text, fontSize, width, backgroundColor, height ,paddingbt}) {
  return (
    <StyledDivider fontSize={fontSize}  width={width} paddingbt={paddingbt}>
      {text && text}
      <Underline width={width} backgroundColor={backgroundColor} height={height} />
    </StyledDivider>
  );
}

export default Divider;