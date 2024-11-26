import styled from "styled-components"; 
import CenterBgImage from './centerBg.png'; 
import CenterBgImage2 from './Group26.png';
const CenterBgWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${CenterBgImage});
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  border-radius: 20px;
`;

function MyCenterBg() {
  return (
    <span style={{ display: "flex" }}>
      <CenterBgWrapper>
      </CenterBgWrapper>
    </span>
  );
}

export default MyCenterBg;
