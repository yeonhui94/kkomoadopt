import { motion } from "framer-motion";
import styles from './CenterIntro.module.css';
import Screen1 from "./centerintro/screen1";
import PinkLine from "./centerintro/PinkLine";

const CenterIntro = () => {

    return (
        <div className="container">
            <Screen1/>
            <PinkLine/>
        {/* 세 번째 요소 */}
        <motion.div
                    initial={{ opacity: 0, scale: 0.9 }} // 초기 상태  
                    //뷰포트에 들어왔을때 (isInView) 애니메이션 설정한다. 
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }} // 애니메이션 상태
                    transition={{ duration: 0.5 }}>
            <h2>세 번째 요소</h2>
        </motion.div>

        </div>
    )


}

export default CenterIntro;