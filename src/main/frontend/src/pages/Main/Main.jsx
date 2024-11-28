import Footer from "../../container/Footer";
import Header from "../../container/mainheader/MainHeader";
import styles from "./Main.module.css";
import { Outlet } from 'react-router-dom';
function Main() {

    return (
      <div className={styles['main-grid']}>
        <Header/>
        <Outlet/>
        <Footer />
      </div>
  
    );
  }
  
  export default Main;
