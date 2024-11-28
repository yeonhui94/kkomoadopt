import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import styles from "../CommunityWt.module.css";
import { Outlet } from "react-router-dom";

const Find_child_community = ({ text = "아이를 찾습니다"  , gridArea}) => {
  return (
    <div className="commwrapper"
    style={{gridArea : gridArea}}>
      <div className={styles.mainContainer}>
        <h1>{text}</h1>
        <Divider />
        <Outlet/>
      </div>
    </div>
  );
};
export default Find_child_community;
