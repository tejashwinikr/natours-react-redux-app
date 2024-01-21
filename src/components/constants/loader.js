import React from "react";
import { Spin } from "antd";
import "./loaderStyle.css";

const Loader = () => {
  return (
    <div className="loader">
      <Spin size="large" />
      <div className="loader-text">Loading...Please wait</div>
    </div>
  );
};

export default Loader;
