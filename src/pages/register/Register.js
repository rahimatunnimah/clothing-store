import React, { useState } from "react";
import registerStyle from "./Register.module.css";
import Logo from "../../components/atom/Logo";
import FormRegisCust from "../../components/molecule/FormRegisCust";
import FormRegisSeller from "../../components/molecule/FormRegisSeller";
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
      <Logo />
      <h4>Please signup with your account</h4>
      <div className="btn-group">
        <button
          className={`btn-cust ${onCust ? "isActive" : "notActive"}`}
          onClick={handleOptionCust}
        >
          Custommer
        </button>
        <button
          className={`btn-seller ${onSeller ? "isActive" : "notActive"}`}
          onClick={handleOptionSeller}
        >
          Seller
        </button>
      </div>
      {onCust ? <FormRegisCust /> : <FormRegisSeller />}

      <p>
        Already have a Tokopedia account?{" "}
        <Link to={"/login"} className={`${registerStyle.linkLogin}`}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
