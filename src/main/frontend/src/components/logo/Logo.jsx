import React from "react";
import logo from "../logo/Group366.svg";

function Logo() {
  const logoStyle = {
    width: "182px",
    height: "120px",
    marginRight: "55px",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  return (
    <a href="">
      <div style={logoStyle} />
    </a>
  );
}

export default Logo;