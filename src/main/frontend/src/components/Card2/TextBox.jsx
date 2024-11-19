import styled from "styled-components";

const Text = styled.div`
    width : 100%;
    height : 36px;
    background-color : var(--line-color);
    color : black;
    display: flex;
    text-align : center;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const TextBox=({text})=>{
    return(
        <Text>{text}</Text>
    )
}
export default TextBox;