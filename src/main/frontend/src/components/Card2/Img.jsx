import styled from "styled-components";

const ImageBox = styled.div`
    border-radius : 20px;
    width : 260px;
    height : 323px;
    overflow: hidden;
`;

const Image = styled.img`
  &:hover {
    transform: scale(1.5); 
    transition: transform 0.3s ease;
  }
`;

const Img = ( {imageFile} ) =>{
    return(
        <ImageBox>
            <Image  src={imageFile}></Image>
        </ImageBox>
    )
}

export default Img;