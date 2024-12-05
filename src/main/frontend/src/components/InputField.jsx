import React from 'react';
import styled from 'styled-components';

// 인풋 필드 스타일
const StyledInput = styled.input`
  width: ${props => props.width ? props.width : '100%'};
  height : ${props => props.height ? props.height : '0'};
  padding: 12px;
  margin-bottom : ${props => props.marginBottom ? props.marginBottom : '0px' };
  margin-top : ${props => props.marginTop ? props.marginTop : '0px' };
  margin-left: ${(props) => props.marginLeft || '0'}; /* margin-left 추가 */
  border-radius:  ${props => props.borderRadi ? props.borderRadi : '10px' };
  border: 2px solid ${props => props.bg1color ? props.bg1color : '#ccc' }; 
  font-size: 1rem;;
  palce-holder: ${props => props.placeholder ? props.placeholder : 'none'};

  &:focus {
    border-color: #444444; /* 포커스 시 테두리 색상 */
    outline: none;
  }
`;

const InputField = ({width,height, type, placeholder, value, onChange ,marginTop ,marginBottom, borderRadi, marginLeft,maxLength}) => {
  return (
    <div>
      <StyledInput
        width={width}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        height={height}
        borderRadi={borderRadi}
        maxLength={maxLength}
      />
    </div>
  );
};

export default InputField;
