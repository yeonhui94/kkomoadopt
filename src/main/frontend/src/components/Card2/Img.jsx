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
    const imageSource = Array.isArray(imageFile) 
        ? imageFile[0].startsWith('data:image') 
            ? imageFile[0]  // base64 이미지
            : `http://localhost:8080/upload/${imageFile[0]}`  // 서버 경로 이미지
        : imageFile.startsWith('data:image')  // 문자열이면 base64 이미지
            ? imageFile 
            : `http://localhost:8080/upload/${imageFile}`;  // 서버 경로 이미지

    return(
        <ImageBox >
         <Image src={imageSource} />
        </ImageBox>
    )
}


export default Img;