import styled from "styled-components";
import Img from "./Img";
import TextBox from "./TextBox";



const CardBox = styled.div`
    width : 260px;
    height : 427px;
    display : flex;
    flex-direction : column;
    gap : 16px;
    overflow: hidden;
`;

const Card2 = ({imageFile,text1,text2})=>{  
    return(

        <CardBox>
            <Img imageFile={imageFile}></Img>
            <TextBox text={text1 || "Text "}></TextBox>
            <TextBox text={text2 || "Text "}></TextBox>
        </CardBox>
    )
}
export default Card2;