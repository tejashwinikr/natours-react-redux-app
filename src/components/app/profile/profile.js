/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useSelector } from "react-redux";
import "./profileStyle.css";
import Header from '../header/header'
import  Footer from '../footer/footer'

const NavItem = ({ link, text, icon, active }) => (
  <li className={active ? "side-nav--active" : ""}>
    <a href={link}>
      <svg>
        <use xlinkHref={`img/icons.svg#icon-${icon}`} />
      </svg>
      {text}
    </a>
  </li>
);

const MyProfile = () => {
  const { userData } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  return (
    <>
      <Header />

      <div className="profile-container">
        <div className="user-view">
          <nav className="user-view__menu">
            <ul className="side-nav">
              <NavItem link="#" text="Settings" icon="settings" active={true} />
              <NavItem link="/my-tours" text="My bookings" icon="briefcase" />
              <NavItem link="#" text="My reviews" icon="star" />
              <NavItem link="#" text="Billing" icon="credit-card" />
            </ul>

            {userData.role === "admin" && (
              <div className="admin-nav">
                <h5 className="admin-nav__heading">Admin</h5>
                <ul className="side-nav">
                  <NavItem link="#" text="Manage tours" icon="map" />
                  <NavItem link="#" text="Manage users" icon="users" />
                  <NavItem link="#" text="Manage reviews" icon="star" />
                  <NavItem link="#" text="Manage bookings" icon="briefcase" />
                </ul>
              </div>
            )}
          </nav>

          <div className="user-view__content">
            <div className="user-view__form-container">
              <h2 className="heading-secondary ma-bt-md">
                Your account settings
              </h2>

              <form className="form form-user-data">
                <div className="form__group">
                  <label className="form__label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form__input"
                    type="text"
                    value={userData.name}
                    required
                    name="name"
                  />
                </div>
                <div className="form__group ma-bt-md">
                  <label className="form__label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    className="form__input"
                    type="email"
                    value={userData.email}
                    required
                    name="email"
                  />
                </div>
                <div className="form__group form__photo-upload">
                  <img
                    className="form__user-photo"
                    src={`/img/users/${userData.photo}`}
                    alt="User photo"
                  />
                  <input
                    className="form__upload"
                    type="file"
                    accept="image/*"
                    id="photo"
                    name="photo"
                  />
                  <label htmlFor="photo">Choose new photo</label>
                </div>
                <div className="form__group right">
                  <button className="btn btn--small btn--green">
                    Save settings
                  </button>
                </div>
              </form>

              <div className="line">&nbsp;</div>

              <div className="user-view__form-container">
                <h2 className="heading-secondary ma-bt-md">Password change</h2>

                <form className="form form-user-password">
                  <div className="form__group">
                    <label className="form__label" htmlFor="password-current">
                      Current password
                    </label>
                    <input
                      id="password-current"
                      className="form__input"
                      type="password"
                      placeholder="••••••••"
                      required
                      minLength="8"
                    />
                  </div>
                  <div className="form__group">
                    <label className="form__label" htmlFor="password">
                      New password
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
                  <div className="form__group ma-bt-lg">
                    <label className="form__label" htmlFor="password-confirm">
                      Confirm password
                    </label>
                    <input
                      id="password-confirm"
                      className="form__input"
                      type="password"
                      placeholder="••••••••"
                      required
                      minLength="8"
                    />
                  </div>
                  <div className="form__group right">
                    <button className="btn btn--small btn--green btn--save-password">
                      Save password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyProfile;
