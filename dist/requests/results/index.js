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
const getResultsByYearRace = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/${round}/results.json`);
        if (response.status === 200) {
            const resultList = response.data.MRData.RaceTable.Races[0];
            return resultList || null;
        }
        return null;
    }
    catch (_a) {
        return null;
    }
});
const getLatestRaceResults = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`current/last/results.json`);
        if (response.status === 200) {
            const resultList = response.data.MRData.RaceTable.Races[0];
            return resultList || null;
        }
        return null;
    }
    catch (_a) {
        return null;
    }
});
const results = {
    getResultsByYearRace,
    getLatestRaceResults,
};
export default results;
