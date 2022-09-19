import React from "react";

const FormRegisSeller = () => {
  return (
    <form className="form">
      <div>
        <input className="form-control" type="text" placeholder="Name" />
        <input className="form-control" type="email" placeholder="Email" />
        <input
          className="form-control"
          type="text"
          placeholder="Phone Number"
        />
        <input className="form-control" type="text" placeholder="Store Name" />
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

export default FormRegisSeller;
