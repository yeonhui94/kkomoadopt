import { inView, keyframes, motion, useAnimate, useAnimation, useInView } from "framer-motion";
import centerintrosty from './CenterIntro.module.css';
import styles from './CenterIntro.module.css';
import Screen1 from "./centerintro/screen1";
import PinkLine from "./centerintro/PinkLine";
import { useEffect, useRef } from "react";
import Header from "../container/header/Header";
import Divider from "../components/Divider";
import Footer from "../container/Footer";

const CenterIntro = () => {

    // const screen4Ref = useRef(null); // 스크린 4 전체를 참조
    // const isInView = useInView(screen4Ref, { once: false, margin: "0px" }); // 스크린 4가 보이는지 확인
    // const controlsc4_1 = useAnimation();
    // const controlsc4_2 = useAnimation();
    // const scrollRef = useRef(null);

    // useEffect(() => {
    //     const centscr4obserber = new IntersectionObserver(
    //       ([e]) => {
    //         if (e.isIntersecting) {
    //           // 4-1 애니메이션 시작
    //           controlsc4_1.start("visible").then(() => {
    //             // 4-1 종료 후 4-2 시작
    //             controlsc4_1.start("hidden");
    //             controlsc4_2.start("visible");
    //           });
    //         }
    //       },
    //       { threshold: 0.1 } // 50%가 보일 때 트리거
    //     );
    //      // scrollRef가 연결된 DOM 요소를 관찰
    //     if (scrollRef.current) {
    //         centscr4obserber.observe(scrollRef.current);
    //       }
      
    //       return () => {
    //         // 컴포넌트가 언마운트될 때 Observer를 해제
    //         if (scrollRef.current)centscr4obserber.unobserve(scrollRef.current);
    //       };
    //     }, [controlsc4_1, controlsc4_2]);

    //     // 애니메이션 설정
    //     const variants4_1 = {
    //         hidden: { opacity: 0, y: -50 },
    //         visible: { opacity: 1, y: 0 },
    //         // exit: { opacity: 0, y: 50 },
    //     };

    //     const variants4_2 = {
    //         hidden: { opacity: 0, y: 50 },
    //         visible: { opacity: 1, y: 0 },
    //     };

    const cntintscreens1 = [
        //1 
        <div>
        <div className={`${centerintrosty.centint_big_text} 
        ${centerintrosty.centint_screen1}`}>
            <p className={`${centerintrosty.centint_sc1_text}`}> 
                KKOMO 보호센터는 <br/>사지 않고 <span className={centerintrosty.centint_highlight}>입양</span>하는 
                문화를 만듭니다.
            </p>
        
        </div> 
        <Divider
                width="100%"
                backgroundColor="#d5d5d5"
                height="2px"
                
        />   
        </div>,
        //2
        <div>
        <div className={centerintrosty.centint_screen2}>
            <div className={centerintrosty.centint_sc2_contents}>
                <p className={`${centerintrosty.centint_medium_text} ${centerintrosty.centint_sr2_text1}`}>
                매년 전국적으로 <span className={centerintrosty.centint_blacktextshadow}>10만 마리</span> 이상의<br/>유기 동물들이 보호소로 구조되고 있습니다.
                </p>
                <p className={`${centerintrosty.centint_medium_graytext} ${centerintrosty.centint_sr2_text2}`}>
                안타깝게도 이 중 절반에 가까운 동물들은 <br/>
                다시 가족을 만나지 못하고 안락사 되거나 자연사 하고 있습니다.
                </p>
                <div className={`${centerintrosty.centint_img1} ${centerintrosty.centint_imgs}`}/>
            </div>
        </div>
        <Divider
                paddingbt="2px"
                width="100%"
                backgroundColor="#d5d5d5"
                height="2px"
                
        />
        </div>,
        // 3
        <div>
            <div className={centerintrosty.centint_screen3} >
                <p className={`${centerintrosty.centint_big_text} ${centerintrosty.centint_sc1_text}`}>
                        KKOMO 보호센터는<br/> <span className={centerintrosty.centint_highlight}>매년 1만 마리</span> 이상의 유기동물에게
                        <br/>새로운 가족을 찾아주고 있습니다.
                </p>
            </div>
            <Divider
                paddingbt="2px"
                width="100%"
                backgroundColor="#d5d5d5"
                height="2px"
                
        />

     </div>]

    const cntintscreens2 = [
        <p className={centerintrosty.centint_big_text}>
            KKOMO 보호센터는<br/> 매 해 천여 마리 이상의 실종 동물을<br/>
            따뜻한 가족의 품으로 돌려보내주고 있습니다.
        </p>,

    ]


    return (
<div>
    <Header className={centerintrosty.centint_header} />
    <div className={centerintrosty.centint_all}>
            <div className={`${centerintrosty.moving_circle1} ${centerintrosty.moving_circles}`}></div>

            {/* 스크린 1~3 */}
        <div> {/* 헤더 컴포넌트 렌더링 */}
          
          {/* cntintscreens 배열을 map으로 순회하여 각 화면을 렌더링 */}
          {cntintscreens1.map((cntintscreen1, index) => (
            <motion.div
              key={index}  // 각 화면을 고유한 key로 구분
              className="cntintscreen"  // 스타일 클래스를 지정
              initial={{ opacity: 0, scale: 0.9 }} // 화면이 처음 렌더링될 때 초기 상태 (투명도 0, 크기 90%)
              
              // 화면이 뷰포트에 들어올 때 실행할 애니메이션
              whileInView={{ opacity: 1, scale: 1 }}  // 뷰포트에 들어오면 opacity 1, scale 1로 변경
              
              // 뷰포트 감지 조건 설정
              viewport={{ 
                margin: "-30%",  // 뷰포트의 상하좌우 여백을 -30%로 설정하여 조금 더 일찍 애니메이션 시작
                once: false  // 처음 들어왔을 때만 애니메이션을 실행하지 않고 반복되도록 설정
              }}
              
              // 애니메이션 전환 효과 설정
              transition={{ duration: 0.8 }} // 애니메이션이 0.5초 동안 실행되도록 설정
            >
              {cntintscreen1} {/* 각 화면 콘텐츠 렌더링 */}
            </motion.div>
          ))}
        </div>
          {/* 스크린 4-1 */}
        <div>
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
                    // className={styles.centint_sr41_text}
                    // initial="hidden"
                    // animate={controlsc4_1}
                    // variants={variants4_1}
                    // transition={{ duration: 1 }}
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
                        // className={styles.centint_sr42_contents}
                        // initial="hidden"
                        // animate={controlsc4_2}
                        // variants={variants4_2}
                        // transition={{ duration: 1 }}
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
        </div>
        {/* 스크린 5~7 */}
        <div> {/* 헤더 컴포넌트 렌더링 */}
          
          {/* cntintscreens 배열을 map으로 순회하여 각 화면을 렌더링 */}
          {cntintscreens2.map((cntintscreen2, index) => (
            <motion.div
              key={index}  // 각 화면을 고유한 key로 구분
              className="cntintscreen"  // 스타일 클래스를 지정
              initial={{ opacity: 0, scale: 0.9 }} // 화면이 처음 렌더링될 때 초기 상태 (투명도 0, 크기 90%)
              
              // 화면이 뷰포트에 들어올 때 실행할 애니메이션
              whileInView={{ opacity: 1, scale: 1 }}  // 뷰포트에 들어오면 opacity 1, scale 1로 변경
              
              // 뷰포트 감지 조건 설정
              viewport={{ 
                margin: "-30%",  // 뷰포트의 상하좌우 여백을 -30%로 설정하여 조금 더 일찍 애니메이션 시작
                once: false  // 처음 들어왔을 때만 애니메이션을 실행하지 않고 반복되도록 설정
              }}
              
              // 애니메이션 전환 효과 설정
              transition={{ duration: 0.8 }} // 애니메이션이 0.5초 동안 실행되도록 설정
            >
              {cntintscreen2} {/* 각 화면 콘텐츠 렌더링 */}
            </motion.div>
          ))}
        </div>
        <Footer/>
    </div>
        
</div>
      
      );
    };

export default CenterIntro;