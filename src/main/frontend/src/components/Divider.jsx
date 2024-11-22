import styled from 'styled-components';

// Divider 스타일 설정
const StyledDivider = styled.div`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.fontSize || '32px'}; /* 텍스트 크기 */
  font-weight : bold;
  font-family: var(--main-font);
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;  /* 밑줄 두께 */
  background-color: var(--main-color);  /* 밑줄 색상 */
`;

function Divider({ text, fontSize }) {
  return (
    <StyledDivider fontSize={fontSize}>
      {text}
      <Underline />
    </StyledDivider>
  );
}

export default Divider;