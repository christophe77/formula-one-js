"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getPitStopsByRaceYear = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/pitstops.json`);
        if (response.status === 200) {
            const lapTime = response.data.MRData.RaceTable.Races[0];
            return lapTime || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const getPitStopsByPitStopNumber = async (year, round, pitStopNumber) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/pitstops/${pitStopNumber}.json`);
        if (response.status === 200) {
            const lapTime = response.data.MRData.RaceTable.Races[0];
            return lapTime || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const pitStops = {
    getPitStopsByRaceYear,
    getPitStopsByPitStopNumber,
};
exports.default = pitStops;
//# sourceMappingURL=index.js.map