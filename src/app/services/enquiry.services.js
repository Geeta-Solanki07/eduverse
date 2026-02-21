import axios from "axios";

import { BASE_URL } from "../utils/api_base_url_configration";
import handleError from "../utils/handleError";

const getConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? `Bearer ${JSON.parse(token)}` : "",
    },
  };
};


export const addEnquiryServ = async (formData) => {
  try {
    const response = await axios.post(BASE_URL + "enquiry/create", formData);
    return response;
  } catch (error) {
    handleError(error);
  }
};

