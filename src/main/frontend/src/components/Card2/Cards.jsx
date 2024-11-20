import React from "react";
import styled from "styled-components";
import Card2 from "./Card2"; 
import img1 from "../../assets/CardImage/1.jpg";
import img2 from "../../assets/CardImage/2.jpg";
import img3 from "../../assets/CardImage/3.jpg";
import img4 from "../../assets/CardImage/4.jpg";
import img5 from "../../assets/CardImage/5.jpg";
import img6 from "../../assets/CardImage/6.jpg";
import img7 from "../../assets/CardImage/7.jpg";
import img8 from "../../assets/CardImage/8.jpg";
import img9 from "../../assets/CardImage/9.jpg";
import img10 from "../../assets/CardImage/10.jpg";
import img11 from "../../assets/CardImage/11.jpg";
import img12 from "../../assets/CardImage/12.jpg";



const CardContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  grid-gap: 66px; 
  // padding: 16px;
  width: 100%;
`;

const Cards = () => {
  const cardData = [
    { image: img1, text1: "Card 1" },
    { image: img2, text1: "Card 2" },
    { image: img3, text1: "Card 3" },
    { image: img4, text1: "Card 4" },
    { image: img5, text1: "Card 5" },
    { image: img6, text1: "Card 6" },
    { image: img7, text1: "Card 7" },
    { image: img8, text1: "Card 8" },
    { image: img9, text1: "Card 9" },
    { image: img10, text1: "Card 10" },
    { image: img11, text1: "Card 11" },
    { image: img12, text1: "Card 12" },

  ];

  return (
    <CardContainer>
      {cardData.map((card, index) => (
        <Card2 key={index} imageFile={card.image} text1={card.text1} />
      ))}
    </CardContainer>
  );
};

export default Cards;
