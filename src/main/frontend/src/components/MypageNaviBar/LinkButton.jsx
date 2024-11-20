import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 12px ${(props) => props.horizontalPadding || "12px"};
  color: black;
  background-color: ${(props) =>
    props.selected ? "var(--sub-color)" : "white"};
  border: 4px solid var(--sub-color);
  border-top: 6px solid var(--sub-color);
  border-bottom: 6px solid var(--sub-color);
  font-weight: bold;
  font-family: var(--main-font);
  font-size: 20px;

  &:hover {
    background-color: var(--sub-color) ;
  }
`;

function LinkButton({ text, selected, onClick, horizontalPadding }) {
  return (
    <StyledButton
      selected={selected}
      horizontalPadding={horizontalPadding}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

export default LinkButton;
