import styled from "styled-components";
import Footer from "../container/Footer";
import Header from "../container/header/Header";


const StyledDiv = styled.div`
  display: grid;
  grid-template:
    'header' 200px
    '... ... ...' 1fr
    'footer' 264px / 1fr 557px 1fr; /* 푸터의 높이를 고정 */
  padding: 0;
  margin: 0;
  height: 100vh; /* 화면 높이에 맞춰 100vh 설정 */
  min-height: 120vh; /* 화면 크기에 따라 최소 높이를 100vh로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 콘텐츠와 푸터 사이 여백을 자동으로 설정 */
`;

const StyledHeader = styled(Header)`
  grid-area: header;
`;


const StyledFooter = styled(Footer)`
  grid-area: footer;
  padding-bottom: 0;
  margin-bottom: 0;
`;


function LoginPage(){


    return(
        <div>
            <StyledHeader />

            <StyledFooter />
        </div>
    )
}

export default LoginPage;