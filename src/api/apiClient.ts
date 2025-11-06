import axios from "axios";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const apiClient = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
  headers: {
    Authorization: API_TOKEN,
  },
});

export default apiClient;
