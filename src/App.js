import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllTours from "./components/app/AllTours/AllTours";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/login">
            <Login />
          </Route> */}
            {/* <Route path="/signup">
            <Signup />
          </Route> */}

            <Route path="/" key="alltours" Component={AllTours} />
            {/* // <ProtectedRoute path="/change-password" component={ChangePassword} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
