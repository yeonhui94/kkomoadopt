import { inView, keyframes, motion, useInView } from "framer-motion";
import centerintrosty from './CenterIntro.module.css';
import styles from './CenterIntro.module.css';
import Screen1 from "./centerintro/screen1";
import PinkLine from "./centerintro/PinkLine";
import { useRef } from "react";
import Header from "../container/header/Header";
import Divider from "../components/Divider";

const CenterIntro = () => {

    // 8개 스크린 요소 참조하는 useRef 배열 생성
    // ctrefs.current로 참조하여 각 요소의 ref를 설정함.
    // const ctrefs = useRef(Array.from({length : 2}, () => null));

    // 각 ref가 뷰포트에 들어왔는지를 확인하는 useInView 훅을 각각에 적용합니다.
    // inViews는 각 요소별로 true/false 값을 가지는 배열
    // const ctintViews = ctrefs.map((ctref) => 
    //     useInView(ctref, {
    //     margin: "-30%",
    //     once: false,
    //     }));


    const cntintscreens = [
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
        </div>,
        // 4
        <div>
            <div className={centerintrosty.centint_screen4}>
                <div className={centerintrosty.centint_sc4_contents}>
                    <div className={`${centerintrosty.centint_medium_text} ${centerintrosty.centint_sr4_text1}`}>
                        사랑이 필요한 그 작은 생명<br/>당신의 따뜻한 손길을 기다리고 있어요.<br/>
                    </div>
                    <div className={`${centerintrosty.centint_medium_graytext} ${centerintrosty.centint_sr4_text2} `}>
                        유기동물 보호소에 구조된 유기동물 알림 서비스를 통해
                    <br />입양을 돕고 있습니다.
                    </div>
                    <div className={`${centerintrosty.centint_img2} ${centerintrosty.centint_imgs}`}/>
                </div>
            </div>
            <Divider
                paddingbt="2px"
                width="100%"
                backgroundColor="#d5d5d5"
                height="2px"
                
            />
        </div>,
        //5
        <div>
            <div>
                <p className={centerintrosty.centint_big_text}>
                KKOMO 보호센터는<br/> 매 해 천여 마리 이상의 실종 동물을<br/>
                따뜻한 가족의 품으로 돌려보내주고 있습니다.
                </p>
                <Divider
                paddingbt="2px"
                width="100%"
                backgroundColor="#d5d5d5"
                height="2px"
                
                />
            </div>
        </div>

    ]

    return (
        <div className={centerintrosty.centint_all}>
          <Header className={centerintrosty.centint_header} /> {/* 헤더 컴포넌트 렌더링 */}
          
          {/* cntintscreens 배열을 map으로 순회하여 각 화면을 렌더링 */}
          {cntintscreens.map((cntintscreen, index) => (
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
              {cntintscreen} {/* 각 화면 콘텐츠 렌더링 */}
            </motion.div>
          ))}
        </div>
      );
    };

export default CenterIntro;