"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axiosInstance = axios_1.default.create({
    baseURL: "https://ergast.com/api/f1/",
});
exports.default = axiosInstance;
