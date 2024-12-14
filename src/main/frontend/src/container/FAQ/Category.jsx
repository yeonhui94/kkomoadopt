import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';  // 프레이머 모션 임포트

const CategoryWrapper = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    width: 100%;
    flex-wrap: wrap;  /* 화면 크기에 따라 줄 바꿈을 허용 */
  }

  li {
    border: 1px solid #cfcbcb;
    border-radius: 10px;
    padding: 10px 40px;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    position: relative;
    user-select: none;
    margin-right: 10px;  
    margin-bottom: 10px;  
    /* min-width: 150px;   */
    flex-grow: 1;  
    text-align: center;  

    /* 작은 화면에서는 탭 크기를 줄이기 위한 미디어 쿼리 */
    @media (max-width: 768px) {
      padding: 10px 20px;  
      font-size: 14px;  
  }
}
`;

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['전체', '계정 및 회원관리', '입양', '봉사', '후원', '블랙리스트'];

  return (
    <CategoryWrapper>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            {/* 선택된 탭에만 보더 바텀이 보이도록 애니메이션 적용 */}
            {category === selectedCategory && (
              <motion.div
                className="underline"
                layoutId="underline"  // 동일한 layoutId를 사용하는 div는 애니메이션 효과를 공유합니다.
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: 'var(--main-color)',  // 원하는 색상으로 수정
                }}
              />
            )}
          </li>
        ))}
      </ul>
    </CategoryWrapper>
  );
};

export default Category;
