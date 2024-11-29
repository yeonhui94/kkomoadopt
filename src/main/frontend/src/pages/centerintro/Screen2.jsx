import Divider from '../../components/Divider';
import centerintrosty from '../CenterIntro.module.css';
import { motion } from 'framer-motion';

const Screen2 = () => {

    return (
        <motion.div className={`${centerintrosty.centint_screen2}`}
        style={{gridArea: "2/2/3/3"}}
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
            <div className={centerintrosty.centint_sc2_contents}>
                <p className={`${centerintrosty.centint_medium_text} ${centerintrosty.centint_sr2_text1}`}>
                매년 전국적으로 <span className={centerintrosty.centint_blacktextshadow}>10만 마리</span> 이상의<br/>유기 동물들이 보호소로 구조되고 있습니다.
                </p>
                <p className={`${centerintrosty.centint_medium_graytext} ${centerintrosty.centint_sr2_text2}`}>
                안타깝게도 이 중 절반에 가까운 동물들은 <br/>
                다시 가족을 만나지 못하고 안락사 되거나 자연사 하고 있습니다
                </p>
                <div className={`${centerintrosty.centint_img1} ${centerintrosty.centint_imgs}`}/>
            </div>
       
        </motion.div>
    )

}

export default Screen2;