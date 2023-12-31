/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React } from "react";
import "./style.css";
import natoursLogo from "../../assets/logo-white.png";
import { useSelector } from "react-redux";

const Header = () => {
  const { userData } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a className="nav__el" href="/">
          All Tours
        </a>
      </nav>

      <div className="header__logo">
        <img src={natoursLogo} alt="Natours logo" />
      </div>

      <nav className="nav nav--user">
        {userData._id ? (
          <>
            <a className="nav__el" href="/">
              Logout
            </a>
            <a className="nav__el" href="/">
              <img
                className="nav__user-img"
                src={`/img/users/${userData.photo}`}
                alt={`Photo of ${userData.name}`}
              />
              <span>{userData.name.split(" ")[0]}</span>
            </a>
          </>
        ) : (
          <>
            <a className="nav__el" href="/login">
              Login
            </a>
            <a className="nav__el" href="/signup">
              Singup
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
