import Axios from "axios";
export const api = Axios.create({
  baseURL: "http://quotes.stormconsultancy.co.uk/quotes/1.json",
  timeout: 3000,
  // withCredentials: true,
});

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer;
};

export const resetBearer = function() {
  api.defaults.headers.authorization = "";
};