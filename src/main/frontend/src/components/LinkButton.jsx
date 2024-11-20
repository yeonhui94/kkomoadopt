import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding : 12px ${props => props.horizontalPadding || "12px"};
    color: ${props => props.bg1color ? props.bg1color : "black" };
    background-color: ${props =>  
        props.clicked ? props.clickedColor : 
        props.bg1color ? "white" : props.bg1color };
    border: 2px solid var(--sub-color);
    font-weight : bold;
    font-family : var(--main-font);

    &:hover {
        background-color: ${props => props.bg1color || "var(--sub-color)"};
`

function LinkButton({bg1color, clickedColor="var(--sub-color)", text, horizontalPadding}){
    const[clicked,setClicked] = useState(false)

    const handleClick = () => {
        if (!clicked) {
            setClicked(true); // 클릭 시 색상 고정 __토글로 만들어야할까용?
        }
    };

    return(
        <StyledButton
            bg1color={bg1color}
            horizontalPadding={horizontalPadding}
            clicked={clicked}
            clickedColor={clickedColor}
            onClick={handleClick}
        >    
            {text}
        </StyledButton>
    )
}

export default LinkButton;