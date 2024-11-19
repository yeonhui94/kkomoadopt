import styled from "styled-components";
import img1 from '../../assets/CardImage/1.jpg';
import Img from "./Img";
import TextBox from "./TextBox";



const CardBox = styled.div`
    width : 260px;
    height : 427px;
    display : flex;
    flex-direction : column;
    gap : 16px;
`;

const Card2 = ()=>{
    return(

        <CardBox>
            <Img imageFile={img1}></Img>
            <TextBox text={"gdgd"}>gdgd</TextBox>
            <TextBox></TextBox>
        </CardBox>
    )
}
export default Card2;