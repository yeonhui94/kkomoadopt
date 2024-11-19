import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding : 12px ${props => props.horizontalPadding || "12px"};
    color: ${props => props.bg1color ? props.bg1color : "black" };
    background-color: ${props =>  
        props.clicked ? props.clickedColor : 
        props.bg1color ? "white" : props.bg1color };
    border: 2px solid var(--sub-color);

    &:hover {
        background-color: ${props => props.bg1color || "var(--sub-color)"};
`

function LinkButton({bg1color, clickedColor="var(--sub-color)", text, horizontalPadding}){
    const[clicked,setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked); // 클릭 시 상태 토글
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