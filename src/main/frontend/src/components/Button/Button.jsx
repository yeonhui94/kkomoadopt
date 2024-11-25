import styled from "styled-components";

const StyledButton = styled.button`
    padding : 12px ${props => props.horizontalPadding || "26px"}; /* 두글자 기준 26px, 네글자 12px */
    color: ${props => props.bgcolor ? props.bgcolor : 'var(--main-color)' };
    background-color: white;
    border: 2px solid ${props => props.bg1color ? props.bg1color : 'var(--main-color)' };
    border-radius : 10px;

    &:hover {
        color: ${props => props.hovercolor ? props.hovercolor : 'white' };/* 호버 시 텍스트는 항상 흰색 */
        background-color: ${props => props.bg1color || "var(--main-color)"}; /* 배경색 */
    }
`;

function Button({bg1color, text, horizontalPadding,hovercolor,bgcolor, onClick}){
    return(
        <StyledButton
            bg1color={bg1color}
            horizontalPadding={horizontalPadding}
            hovercolor={hovercolor}
            bgcolor={bgcolor}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}

export default Button;