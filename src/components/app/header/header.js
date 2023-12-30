/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import "./style.css";
import natoursLogo from "../../assets/logo-white.png";
import userimage from "../../assets/favicon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="nav nav--tours">
        <a className="nav__el" href="/">
          All Tours
        </a>
      </div>

      <div className="header__logo">
        <img src={natoursLogo} alt="natours logo"></img>
      </div>

      <div className="nav nav--user">
        {/* <a className="nav__el" href="/">
          Logout
        </a>
        <a className="nav__el" href="/">
          <img className="nav_user-img" src={userimage}></img>
          <span> username </span>
        </a> */}
        <a className="nav__el" href="/">
          Login
        </a>
        <a className="nav__el" href="/">
          Singup
        </a>
      </div>
    </div>
  );
};

export default Header;
