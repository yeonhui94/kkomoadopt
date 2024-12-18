import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // framer-motion import
import searchImg from '../../assets/search.svg'; // 이미지를 불러옵니다.

const ContentWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 10px 0;
      cursor: pointer;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: flex;
      flex-direction: column;

      .title {
        color: #444;
        display: flex;
        align-items: center; /* 제목과 이미지를 세로로 정렬 */
      }

      .title img {
        margin: 0 10px; /* 제목과 이미지 사이의 간격 */
        width: 16px; /* 이미지 크기 */
        height: 16px; /* 이미지 크기 */
      }

      /* content 스타일은 motion.div로 변경할 예정 */
      .content {
        color: black;
        margin: 10px 100px;
      }
    }
  }
`;

const Content = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };

  return (
    <ContentWrapper>
      <ul>
        {items.map((item, index) => (
          <li key={item.id} onClick={() => handleToggle(index)}>
            <div className="title">
              <img src={searchImg} alt="search icon" />
              {item.title}
            </div>
            <motion.div
              className="content"
              initial={{ opacity: 0,display:'none' }} 
              animate={{ opacity: activeIndex === index ? 1 : 0 , display : activeIndex === index ? 'block' : 'none'}} 
              exit={{ opacity: 0 , display:'none'}} 
              transition={{ duration: 0.3 }}
            >
              → {item.content}
            </motion.div>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
};

export default Content;
