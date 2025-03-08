import axios from "axios";
import * as https from "https";
var httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
var axiosInstance = axios.create({
    httpsAgent: httpsAgent,
    baseURL: "http://api.jolpi.ca/ergast/f1/",
});
export default axiosInstance;
//# sourceMappingURL=axiosInstance.js.map