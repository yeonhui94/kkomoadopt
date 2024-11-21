import styled from "styled-components";

const TextBoxWrapper = styled.div`
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9); 
    font-size: ${({ fontSize }) => fontSize }; /* 기본 폰트 크기 1rem */
    z-index: 3;
`;

const TextBox2 = ({ text, size }) => {
  return <TextBoxWrapper fontSize={size}>{text}</TextBoxWrapper>;
};

export default TextBox2;