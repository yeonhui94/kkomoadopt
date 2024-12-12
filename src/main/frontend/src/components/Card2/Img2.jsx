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
    return(
        <ImageBox >
          <Image src={imageFile}></Image>
        </ImageBox>
    )
}


export default Img;