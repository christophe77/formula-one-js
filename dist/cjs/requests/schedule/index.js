"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getScheduleByYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races;
            return qualifyingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getScheduleByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races;
            return qualifyingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getCurrentSchedule = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`current.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races;
            return qualifyingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const schedule = {
    getScheduleByYear,
    getScheduleByYearRace,
    getCurrentSchedule,
};
exports.default = schedule;
//# sourceMappingURL=index.js.map