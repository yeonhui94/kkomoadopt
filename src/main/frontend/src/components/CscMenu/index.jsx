import Divider from "../Divider";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const CscMenuContainer = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  padding-top: 16px;
`;

const CscMenuOptionContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

`;

const StyledLink = styled(NavLink)`
  width: 100%;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 2.25rem;
  margin: 0;
  text-align: center;


  color: ${(props) => props.selected && `var(--main-color);`};
`;

const CscMenu = ({ children }) => {
  return (
    <CscMenuContainer>
      <CscMenuOptionContainer>{children}</CscMenuOptionContainer>
    </CscMenuContainer>
  );
};

const CscMenuLink = ({ to, text }) => {
  return (
    <StyledLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "var(--main-color)" : "inherit",
      })}
    >
      <Divider
        text={text}
        paddingbt={"16px"}
        width={"100%"}
        textAlign={"center"}
      />
    </StyledLink>
  );
};

CscMenuLink.displayName = "CscMenu.Link";
CscMenu.propTypes = {
  children: PropTypes.node,
};

CscMenuLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export { CscMenu, CscMenuLink };
