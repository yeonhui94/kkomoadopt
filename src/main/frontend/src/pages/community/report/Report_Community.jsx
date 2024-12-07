// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import { Outlet } from "react-router-dom";

const Report_Community = ({ text = "신고합니다"  , gridArea}) => {
  return (
    <div className="commwrapper"
    style={{gridArea : gridArea}}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{textAlign :"center"}}>{text}</h1>
        <Divider />
        <Outlet/>
      </div>
    </div>
  );
};
export default Report_Community ;