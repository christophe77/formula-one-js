"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getFinishingStatusCodes = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`status.json`);
        if (response.status === 200) {
            const statusTable = response.data.MRData.StatusTable.Status;
            return statusTable || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getFinishingStatusForSpecificYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/status.json`);
        if (response.status === 200) {
            const statusTable = response.data.MRData.StatusTable.Status;
            return statusTable || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getFinishingStatusForSpecificYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/status.json`);
        if (response.status === 200) {
            const statusTable = response.data.MRData.StatusTable.Status;
            return statusTable || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const finishingStatus = {
    getFinishingStatusCodes,
    getFinishingStatusForSpecificYear,
    getFinishingStatusForSpecificYearRace,
};
exports.default = finishingStatus;
//# sourceMappingURL=index.js.map