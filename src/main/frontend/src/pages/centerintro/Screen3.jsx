import { motion } from 'framer-motion';
import Divider from '../../components/Divider';
import centerintrosty from '../CenterIntro.module.css';


const Screen3 = () => {

    return (
        <motion.div className={centerintrosty.centint_screen3} 
        style={{gridArea : "3/2/3/3"}}
        initial={{ opacity: 0, scale: 0.9 }} // 화면이 처음 렌더링될 때 초기 상태 (투명도 0, 크기 90%)
              
        // 화면이 뷰포트에 들어올 때 실행할 애니메이션
        whileInView={{ opacity: 1, scale: 1 }}  // 뷰포트에 들어오면 opacity 1, scale 1로 변경
        
        // 뷰포트 감지 조건 설정
        viewport={{ 
          margin: "-30%",  // 뷰포트의 상하좌우 여백을 -30%로 설정하여 조금 더 일찍 애니메이션 시작
          once: false  // 처음 들어왔을 때만 애니메이션을 실행하지 않고 반복되도록 설정ㅍ
        }}
        
        // 애니메이션 전환 효과 설정
        transition={{ duration: 0.8 }} // 애니메이션이 0.5초 동안 실행되도록 설정
        >
  
            <p className={`${centerintrosty.centint_big_text} ${centerintrosty.centint_sc3_text}`}>
                    KKOMO 보호센터는<br/> <span className={centerintrosty.centint_highlight}>매년 1만 마리</span> 이상의 유기동물에게
                    <br/>새로운 가족을 찾아주고 있습니다
            </p>
                
      
        </motion.div>
    )
    

}

export default Screen3;