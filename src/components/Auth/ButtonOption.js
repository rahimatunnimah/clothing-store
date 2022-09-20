import React, { useState } from "react";

const ButtonOption = () => {
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
    <>
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
    </>
  );
};

export default ButtonOption;
