import Footer from "../../container/Footer";
import Header from "../../container/header/Header";
import HeaderMain from "../../container/HeaderMain/HeaderMain";
import styles from "./Main.module.css";
import { Outlet } from 'react-router-dom';

function Main() {

    return (
      <div className={styles['main-grid']}>
        <HeaderMain />
        <Outlet />
        <Footer />
      </div>
  
    );
  }
  
  export default Main;
