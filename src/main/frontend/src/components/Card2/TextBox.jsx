import styled from "styled-components";


const Container = styled.div`
  width: 100%;                  /* 부모 요소의 너비를 100%로 설정 */
  height: 36px;                 /* 고정 높이 */
  background-color: var(--line-color); /* 배경 색상 */
  padding : 10px;
  
  display: flex;                /* Flexbox로 자식 요소를 정렬 */
  justify-content: center;      /* 가로 중앙 정렬 */
  align-items: center;          /* 세로 중앙 정렬 */
  text-align : center;

  white-space: nowrap;          /* 텍스트가 한 줄로 나열되도록 */
  overflow: hidden;             /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis;      /* 넘치는 텍스트는 '...' 으로 대체 */
`

const Text = styled.div`
  display: block;               /* 텍스트 박스는 block으로 설정 */
  width: 100%;                  /* 텍스트 박스가 부모 요소의 너비에 맞게 설정 */
  overflow: hidden;             /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis;      /* 넘치는 텍스트는 '...' 으로 대체 */
`;



const TextBox=({text})=>{
    return(
        <Container>
        <Text>
            {text}
        </Text>
        </Container>
    )
}
export default TextBox;