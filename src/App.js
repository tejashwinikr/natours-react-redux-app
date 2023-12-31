import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/app/login/login";
import Signup from './components/app/login/signup'
import AllTours from "./components/app/AllTours/AllTours";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" Component={Login}/>
            <Route path="/signup" Component={Signup}/>
     

            <Route path="/" key="alltours" Component={AllTours} />
            {/* // <ProtectedRoute path="/change-password" component={ChangePassword} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
