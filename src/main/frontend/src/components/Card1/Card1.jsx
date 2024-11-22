import styled from "styled-components";
import CardImage from "./CardImage";

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
    width: ${({ width }) => width || "72px"};
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

const Card1 = ({ images }) => {
  return (
    <CardWrapper>
      {/* Main image card */}
      <StyledCard className="styled-card large-card">
        <CardImage
          imageFile={images[0].image}
          text={"인삼이"}
          ps={"top"}
          size={"2rem"}
          additionalText={
            "이곳은 컨텐츠 부분으로 자세한 글이 나오는 곳입니다."
          }
          fontSize={"1rem"}
          isFirst={true}
        />
      </StyledCard>

      {/* Additional images in CardContainer */}
      <CardContainer className="card-container">
        {images.slice(1).map((card, index) => (
          <StyledCard key={index} className="styled-card small-card" width={card.width} height={card.height}>
            {/* 마지막 이미지에만 "자세히 보기" 텍스트 추가 */}
            {index === images.length - 2 ? (
              <CardImage
                imageFile={card.image}
                text={"자세히 보기"}
                ps={"center"}
                size={"0.6rem"}
                isFirst={false}
              />
            ) : (
              <CardImage imageFile={card.image} text={""} />
            )}
          </StyledCard>
        ))}
      </CardContainer>
    </CardWrapper>
  );
};

export default Card1;
