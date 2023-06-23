import axios from "axios";

export const viacep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const github = axios.create({
  baseURL: "https://api.github.com/users/",
});
