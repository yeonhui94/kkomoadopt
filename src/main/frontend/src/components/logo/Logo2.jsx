import React from "react";
import logo from "../../assets/whitever.png";
import logo2 from '../../assets/logo2.png';  // logo2 이미지 import

function Logo2({ width = "140px", height = "100px", isScrolled }) {
  const aStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: width,
    height: height,
  };

  const logoStyle = {
    width: "100%",   // div가 부모 크기에 맞게 확장
    height: "100%",  // div가 부모 크기에 맞게 확장
    backgroundImage: isScrolled ? `url(${logo})` : `url(${logo2})`, // 스크롤 여부에 따라 logo 변경
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "170%",
  };

  return (
    <a style={aStyle} href="#">
      <div style={logoStyle} />
    </a>
  );
}

export default Logo2;
