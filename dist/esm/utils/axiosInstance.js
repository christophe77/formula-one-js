import axios from "axios";
import * as https from "https";
var httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
var axiosInstance = axios.create({
    httpsAgent: httpsAgent,
    baseURL: "https://ergast.com/api/f1/",
});
export default axiosInstance;
