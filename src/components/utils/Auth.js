// import { setWithExpiry, getWithExpiry } from './commonUtils';

let authStatus = false;
const Auth = {
  login: ({ token,username, refreshToken,roles }) => {
    authStatus = true;
    // set user token with expiry of 3 days
    // setWithExpiry("user_details", {accessToken, username, refreshToken}, 259200);
    console.log("=== 77", token, username, refreshToken,roles)
    sessionStorage.setItem("user_details", JSON.stringify({token, username, refreshToken}));
    localStorage.setItem('autologout',"false")
  },
  logout: (callback) => {
    authStatus = false;
    localStorage.clear();
    sessionStorage.clear();
    callback && callback();
  },
  isAuthenticated: () => {
    // const user_details = getWithExpiry("user_details");
    const user_details = JSON.parse(sessionStorage.getItem("user_details")||"{}");
    if (user_details) {
      const jwt = user_details.accessToken;
      const jwtRefresh = user_details.refreshToken;
      if (!jwt) {
        authStatus = false;
        if (!jwtRefresh) {
          authStatus = false;
        } else {
          authStatus = true;
        }
      } else {
        authStatus = true;
      }
    }
    return authStatus;
  },
};

export default Auth;
