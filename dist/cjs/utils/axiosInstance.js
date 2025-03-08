"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const https = require("https");
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
const axiosInstance = axios_1.default.create({
    httpsAgent,
    baseURL: "http://api.jolpi.ca/ergast/f1/",
});
exports.default = axiosInstance;
