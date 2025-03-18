"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getQualifyingsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/qualifying.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races[0];
            return qualifyingsList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const getLatestQualifying = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`current/last/qualifying.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races[0];
            return qualifyingsList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const qualifyings = {
    getQualifyingsByYearRace,
    getLatestQualifying,
};
exports.default = qualifyings;
//# sourceMappingURL=index.js.map