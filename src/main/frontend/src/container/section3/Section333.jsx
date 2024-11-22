import styled from "styled-components";
import img1 from "../../assets/img2/1.jpg";
import img2 from "../../assets/img2/2.jpg";
import img3 from "../../assets/img2/3.jpg";
import img4 from "../../assets/img2/4.jpg";
import img5 from "../../assets/img2/5.jpg";
import { useState, useEffect } from "react";

const StyledSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 화면 밖으로 나가는 부분은 숨깁니다. */

  div {
    width: 100%;
    display: flex;
    overflow: hidden;
  }

  ul {
    display: flex;
    padding: 0;
    transition: transform 1s ease-in-out; /* 슬라이드 애니메이션 효과 */
    width: max-content;
  }

  li {
    border: 1px solid black;
    padding: 10px;
    margin: 0 5px;
    list-style-type: none;
    flex-shrink: 0;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover; /* 이미지 비율 유지 */
  }
`;

const Section333 = () => {
  const images = [img1, img2, img3, img4, img5];

  // 슬라이드 인덱스 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect를 사용하여 3초마다 슬라이드가 이동하도록 설정
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 인덱스를 순차적으로 증가시켜줍니다.
    }, 3000); // 3초마다 슬라이드 전환

    return () => clearInterval(interval); // 컴포넌트가 unmount될 때 interval 정리
  }, []);

  return (
    <StyledSection>
      <div>
        <ul
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // 현재 인덱스만큼 이동
          }}
        >
          {/* 이미지들 렌더링 */}
          {images.map((img, index) => (
            <li key={index}>
              <img src={img} alt={`Image ${index + 1}`} />
            </li>
          ))}
          {/* 슬라이드 복제본을 추가하여 무한 슬라이드를 만들기 */}
          {images.map((img, index) => (
            <li key={index + images.length}>
              <img src={img} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </StyledSection>
  );
};

export default Section333;
