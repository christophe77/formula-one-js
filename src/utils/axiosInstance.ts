import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ergast.com/api/f1/",
});

export default axiosInstance;
