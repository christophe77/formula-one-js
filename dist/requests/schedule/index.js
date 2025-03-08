var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axiosInstance from '../../utils/axiosInstance';
const getScheduleByYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races;
            return qualifyingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getScheduleByYearRace = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/${round}.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races;
            return qualifyingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getCurrentSchedule = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`current.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races;
            return qualifyingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const schedule = {
    getScheduleByYear,
    getScheduleByYearRace,
    getCurrentSchedule,
};
export default schedule;
