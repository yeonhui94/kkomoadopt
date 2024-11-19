import styled from "styled-components";

const Text = styled.div`
    width : 100%;
    height : 36px;
    background-color : var(--line-color);
    color : black;
`;

const TextBox=({text})=>{
    return(
        <Text>{text}</Text>
    )
}
export default TextBox;