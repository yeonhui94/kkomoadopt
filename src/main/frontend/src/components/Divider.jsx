import styled from "styled-components";

// Divider 스타일 설정
const StyledDivider = styled.div`
  display: ${(props) => props.display || "inline-block"};
  position: relative;
  font-size: ${(props) => props.fontSize || "32px"}; /* 텍스트 크기 */
  font-weight: ${(props) => props.fontweight || "none"};
  font-family: var(--main-font);
  padding-bottom: ${(props) => props.paddingbt || "5px"};
  width: ${(props) => props.width || "auto"}; /* width가 전달되도록 설정 */
  margin-top: ${(props) => props.marTop || "none"};
  text-align: ${(props) => props.textAlign || "left"};
  white-space : nowrap;
`;

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "4px"}; /* 밑줄 두께 */
  background-color: ${(props) => props.backgroundColor || "var(--main-color)"};
`;

function Divider({
  display,
  text,
  fontSize,
  width,
  height,
  paddingbt,
  marTop,
  textAlign,
  backgroundColor,
  fontweight
}) {
  return (
    <StyledDivider
      display={display}
      fontSize={fontSize}
      width={width}
      paddingbt={paddingbt}
      marTop={marTop}
      textAlign={textAlign}
      fontweight={fontweight}
    >
      {text && text}
      <Underline
        width={width}
        height={height}
        backgroundColor={backgroundColor}
      />
    </StyledDivider>
  );
}

export default Divider;
