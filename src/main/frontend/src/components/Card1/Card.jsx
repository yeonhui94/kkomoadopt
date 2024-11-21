import styled from "styled-components";
import imgg1 from "../../assets/img2/1.jpg";
import imgg2 from "../../assets/img2/2.jpg";
import imgg3 from "../../assets/img2/3.jpg";
import imgg4 from "../../assets/img2/4.jpg";
import CardImage from "./CardImage";
// import TextBox2 from "./TextBox2";




const CardWrapper = styled.div`
  width: 260px;
  height: 427px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;

  &:hover {
    .styled-card.large-card {
      height: 319px;
    }

    .card-container {
      opacity: 1;
      transform: translateY(0); 
      transition-delay: 0.5s; 
    }
    .divider,
    .additional-text {
    opacity: 0;
  }
`;

const StyledCard = styled.div`
  width: ${({ width }) => width || "260px"};
  height: ${({ height }) => height || "427px"};
  border-radius: 10px;
  position: relative;
  margin-top: ${({ top }) => top || "0"};
  min-width: ${({ minWidth }) => minWidth || "0"};
  min-height: ${({ minHeight }) => minHeight || "0"};
  display: ${({ display }) => display || "block"};
  flex-wrap: wrap;
  transition: height 0.5s ease;

  &.styled-card.small-card {
    height: ${({ height }) => height || "72px"};
  }

  &.styled-card.large-card {
    transition: height 0.5s ease;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center; 
  align-items: center;
  width: 100%;
  height: 108px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  

  &:hover {
    opacity: 1;
    transform: translateY(-20px);
  }
`;

const Card = () => {
  const cardInfo = [
    { width: "72px", height: "72px", image: imgg2 },
    { width: "72px", height: "72px", image: imgg3 },
    { width: "72px", height: "72px", image: imgg4 },
  ];

  return (
    <CardWrapper>
      <StyledCard className="styled-card large-card">
        <CardImage imageFile={imgg1} text={"인삼이"} ps={'top'} size={'2rem'} additionalText={"이곳은 컨텐츠 부분으로 자세한 글이 나오는 곳입니다."} fontSize={'1rem'} isFirst={true}>
        </CardImage>
      </StyledCard>
      <CardContainer className="card-container">
        {cardInfo.map((card, index) => (
          <StyledCard key={index} className="styled-card small-card" width={card.width} height={card.height}>
            {card.image === imgg4 ? <CardImage imageFile={card.image} text={"자세히 보기"} ps={'center'} size={'0.6rem'} isFirst={false}></CardImage> :
            <CardImage imageFile={card.image} text={""}></CardImage>}
          </StyledCard>
        ))}
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
