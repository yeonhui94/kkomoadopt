import styled from "styled-components";

const StyledButton = styled.button`
    padding: 21px 29px; 
    color : ${props => props.bgcolor ? '#ffffff' : props.bgcolor};
    background-color : ${props => props.bgcolor ? props.bgcolor : '#ffffff'}; /* 수정된 부분 */
    border: 3px solid #FDDCD5;
`;

function LinkButton({bgcolor, text }) {
    return (
        <StyledButton
            bgcolor={bgcolor}
        >
            {text}
        </StyledButton>
    );
}

export default LinkButton;