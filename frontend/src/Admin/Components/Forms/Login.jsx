import React from "react";
import "./style/forms.css";

const Login = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <form method="post">
            <h1>Admin Login</h1>
            <div className="form-group">
              <label htmlFor="username">Username *</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
            </div>
            <button className="submit-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
