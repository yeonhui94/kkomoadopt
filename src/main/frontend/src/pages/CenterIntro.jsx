import { inView, keyframes, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import centerintrosty from './CenterIntro.module.css';
import styles from './CenterIntro.module.css';
import Screen1 from "./centerintro/screen1";
import PinkLine from "./centerintro/PinkLine";
import { useEffect, useRef } from "react";
import Header from "../container/header/Header";
import Divider from "../components/Divider";
import Footer from "../container/Footer";
import Screen2 from "./centerintro/Screen2";
import Screen3 from "./centerintro/Screen3";
import Screen5 from "./centerintro/Screen5";
import Screen6 from "./centerintro/Screen6";

const CenterIntro = () => {

    return (
<div>

    <Header className={`${centerintrosty.centint_header}`} />

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
          {/* 스크린 4-1 */}
       
        <div className={centerintrosty.centint_sc4_screen}>
                    {/* 4-1 */}
                    <motion.div
                    className={centerintrosty.centint_sc41_contents}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{opacity: 1, y : 0}}
                    viewport={{ 
                        margin : "-70%",
                        once: false }}
                    transition={{ duration: 1.3 }}
                    >
                                <p className={`${centerintrosty.centint_medium_text} ${centerintrosty.centint_sc41_text1}`}>
                                    사랑이 필요한 그 작은 생명<br/>당신의 따뜻한 손길을 기다리고 있어요.<br/>
                                </p>
                                
                                <p className={`${centerintrosty.centint_medium_graytext} ${centerintrosty.centint_sc41_text2} `}>
                                    유기동물 보호소에 구조된 유기동물 알림 서비스를 통해
                                <br />입양을 돕고 있습니다.
                                </p>
                                <div className={`${centerintrosty.centint_img2} ${centerintrosty.centint_imgs}`}/>
                    </motion.div>
            
           
                     {/* 4-2 */}
                    <motion.div
                    className={centerintrosty.centint_sr42_contents}
                    initial={{opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{
                        margin: "-30%",
                        once: false
                    }}
                    transition={{duration: 1.3}}
                    >
                                <p className={`${centerintrosty.centint_medium_text} ${centerintrosty.centint_sr42_text}} `}>
                                    잃어버린 가족을 찾기 위해<br/>
                                    아주 작은 힘이라도 보태겠습니다.
                                </p>
                                <p className={`${centerintrosty.centint_medium_graytext}`}>
                                    유기동물 보호소에 구조된 아이를 찾아드리고 있습니다.
                                <br/>사라진 반려동물을 찾는 가장 빠르고 안전한 방법, 함께 합니다.
                                </p>
                                <div className={`${centerintrosty.centint_img3} ${centerintrosty.centint_imgs}`}/>
                    </motion.div>     
        </div>
      
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