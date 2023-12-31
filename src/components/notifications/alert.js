// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
import {notification} from 'antd';
import "./alertStyle.css";
import React from 'react';

const openNotification = (props) => {
   const args = {
     className:props.type,
     message: <div className={props.type === "error"|| props.type === "error-batch" || props.type === "error-batch-long" ? "error-message":"success-message"}>{props.message}</div>,
     description:<div className={props.type === "error"|| props.type === "error-batch" || props.type === "error-batch-long" ? "error-description":"success-description"}>{props.description}</div>,
     duration: props.type === "error-batch" ? 3 : (props.type === "error-batch-long" ? 10 : 4),
   };
   notification.open(args);
 };
 export default openNotification;