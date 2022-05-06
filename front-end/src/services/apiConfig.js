import axios from "axios";

let apiUrl;

let productionURL = "heroku/app";
let developmentURL = "http://localhost:8000";

if (
  window.location.hostname == "127.0.0.1" ||
  window.location.hostname == "localhost"
) {
  apiUrl = developmentURL;
} else {
  apiUrl = productionURL;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
