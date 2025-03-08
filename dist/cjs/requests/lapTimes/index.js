"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getLapTime = async (year, round, lapNumber) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/laps/${lapNumber}.json`);
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
const lapTimes = {
    getLapTime,
};
exports.default = lapTimes;
//# sourceMappingURL=index.js.map