import React, { useState } from "react";
import loginStyle from "./Login.module.css";
import Logo from "../../components/atom/Logo";
import ButtonOption from "../../components/molecule/ButtonOption";
import FormLogin from "../../components/molecule/FormLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={`${loginStyle.container}`}>
      <Logo />
      <h4>Please login with your account</h4>
      <ButtonOption />
      <FormLogin />
      <p>
        Don't have a Tokopedia account?{" "}
        <Link to={"/register"} className={`${loginStyle.linkRegis}`}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
