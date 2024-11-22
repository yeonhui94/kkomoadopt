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
            className={styles.box}
            initial={{ opacity: 0, y: 1000 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }} // 요소의 50%가 보일 때 애니메이션 시작
            transition={{ duration: 0.8 }}
        >
            <h2>세 번째 요소</h2>
        </motion.div>

        </div>
    )


}

export default CenterIntro;