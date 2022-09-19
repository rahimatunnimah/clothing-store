import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="d-flex align-items-start">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
};

export default Logo;
