import styled from "styled-components";

const StyledDiv = styled.div`
        display : flex;
        flex-direction: column;
        background-color : var(--line-color);
        border-radius: 10px;
        padding : 8px;
`;



const StyledLabel = styled.label`
    font-weight : bold;
    padding-bottom: 8px;
`;


function AdoptionDropdown ({text, itype}){
    return(
        <StyledDiv>
            <StyledLabel >{text}</StyledLabel>
            <input type={itype || "text"}/>
        </StyledDiv>
    )
}

export default AdoptionDropdown;