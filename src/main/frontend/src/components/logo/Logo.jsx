import React from "react";
import logo from "../../components/logo/Group366.svg";
import logo2 from "../../assets/logo.svg"

function Logo() {
  const aStyle = {
    display : "flex",
    justifyContent : "left",
     width: "140px"
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