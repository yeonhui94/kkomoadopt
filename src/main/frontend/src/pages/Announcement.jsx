import SubNaviBar from "../components/MyPage/SubNavi/SubNaviBar";
import SubMenu from "../container/SubMenu";
import ParentComponent from "./ParentComponent";
import Dropdown from "../components/DropDown";
import styles from "./Review.module.css";



const Announcement = ({gridArea}) => {


    return (
        <div style={{gridArea : gridArea}}>
            <ParentComponent></ParentComponent>
        
 
        </div>
    )

}

export default Announcement;