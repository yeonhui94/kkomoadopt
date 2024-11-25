// import styled from "styled-components";
import Header from "../container/header/Header";
import Footer from "../container/Footer"
import Divider from "../components/Divider";
import styles from "./CommunityWt.module.css";
import InputBox from "../components/InputBox";

const CommunityWt=({text = "Default Title"})=>{
    return(
        <div className="commwrapper">
            <Header></Header>
            <div className={styles.mainContainer}>
                <h1>{text}</h1>
                <Divider></Divider>
                <InputBox text={"제목"} className={styles.input1}></InputBox>
                <InputBox text={"이미지 (필수)"}className={styles.input2}></InputBox>
                <InputBox text={"내용"} className={styles.input3}></InputBox>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default CommunityWt;