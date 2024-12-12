import styled from "styled-components";
import Img2 from "./Img2";  // 이미지를 나타내는 컴포넌트
import TextBox from "./TextBox"; // 텍스트 박스 컴포넌트

const CardBox5 = styled.div`
  width: 100%; /* 부모 컨테이너에 맞게 크기 조정 */
  height: auto; /* 비율에 맞게 자동으로 조정 */
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  /* 모바일에서 카드 크기 축소 */
  @media (max-width: 768px) {
    width: 45%; /* 모바일에서 카드 크기를 조정 */
    gap: 8px; /* 간격 축소 */
  }
`;

const Img2Styled = styled(Img2)`
  width: 100%;
  height: auto;
  object-fit: cover; /* 이미지 비율을 유지하면서 영역을 채우도록 설정 */

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서 이미지 크기 비례적으로 축소 */
    height: auto;
  }
`;

const TextBoxStyled = styled(TextBox)`
  font-size: 14px; /* 기본 텍스트 크기 */

  @media (max-width: 768px) {
    font-size: 12px; /* 모바일에서 텍스트 크기 축소 */
  }
`;

const FooterCard2 = ({ imageFile, text1, text2 }) => {
  return (
    <CardBox5>
      <Img2Styled imageFile={imageFile} />
      <TextBoxStyled text={text1 || "Text "} />
      <TextBoxStyled text={text2 || "Text "} />
    </CardBox5>
  );
};

export default FooterCard2;
