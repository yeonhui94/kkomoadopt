import styled from "styled-components";

const ImageBox = styled.img`
    border-radius : 20px;
    width : 260px;
    height : 323px;
`;

const Img = ( {imageFile} ) =>{
    return(
        <ImageBox src={imageFile}></ImageBox>
    )
}

export default Img;