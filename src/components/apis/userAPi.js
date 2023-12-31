/* eslint-disable no-throw-literal */
import { nodeAPI } from "../constants/apiURL";
import { AjaxService } from "../utils/AjaxService";

export const SignUpUser = async (_queryParam) => {
  try {
    const response = await AjaxService.post(
      nodeAPI + "/api/v1/users/signup",
      JSON.stringify(_queryParam)
    );
    if (response.data) {
      return response.data;
    } else throw { name: "ApiError", message: response.response.data };
  } catch (error) {
    if (error.response.data.message && error.response.status !== 500)
      throw { name: "ServerError", message: error.response.data.message };
    else throw { name: "ServerError", message: "Server error" };
  }
};


export const Login = async (_queryParam) => {
    try {
      const response = await AjaxService.post(
        nodeAPI + "/api/v1/users/login",
        JSON.stringify(_queryParam)
      );
      if (response.data) {
        return response.data;
      } else throw { name: "ApiError", message: response.response.data };
    } catch (error) {
      if (error.response.data.message && error.response.status !== 500)
        throw { name: "ServerError", message: error.response.data.message };
      else throw { name: "ServerError", message: "Server error" };
    }
  };
