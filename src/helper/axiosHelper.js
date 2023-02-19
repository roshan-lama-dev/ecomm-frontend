import axios from "axios";
const apiRoot = process.env.REACT_APP_ROOT_API;
const adminAPI = apiRoot + "/admin";

export const postAdminUser = async (obj) => {
  try {
    const { data } = await axios.post(adminAPI, obj);
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};
export const verfiyAdminUser = async (obj) => {
  try {
    const { data } = await axios.post(adminAPI + "/verify-email", obj);
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const fetchAdminLogin = async (obj) => {
  try {
    const { data } = await axios.post(adminAPI + "/login", obj);
    return data;
  } catch (error) {
    return {
      status: error,
      message: erorr.message,
    };
  }
};
