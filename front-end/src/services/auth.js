import api from "./apiConfig.js";
import Cookies from "js-cookie";
import axios from "axios";

//authentication
export const checkAuthenticated = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};
//not sure if account correlates to user_profile or projects
//set to projects for now
export const login = async credentials => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };

  try {
    const response = await api.post("/accounts/login", credentials, config);

    if (response.data.success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };

  const body = JSON.stringify({
    withCredentials: true,
  });

  try {
    const response = await axios.post(
      "http://localhost:8000/accounts/logout",
      body,
      config
    );

    if (response.data.success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const register = async credentials => {
  const config = {
    headers: {
      method: "POST",
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
      // credentials: "include",
      // "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };
  console.log(config);
  try {
    const response = await api.post("/accounts/register", credentials, config);

    return response;
  } catch (error) {
    console.error(error);
  }
};
