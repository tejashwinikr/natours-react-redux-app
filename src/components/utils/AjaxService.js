import axios from "axios";
import { history } from "../duck/store";

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
