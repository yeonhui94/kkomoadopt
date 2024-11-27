import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;

    li {
      color: #2d3439;
      font-size: 18px;
      padding: 10px;
      cursor: pointer;

      &.active {
        background-color: #ebebff;
        color: #7070ff;
        border-radius: 8px;
        font-weight: bold;
        padding: 12px 16px;
      }
    }
  }
`;

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <SidebarWrapper>
      <ul>
        <li
          className={selectedCategory === '전체' ? 'active' : ''}
          onClick={() => setSelectedCategory('전체')}
        >
          전체
        </li>
        <li
          className={selectedCategory === '계정 및 회원관리' ? 'active' : ''}
          onClick={() => setSelectedCategory('계정 및 회원관리')}
        >
          카테고리 1
        </li>
        <li
          className={selectedCategory === '카테고리 2' ? 'active' : ''}
          onClick={() => setSelectedCategory('카테고리 2')}
        >
          카테고리 2
        </li>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
