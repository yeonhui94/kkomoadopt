import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DropdownWrapper = styled.div`
  cursor: pointer;
  position: relative;
  border: none;
  font-size : 10px;
  font-weight : 550;
  font-family : var(--main-font);
`;

const DropdownButton = styled(motion.div)`
  padding: 10px;
  border: none;
  display: flex;
  cursor: pointer;
`;

const OptionsContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 10px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

function Classification({ options, defaultValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(defaultValue); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectChange = (label) => {
    setSelectedLabel(label); 
    setIsOpen(false); 
  };

  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={toggleDropdown}
        initial={{ opacity: 1 }}
        
      >
        {selectedLabel || "전체보기"} 
      </DropdownButton>

      {isOpen && (
        <OptionsContainer
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}    
          transition={{
            duration: 0.5,
            ease: "easeInOut", 
          }}
        >
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleSelectChange(option.label)}>
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </DropdownWrapper>
  );
}

export default Classification;
