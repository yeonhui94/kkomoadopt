import { motion } from "framer-motion";
import styles from '../components/Header.module.css';

function Tab({ label, isSelected, onClick, onMouseEnter, onMouseLeave }) {
    return (
        <li
            onClick={onClick} // 탭 클릭 이벤트
            className={styles.menuItem} // CSS 클래스
            onMouseEnter={onMouseEnter} // 마우스 올림 이벤트
            onMouseLeave={onMouseLeave} // 마우스 벗어남 이벤트
        >
            {label} {/* 탭의 이름 */}
            {isSelected && (
                <motion.div
                    layoutId="underline" // 같은 애니메이션 그룹
                    style={{
                        height: 4, // 밑줄 높이
                        background: "#F8755B", // 밑줄 색상
                        borderRadius: 4, // 모서리 둥글게
                        marginTop: 2
                    }}
                    initial={{ width: 0 }} // 초기 밑줄 너비
                    animate={{ width: "100%" }} // 애니메이션 후 밑줄 너비
                    transition={{ duration: 0.3, ease: "easeInOut" }} // 애니메이션 속도와 타입
                />
            )}
        </li>
    );
}


export default Tab;
