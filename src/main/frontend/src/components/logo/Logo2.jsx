import React from "react";
import logo from "../../assets/whitever.png";
import logo2 from '../../assets/logo2.png';  // logo2 이미지 import
import { Link } from "react-router-dom";

// Logo2는 헤더용으로 하나 따로 만든거임!!
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
    <Link to={'/'} style={aStyle}>
      <div style={logoStyle} />
    </Link>
  );
}

export default Logo2;
