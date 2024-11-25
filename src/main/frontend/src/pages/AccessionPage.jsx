import styled from "styled-components";
import Footer from "../container/Footer";
import Header from "../container/header/Header";
import AccesstionPageContents from "../contents/AccessionPageContents";

// 전체 레이아웃을 잡을 스타일 컴포넌트
const StyledDiv = styled.div`
  display: grid;
  grid-template:
    'header' 200px
    '... ... ...' 1fr
    '... contents ...' 546px
    '... ... ...' 1fr
    'footer' 264px / 1fr 607px 1fr; /* 푸터의 높이를 고정 */
  height: 100vh;  /* 화면 높이에 맞추기 위해 100vh 사용 */
  padding: 0;
  margin: 0;
  align-items: center;
    justify-items: center;
  padding-bottom : 0;
`;

const StyledHeader = styled(Header)`
  grid-area: header;
`;

const StyledContent1 = styled(AccesstionPageContents)`

  grid-area: contents;
  margin-bottom: 0;
  flex-grow: 1;  /* 콘텐츠가 화면 크기에 맞춰 늘어나도록 설정 */
`;

const StyledFooter = styled(Footer)`
  grid-area: footer  /* 푸터는 세 번째 줄 */
  padding-bottom: 0;
  margin-bottom: 0;
`;

function AccesstionPage() {
  return (
    <StyledDiv>
      <StyledHeader />
      <StyledContent1 />
      <StyledFooter />
    </StyledDiv>
  );
}

export default AccesstionPage;
