import { motion } from 'framer-motion';
import centerintrosty from '../CenterIntro.module.css';
import Map from './Map';

const Screen6 = () => {

    return (
        <motion.div className={centerintrosty.centint_screen6}
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
        <p className={`${centerintrosty.centint_big_text} ${centerintrosty.centint_sc6_title}`}>
        오시는 길
        </p>
        <div className={`${centerintrosty.centint_small_text} ${centerintrosty.centint_sc6_texts}`}>
            <div className={`${centerintrosty.centint_sc6_text1_ad}`}>
                <p className={`${centerintrosty.centint_sc6_text1_ad1 }`}>
                    주소
                </p>
                <p className={`${centerintrosty.centint_sc6_text1_ad2 }`}>
                    서울시 금천구 가산디지털2로 101<br/>한라원앤원 타워 3층
                </p>
            </div>
            <div className={`${centerintrosty.centint_sc6_text2_num}`}>
            <p className={`${centerintrosty.centint_sc6_text2_num1 }`}>
                    번호
                </p>
                <p className={`${centerintrosty.centint_sc6_text2_num2 }`}>
                    010-1234-5678
                </p>
            </div>
            <div className={`${centerintrosty.centint_sc6_text3_email}`}>
                <p className={`${centerintrosty.centint_sc6_text3_email1 }`}>
                    이메일
                </p>
                <p className={`${centerintrosty.centint_sc6_text3_email2 }`}>
                    abcd@kkomo.com
                </p>
            </div>
        </div>
        <div className={`${centerintrosty.centint_img4} ${centerintrosty.centint_imgs}`}>
            <Map/>
        </div>
    
    </motion.div>
    )

}

export default Screen6;