import axios from "axios";
var axiosInstance = axios.create({
    baseURL: "https://ergast.com/api/f1/",
});
export default axiosInstance;
