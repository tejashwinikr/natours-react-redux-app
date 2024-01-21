import "./style.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import React, { useEffect } from "react";
import { Form, Input, Button, Card,Tooltip } from "antd";
// import { useHistory } from "react-router-dom";
import "./style.css";
import openNotification from "../../notifications/alert";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../duck/actions/actions";
import { loadState } from "../../duck/reducers/commonReducer";
import { LOGIN_NOTSTARTED } from "../../duck/types/types";
import { useNavigate } from "react-router-dom";
import Loader from "../../constants/loader";

const layout = {
  labelCol: {
    span: 20,
  },
  wrapperCol: {
    span: 20,
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const history = useHistory();

  const { loginLoadState, error } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  useEffect(() => {
    if (loginLoadState === loadState.SUCCESS) {
      navigate("/");
      // history.push("/allTours");
    } else if (loginLoadState === loadState.FAILED) {
      let errorObj = {
        type: "error",
        message: "Error",
        description: error,
      };
      openNotification(errorObj);
      dispatch({ type: LOGIN_NOTSTARTED });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginLoadState]);

  const onLoginSubmit = (values) => {
    dispatch(loginUser(values));
  };

  //   useEffect(() => {
  //     const isCopyPasted = sessionStorage.getItem('user_details') !== null ? false : true;
  //     if (isAuthenticated()){
  //       if (!isCopyPasted) {
  //         history.push("/dashboard");
  //       }
  //     }
  // }, []);

  return (
    <>
      <Header />
      <div className="login-box">
        <div className="login-box-inner">
          <Card>
            {loginLoadState === loadState.STARTED && (
              <div className="loader-container">
                <Loader />
              </div>
            )}

            <div className="login-form">
              <h1>Login</h1>
              <Form
                className="loginFormSpacing"
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onLoginSubmit}
              >
                <Tooltip
                  placement="rightBottom"
                  color="red"
                  title="required field"
                >
                  <label>Email*</label>
                </Tooltip>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your username!" },
                  ]}
                >
                  <Input id="email" placeholder="email please" />
                </Form.Item>

                <Tooltip
                  placement="rightBottom"
                  color="red"
                  title="required field"
                >
                  <label>Password*</label>
                </Tooltip>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password id="password" placeholder="Password" />
                </Form.Item>

                <Form.Item className="sign-btn">
                  <Button
                    type="primary"
                    htmlType="submit"
                    id="loginBtn"
                    className="signin-buttons"
                    disabled={loginLoadState === loadState.STARTED}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
