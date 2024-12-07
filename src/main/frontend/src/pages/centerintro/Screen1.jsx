import { motion } from 'framer-motion';
import centerintrosty from '../CenterIntro.module.css';
import Divider from '../../components/Divider';


const Screen1 = () => {

    return (
        <motion.div className={`${centerintrosty.centint_big_text} 
        ${centerintrosty.centint_screen1 }`}
        style={{ gridRow: "1 / 2", gridColumn: " 2 / 3" }}
        // 스타일 클래스를 지정
        initial={{ opacity: 0, scale: 0.9 }} // 화면이 처음 렌더링될 때 초기 상태 (투명도 0, 크기 90%)
              
                       // 화면이 뷰포트에 들어올 때 실행할 애니메이션
        whileInView={{ opacity: 1, scale: 1 }}  // 뷰포트에 들어오면 opacity 1, scale 1로 변경
                       
                       // 뷰포트 감지 조건 설정
        viewport={{ 
            margin: "-30%",  // 뷰포트의 상하좌우 여백을 -30%로 설정하여 조금 더 일찍 애니메이션 시작
            once: false  // 처음 들어왔을 때만 애니메이션을 실행하지 않고 반복되도록 설정 ㅍ
                }}
                       
                       // 애니메이션 전환 효과 설정
        transition={{ duration: 0.8 }} // 애니메이션이 0.5초 동안 실행되도록 설정
        >

           <p className={`${centerintrosty.centint_sc1_text} ${centerintrosty.centint_big_text} `}> 
            KKOMO 보호센터는 <br/>사지 않고 <span className={centerintrosty.centint_highlight}>입양</span>하는 
            문화를 만듭니다</p>

            {/* <Divider
                width="100%"
                backgroundColor="#d5d5d5"
                height="2px"
                style={{gridArea: "2/3/3/4"}}
            /> */}
          
        </motion.div>
        
    )

}

export default Screen1;

