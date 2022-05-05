import api from "./apiConfig";
import Cookies from "js-cookie";

//not sure if account correlates to user_profile or projects
//set to projects for now
export const login = async (credentials) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };

  try {
    const response = await api.post("/projects/login", credentials, config);

    if (response.data.success) {
      return response.data
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
    const response = await api.post("/projects/logout", body, config);

    if (response.data.success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const register = async (credentials) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-CSRFToken": Cookies.get("csrftoken"),
    },
  };
  
  try {
    const response = await api.post("/projects/register", credentials, config);

    return response;
  } catch (error) {
    console.error(error);
  }
};