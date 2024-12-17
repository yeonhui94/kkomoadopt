import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageBox = styled.div`
    border-radius : 20px;
    width : 260px;
    height : 323px;
    overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height : 100%;
  
  &:hover {
    transform: scale(1.2); 
    transition: transform 0.3s ease;
  }
`;

const Img = ( {imageFile,onDetailPage,adoptNum , to=`/adoption/post/${adoptNum}`} ) =>{
    // imageFile이 배열일 경우 첫 번째 요소만 사용
    return(
        <Link to={to}>
        <ImageBox onClick={onDetailPage}>
        <Image src={imageFile[0]} />
        </ImageBox>
        </Link>
    )
}


export default Img;