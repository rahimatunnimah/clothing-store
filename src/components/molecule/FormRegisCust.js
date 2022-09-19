import React from "react";

const FormRegisCust = () => {
  return (
    <form className="form">
      <div>
        <input className="form-control" type="text" placeholder="Name" />
        <input className="form-control" type="email" placeholder="Email" />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
        />

        <button type="submit" className="btn-submit">
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default FormRegisCust;
