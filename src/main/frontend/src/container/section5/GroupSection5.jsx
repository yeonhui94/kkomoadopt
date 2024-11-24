import styled from "styled-components";
import Section5 from "./Section5";
import Header from "../header/Header";
import Footer from "../Footer";
import TopButton from "../../components/Button/TopButton";
import Divider from "../../components/Divider";


const GroupSection5 = () => {
    return (
        <>
            <Header/>
            <Divider text={"아이를 찾습니다"} fontSize={"32px"} width={"88.75vw"}/>
            <Section5/>
            <TopButton/>
            <Footer/>
        </>
    );
};

export default GroupSection5;
