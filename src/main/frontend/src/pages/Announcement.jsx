import SubNaviBar from "../components/MyPage/SubNavi/SubNaviBar";
import SubMenu from "../container/SubMenu";
import Footer from "../container/Footer";
import Header from "../container/header/Header";import ParentComponent from "./ParentComponent";
import Dropdown from "../components/DropDown";
import styles from "./Review.module.css";



const Announcement = () => {


    return (
        <div style={{gridArea: "section"}}>

            {/* <SubMenu/> */}
            <ParentComponent></ParentComponent>
        
 
        </div>
    )

}

export default Announcement;