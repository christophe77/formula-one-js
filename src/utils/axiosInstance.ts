import axios from "axios";
import * as https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

const axiosInstance = axios.create({
  httpsAgent,
  baseURL: "https://ergast.com/api/f1/",
});

export default axiosInstance;
