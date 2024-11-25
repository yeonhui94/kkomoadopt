import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import CenterBgImage from './centerBg.png'; 

function MyCenterBg({ slideIndex }) {
  const [centerText, setCenterText] = useState([
    { title: '첫 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 첫 번째 입양 후기입니다.' },
    { title: '두 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 두 번째 입양 후기입니다.' },
    { title: '세 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 세 번째 입양 후기입니다.' },
    { title: '네 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 네 번째 입양 후기입니다.' },
    { title: '다섯 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 다섯 번째 입양 후기입니다.' },
    { title: '여섯 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 여섯 번째 입양 후기입니다.' },
    { title: '일곱 번째 입양 후기', nickname: '작성자 | 글쓴이', content: '이것은 일곱 번째 입양 후기입니다.' },
  ]);

  return (
    <span style={{ display: "flex" }}>
      <div
        className="dd"
        style={{
          position: 'absolute', 
          top: '10%', 
          left: '0',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${CenterBgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: '-1',
          borderRadius : '20px'
        }}
      >
        {/* 타이틀 텍스트 애니메이션 */}
        <motion.div
          key={`title-${slideIndex}`}  // 슬라이드 인덱스를 키로 사용하여 타이틀 변경 시 애니메이션이 작동하도록 함
          style={{
            position: 'absolute',
            top: '22%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'black',
            textAlign: 'center',
            width: '80%',
            zIndex: '1000'
          }}
          initial={{ opacity: 0 }}  // 처음에는 보이지 않음
          animate={{ opacity: 1 }}  // 나타남
          exit={{ opacity: 0 }}  // 사라짐
          transition={{
            duration: 1,  // 애니메이션 지속 시간 1초
            ease: 'easeInOut',  // 부드러운 애니메이션
          }}
        >
          <h2>{centerText[slideIndex].title}</h2>
          <p>{centerText[slideIndex].nickname}</p>
        </motion.div>

        {/* 내용 텍스트 애니메이션 */}
        <motion.div
          key={`content-${slideIndex}`}  // 슬라이드 인덱스를 키로 사용하여 내용 변경 시 애니메이션이 작동하도록 함
          style={{
            position: 'absolute',
            bottom: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'black',
            textAlign: 'center',
            width: '80%',
          }}
          initial={{ opacity: 0 }}  // 처음에는 보이지 않음
          animate={{ opacity: 1 }}  // 나타남
          exit={{ opacity: 0 }}  // 사라짐
          transition={{
            duration: 1,  // 애니메이션 지속 시간 1초
            ease: 'easeInOut',  // 부드러운 애니메이션
          }}
        >
          <p>{centerText[slideIndex].content}</p>
        </motion.div>
      </div>
      <style>
        {`
          @media (max-width: 1023px) {
            span{
              position : absolute;
              bottom : 20px;
              left : 10px
            }
            div {
              background-size: 45%; 
          }
          @media (max-width: 768px) {
            div{
             background-size: 60%;
           }
          }
        `}
      </style>
    </span>
  );
}

export default MyCenterBg;
