import styled from "styled-components";

const StyledButton = styled.button`
    padding: 21px 29px; 
    color : ${props => props.color || '#F8755B'};
    background-color : ${props => props.bgcolor || '#ffffff'}; /* 수정된 부분 */
    border: 3px solid #F8755B;

    &:hover {
        color: #ffffff;
        background-color: #F8755B;
    }
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