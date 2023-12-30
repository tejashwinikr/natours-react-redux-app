/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import './style.css'
import footerLogo from "../../assets/logo-green.png";
const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__logo" src={footerLogo}></img>
      <ul className="footer__nav">
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Download apps</a>
        </li>
        <li>
          <a href="#">Become a guide</a>
        </li>
        <li>
          <a href="#">careers</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      <p className="footer__copyright">&copy by teju</p>
    </div>
  );
};

export default Footer;
