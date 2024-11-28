import CscLayout from "../CscLayout";
import styles from './Customer_service.module.css'
import { Outlet } from "react-router-dom";
const Customer_service = ({gridArea}) => {

    return (
        <div style={{gridArea: gridArea}} 
      >
            <CscLayout />
            <Outlet />
        </div>
    )

}

export default Customer_service;