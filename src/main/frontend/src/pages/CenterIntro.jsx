import { inView, keyframes, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import centerintrosty from './CenterIntro.module.css';
import styles from './CenterIntro.module.css';
import Screen1 from "./centerintro/screen1";
import PinkLine from "./centerintro/PinkLine";
import { useEffect, useRef } from "react";
// import Header from "../container/header/Header";
import Divider from "../components/Divider";
import Screen2 from "./centerintro/Screen2";
import Screen3 from "./centerintro/Screen3";
import Screen5 from "./centerintro/Screen5";
import Screen6 from "./centerintro/Screen6";
import Screen4 from "./centerintro/Screen4";

const CenterIntro = () => {

    return (

<div style={{gridArea : "section"}}>

    <div className={`${centerintrosty.centint_main}`}>
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle1}`}></div>
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle2}`}></div>       
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle3}`}></div>
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle4}`}></div> 
     <div className={`${centerintrosty.moving_circles} ${centerintrosty.moving_circle5}`}></div>       
            {/* 스크린 1~3 */}
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
     </div>
        <Footer className={`${centerintrosty.centint_footer}`}/>
    </div>
        

      
      );
    };

export default CenterIntro;