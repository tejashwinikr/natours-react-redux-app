import React, { useState, useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../duck/actions/actions";
import { loadState } from "../../duck/reducers/commonReducer";
import openNotification from "../../notifications/alert";
import { SIGNUP_NOTSTARTED } from "../../duck/types/types";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const { signupLoadState, error } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    dispatch(SignUp(formData));
  };

  useEffect(() => {
    if (signupLoadState === loadState.SUCCESS) {
      let successObj = {
        type: "success",
        message: "Account Created",
        description: "Kindly login to explore more features",
      };

      openNotification(successObj);
      dispatch({ type: SIGNUP_NOTSTARTED });
      navigate('/login');
    } else if (signupLoadState === loadState.FAILED) {
      let errorObj = {
        type: "error",
        message: "Error",
        description: error,
      };
      openNotification(errorObj);
      dispatch({ type: SIGNUP_NOTSTARTED });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupLoadState]);

  return (
    <>
      <Header />
      <main className="main-singup">
        <div className="signup-form">
          <h2 className="heading-secondary ma-bt-lg">Create an account</h2>
          <form className="form form--signup" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="form__input"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="passwordConfirm">
                Confirm Password
              </label>
              <input
                id="passwordConfirm"
                className="form__input"
                type="password"
                name="passwordConfirm"
                placeholder="••••••••"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <button className="btn btn--green" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
