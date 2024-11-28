import { Outlet } from "react-router-dom";
import ParentComponent from "../ParentComponent";
import styles from '../Main/Main.module.css';

const Community = ({gridArea}) => {

    return (
        <div style={{gridArea : gridArea}} >
            <ParentComponent/>
            <Outlet/>
        </div>
    )

}
export default Community;