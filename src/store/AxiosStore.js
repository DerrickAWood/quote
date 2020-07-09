import Axios from "axios";
export const api = Axios.create({
  baseURL: "https://type.fit/api/quotes",
  timeout: 3000,
  // withCredentials: true,
});

export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer;
};

export const resetBearer = function() {
  api.defaults.headers.authorization = "";
};