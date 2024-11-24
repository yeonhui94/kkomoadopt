import styled from "styled-components";
import Section5 from "./Section5";
import Header from "../header/Header";
import Footer from "../Footer";
import TopButton from "../../components/Button/TopButton";
import Divider from "../../components/Divider";

const SectionDivider = styled.div`
  display: flex;
  justify-content: center;  /* 수평 중앙 정렬 */
  align-items: center;      /* 수직 중앙 정렬 (필요하면 추가) */
`;

const GroupSection5 = () => {
    return (
        <>
            <Header/>
            <SectionDivider>
                <Divider text={"아이를 찾습니다"} fontSize={"32px"} width={"90vw"} marTop={"52px"}
                paddingbt={"20px"}/>
            </SectionDivider>
            <Section5/>
            <TopButton/>
            <Footer/>
        </>
    );
};

export default GroupSection5;
