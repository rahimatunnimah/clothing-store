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
    </>
  );
};

export default ButtonOption;
