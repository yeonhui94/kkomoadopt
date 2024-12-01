import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 12px ${(props) => props.horizontalPadding || "12px"};
  color: black;
  background-color: ${(props) =>
    props.selected ? "var(--sub-color)" : "white"};
  border: 3px solid var(--sub-color);
  font-family: var(--main-font);
  font-size: ${(props) => props.fontSize || "20px"};

  &:hover {
    background-color: var(--sub-color);
  }

  @media (max-width: 1256px) {
    font-size: 1rem;
    padding: 12px 0px;
  }

  @media (max-width: 1056px) {
    font-size: 0.7rem;
  }

  @media (max-width: 865px) {
    font-size: 0.5rem;
    padding: 12px 0px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 12px 0px;
  }
`;

function LinkButton({ text, selected, onClick, horizontalPadding, fontSize }) {
  return (
    <StyledButton
      selected={selected}
      horizontalPadding={horizontalPadding}
      onClick={onClick}
      fontSize={fontSize || "1rem"}
    >
      {text}
    </StyledButton>
  );
}

export default LinkButton;
