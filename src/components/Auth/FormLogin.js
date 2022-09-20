import React from "react";

const FormLogin = () => {
  return (
    <form className="form">
      <div>
        <input className="form-control" type="email" placeholder="Email" />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
        />
        <div className="link-forgot">Forgot Password?</div>
        <button type="submit" className="btn-submit">
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
