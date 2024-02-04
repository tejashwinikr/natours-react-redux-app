// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import 'antd/dist/antd.css';
import "./index.css";
import configureStore from "./components/duck/store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )


// git repo created info 
// git remote add origin https://github.com/tejashwinikr/natours-react-redux-app.git

// first do the project 
// add ".gitignore" file ignoring all the node modules and unwanted files 
// then "git init"
// git staus 
// git add -A //to stage all files
// git status 
// git commit -m"intial commit" message 
// then go create repo in github(without readme) , after that take link from there and paste it in terminal after commiting
//after giving repo link check status
// git push origin master,push all changes by specifying branch



