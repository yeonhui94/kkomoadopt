import styled from "styled-components";
import Divider from "../../../components/Divider";
import styles from "../../community/CommunityWt.module.css";
import { Outlet } from "react-router-dom";
import CscLayout from './../../CscLayout';

const Apply_consult = ({ gridArea}) => {
  return (
    <div className="commwrapper"
    style={{gridArea : gridArea}}>
      <CscLayout />
      <Divider />
      <Outlet/>
    </div>
  );
};
export default Apply_consult;