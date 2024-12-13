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

const Img = ( {imageFile} ) =>{
    // imageFile이 배열일 경우 첫 번째 요소만 사용


    return(
        <ImageBox >
         <Image src={`http://localhost:8080/upload/${imageFile[0]}`} />
        </ImageBox>
    )
}


export default Img;