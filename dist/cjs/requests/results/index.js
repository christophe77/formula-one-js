"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getResultsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/results.json`);
        if (response.status === 200) {
            const resultList = response.data.MRData.RaceTable.Races[0];
            return resultList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const getLatestRaceResults = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`current/last/results.json`);
        if (response.status === 200) {
            const resultList = response.data.MRData.RaceTable.Races[0];
            return resultList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const results = {
    getResultsByYearRace,
    getLatestRaceResults,
};
exports.default = results;
//# sourceMappingURL=index.js.map