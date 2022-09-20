import React, { useState } from "react";
import registerStyle from "./Register.module.css";
import logo from "../../assets/logo.png";
import FormRegisCust from "../../components/Auth/FormRegisCust";
import FormRegisSeller from "../../components/Auth/FormRegisSeller";
import { Link } from "react-router-dom";

const Register = () => {
  const [onCust, setOnCust] = useState(true);
  const [onSeller, setOnSeller] = useState(false);

  const handleOptionCust = () => {
    if (!onCust) {
      setOnCust(true);
      setOnSeller(false);
    }
  };

  const handleOptionSeller = () => {
    if (!onSeller) {
      setOnCust(false);
      setOnSeller(true);
    }
  };
  return (
    <div className={`${registerStyle.container}`}>
      <img src={logo} alt="logo" />
      <h5 className="mt-3">Please signup with your account</h5>
      <div className="btn-group mt-3">
        <button
          className={`btn-cust ${onCust ? "isOn" : "isOff"}`}
          onClick={handleOptionCust}
        >
          Custommer
        </button>
        <button
          className={`btn-seller ${onSeller ? "isOn" : "isOff"}`}
          onClick={handleOptionSeller}
        >
          Seller
        </button>
      </div>
      {onCust ? <FormRegisCust /> : <FormRegisSeller />}

      <p className="mt-3">
        Already have a Tokopedia account?{" "}
        <Link to={"/login"} className={`${registerStyle.linkLogin}`}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
