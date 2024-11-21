import React from "react";
import logo from "../../components/logo/Group366.svg";

function Logo() {
  const aStyle = {
    display : "flex",
    justifyContent : "center",
    width: "100%"
  }

  const logoStyle = {
    width: "100%",
    height: "100px",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  return (
    <a style={aStyle} href="">
      <div style={logoStyle} />
    </a>
  );
}

export default Logo;