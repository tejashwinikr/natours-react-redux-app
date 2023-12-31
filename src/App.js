import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/app/login/login";
import Signup from "./components/app/login/signup";
import AllTours from "./components/app/AllTours/AllTours";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/" key="alltours" element={<AllTours/>} />
            {/* // <ProtectedRoute path="/change-password" component={ChangePassword} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
