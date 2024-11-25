// ControlButton.js
import React from 'react';
import styled from 'styled-components';

// 버튼 스타일 정의
const Button = styled.button`
  background-color: white;
  color: #F8755B;
  border:1px solid #F8755B;
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  
`;

function ControlButton({ direction, onClick }) {
  return (
    <Button direction={direction} onClick={onClick}>
      {direction === 'prev' ? '◀' : '▶'}
    </Button>
  );
}

export default ControlButton;
