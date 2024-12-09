import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import CenterBgImage from './centerBg.png'; 
import CenterBgImage2 from './Group26.png';

const Cetbg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const CenterBgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 22%;
  width: 100%;
  height: 100%;
  background-image: url(${CenterBgImage});
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: calc(80% + 10px);
    height: calc(60%);
    bottom: 400px;
    background-size: contain;
  }

  /* Edge 브라우저에서 적용되는 스타일 */
  &.edge {
    background-position: left top;
    /* top:0; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    /* bottom: 10%; */
    width: 100%;
    height: 100%;
    background-image: url(${CenterBgImage});
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    border-radius: 20px;

    @media (max-width: 768px) {
      width: calc(80% + 10px);
      height: calc(60%);
      bottom: 45%;
      background-size: contain;
    }
  }
`;

function MyCenterBg() {
  const [isEdge, setIsEdge] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Edge 브라우저를 감지하는 정규식
    if (userAgent.indexOf('Edg') > -1) {
      setIsEdge(true);
    }
  }, []);

  return (
    <Cetbg>
      <CenterBgWrapper className={isEdge ? 'edge' : ''}>
        {/* 배경 이미지만 사용하므로 img 태그는 필요없음 */}
      </CenterBgWrapper>
    </Cetbg>
  );
}

export default MyCenterBg;
