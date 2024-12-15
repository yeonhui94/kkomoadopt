import styled from "styled-components";
import Img from "./Img";
import TextBox from "./TextBox";
import Scrap from "../Scrap/Scrap"; // Scrap 컴포넌트 임포트



const CardBox = styled.div`
  width: 260px;
  height: 427px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  position: relative; /* Scrap 버튼을 위치 조정하기 위해 필요 */
`;

const ScrapContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Card2 = ({ imageFile, text1, text2, isScraped, onScrapToggle, adoptNum,to }) => {
    return (
        <CardBox>
            <Img imageFile={imageFile}  adoptNum={adoptNum} to={to}/>
            <TextBox text={text1 || "Text"} />
            <TextBox text={text2 || "Text"} />
            {onScrapToggle && ( // onScrapToggle
                <ScrapContainer>
                    <Scrap isScraped={isScraped} onToggle={onScrapToggle} />
                </ScrapContainer>
            )}
        </CardBox>
    );
};

export default Card2;
