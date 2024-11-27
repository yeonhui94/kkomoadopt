import React from "react";
import logo from "../../components/logo/Group366.svg";

function Logo({ width = "140px", height = "100px" }) { // 기본값 설정
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
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain", // 이미지 비율 유지하면서 크기 조정
  };

  return (
    <a style={aStyle} href="#">
      <div style={logoStyle} />
    </a>
  );
}

export default Logo;
