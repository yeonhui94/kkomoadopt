import styled from "styled-components";

const StyledButton = styled.button`
    padding :   ${props => props.verticalPadding || "12px"}
                ${props => props.horizontalPadding || "26px"}; /* 두글자 기준 26px, 네글자 12px */
    color: ${props => props.color ? props.color : 'var(--main-color)' };
    background-color: ${props => props.backColor ? props.backColor : 'white' };
    border: 2px solid ${props => props.bg1color ? props.bg1color : 'var(--main-color)' };
    border-radius : 10px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'none' };
    font-size : ${props => props.fontSize ? props.fontSize : 'none' };
    margin-bottom : ${props => props.marginBottom ? props.marginBottom : '0px' };
    margin-top : ${props => props.marginTop ? props.marginTop : '0px' };

    &:hover {
        color: white; /* 호버 시 텍스트는 항상 흰색 */
        background-color: ${props => props.bg1color || "var(--main-color)"}; /* 배경색 */
    }
`;

function Button({color, bg1color,backColor, text, horizontalPadding,verticalPadding, fontWeight, fontSize, marginBottom, marginTop}){
    return(
        <StyledButton
            color={color}
            bg1color={bg1color} 
            verticalPadding={verticalPadding}
            horizontalPadding={horizontalPadding}
            fontWeight={fontWeight}
            fontSize={fontSize}
            marginBottom={marginBottom}
            marginTop={marginTop}
            backColor={backColor}
        >
            {text}
        </StyledButton>
        
    )
}

export default Button;