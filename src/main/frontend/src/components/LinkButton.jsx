import { useState } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
    padding: 21px 29px; 
    color : ${props => props.isClicked ? "white" : "#fffff" };
    background-color : ${props => props.isClicked ?  props.bgcolor : "white"};
    border: 3px solid var(--sub-color);
`;


function LinkButton({bgcolor, text }) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <StyledButton 
            bgcolor={bgcolor}
            isClicked={isClicked}
            onClick={handleClick}
        >
            {text}
        </StyledButton>
    );
}

export default LinkButton;