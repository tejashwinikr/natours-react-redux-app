/* eslint-disable no-throw-literal */
import { nodeAPI } from "../constants/apiURL";
import { AjaxService } from "../utils/AjaxService";

export const getTours = async (_queryParam) => {
  try {
    const response = await AjaxService.get(
      nodeAPI + "/api/v1/tours",
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

export const getTourById = async (_queryParam) => {
  try {
    console.log("=== tourid", _queryParam);
    const response = await AjaxService.get(
      nodeAPI + "/api/v1/tours/" + _queryParam
    );
    if (response.data) {
      console.log("=== tourid", response.data);
      return response.data;
    } else throw { name: "ApiError", message: response.response.data };
  } catch (error) {
    if (error.response.data.message && error.response.status !== 500)
      throw { name: "ServerError", message: error.response.data.message };
    else throw { name: "ServerError", message: "Server error" };
  }
};
