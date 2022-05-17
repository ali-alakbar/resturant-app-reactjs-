import React from "react";
import PageTitle from "../../helper/PageTitle/PageTitle";
import "./style/style.css";

const Account = () => {
  return (
    <section className="section account-section">
      <PageTitle title="Account" />
      <div className="main-section">
        <form className="login-box">
          <h2>Login</h2>
          <div className="input-container">
            <label htmlFor="email">
              Username or email address <span>*</span>
            </label>
            <input type="text" id="email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">
              Password <span>*</span>
            </label>
            <input type="text" id="password" />
          </div>
          <button className="submitting-btn">Log in</button>
        </form>
      </div>
    </section>
  );
};

export default Account;
