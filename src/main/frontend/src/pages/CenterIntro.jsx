import { inView, keyframes, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import centerintrosty from './CenterIntro.module.css';
import styles from './CenterIntro.module.css';
import Screen1 from "./centerintro/Screen1";
import { useEffect, useRef } from "react";
// import Header from "../container/header/Header";
import Divider from "../components/Divider";
import Screen2 from "./centerintro/Screen2";
import Screen3 from "./centerintro/Screen3";
import Screen5 from "./centerintro/Screen5";
import Screen6 from "./centerintro/Screen6";
import Screen4 from "./centerintro/Screen4";
import TopButton from "../components/Button/TopButton";

const CenterIntro = () => {

    return (

<div style={{gridArea : "section"}}>

    <div className={`${centerintrosty.centint_main}`}>
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle1}`}></div>
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle2}`}></div>       
    
         
        <div className={`${centerintrosty.centint_screen1to3}`}> 
            <Screen1/>
            <Screen2/>
            <Screen3/>
        </div>
       
        <Screen4/>
      
        {/* 스크린 5~6 */}
        <div className={`${centerintrosty.centint_screen5to6 }`}> 
            <Screen5/>
            <Screen6/>
        </div>
    <TopButton/>
     </div>
    </div>
        

      
      );
    };

export default CenterIntro;