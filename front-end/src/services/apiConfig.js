import axios from "axios";

let apiUrl;

let productionURL = "heroku/app";
let developmentURL = "http://localhost:3000";

if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
  apiUrl = productionURL;
} else {
  apiUrl = developmentURL;
}

const api = axios.create({
  baseURL: apiUrl,
  timeout: 2000,
});

export default api;
