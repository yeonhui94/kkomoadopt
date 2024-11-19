import styled from "styled-components";

const StyledButton = styled.button`
    padding : 12px ${props => props.horizontalPadding || "12px"};
    color: ${props => props.bg1color ? props.bg1color : "white" };
    background-color: ${props => props.bg1color ? "white" : props.bg1color };
    border: 2px solid #F8755B;
    border-radius : 10px;

    &:hover {
        color: ${props => props.bg1color ? "white" : props.bg1color};
        background-color: ${props => props.bg1color ? props.bg1color : "white"};
`

function Button({bg1color, text, horizontalPadding}){
    return(
        <StyledButton
            bg1color={bg1color}
            horizontalPadding={horizontalPadding}
        >    
            {text}
        </StyledButton>
    )
}

export default Button;