import React from "react";
import "./style.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="login-form">
          <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
          <form className="form form--login">
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
