import styled from "styled-components";

const StyledButton = styled.button`
    padding : 12px ${props => props.horizontalPadding || "26px"}; /* 두글자 기준 26px, 네글자 12px */
    color: ${props => props.bg1color ? props.bg1color : 'var(--main-color)' };
    background-color: ${props => props.bg1color ? "white" : props.bg1color };
    border: 2px solid ${props => props.bg1color ? props.bg1color : 'var(--main-color)' };
    border-radius : 10px;

    &:hover {
        color: white; /* 호버 시 텍스트는 항상 흰색 */
        background-color: ${props => props.bg1color || "#F8755B"}; /* 배경색 */
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