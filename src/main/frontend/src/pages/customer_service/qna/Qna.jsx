import styled from "styled-components";
// import Header from "../container/header/Header";
// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import styles from "../../community/CommunityWt.module.css";
import { Outlet } from "react-router-dom";
import CscLayout from './../../CscLayout';

const Qna = ({ gridArea}) => {
  return (
    <div style={{gridArea : gridArea}}>
      <CscLayout />
        <Divider />
        <Outlet/>
    </div>
  );
};
export default Qna;