import styled from "styled-components";

const StyledButton = styled.button`
    padding : 12px ${props => props.horizontalPadding || "26px"}; 
    color: ${props => props.bg1color ? props.bg1color : 'var(--main-color)' };
    background-color: white;
    border: 2px solid ${props => props.bg1color ? props.bg1color : 'var(--main-color)' };
    border-radius : 10px;

    &:hover {
        color: white; 
        background-color: ${props => props.bg1color || "var(--main-color)"};
    }
`;

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