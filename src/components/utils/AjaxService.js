import axios from "axios";
import { history } from "../duck/store";
import { getUser } from "./commonUtils";
import Auth from "./Auth";

// Set user token headers
axios.interceptors.request.use(function (config) {
  config.headers["x-access-token"] = getUser()?.accessToken;
  return config;
});

// Redirect to login if token expired
axios.interceptors.response.use(
  (res) => res,
  function (err) {
    console.log(err?.response?.data?.message==='Token has been Expired')
    if 
    //(err?.response?.data?.message?.substr(0, 11) === "JWT expired") 
 
    (err?.response?.data?.message==='Token has been Expired'){
      Auth.logout();
      history.push("/user/login");
    }
    return Promise.reject(err);
  }
);
export const AjaxService = {
  get: (url, params, headers) => {
    return axios({
      method: "GET",
      url: url,
      headers: headers || { "content-type": "application/json" },
      params: params || {},
    });
  },
  post: (url, data, headers) => {
    return axios({
      method: "POST",
      url: url,
      headers: headers || { "content-type": "application/json" },
      data: data,
    });
  },
  delete: (url, headers) => {
    return axios({
      method: "DELETE",
      url: url,
      headers: headers || { "content-type": "application/json" },
    });
  },
  put: (url, data, headers) => {
    return axios({
      method: "PUT",
      url: url,
      headers: headers || { "content-type": "application/json" },
      data: data,
    });
  },
};
