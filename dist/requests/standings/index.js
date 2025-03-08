var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axiosInstance from "../../utils/axiosInstance";
const getDriverStandingsByYearRace = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/${round}/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getDriverStandingsByYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getCurrentDriverStanding = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`current/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getStandingsByDriver = (driverId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`drivers/${driverId}/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0];
            return standingsList || [];
        }
        return null;
    }
    catch (_a) {
        return null;
    }
});
const getAllChampionshipDriverWinners = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`driverStandings/1.json?limit=1000`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getConstructorStandingsByYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getConstructorStandingsByYearRace = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/${round}/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getCurrentConstructorStanding = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`current/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getAllChampionshipConstructorWinners = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`constructorStandings/1.json?limit=1000`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists;
            return standingsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getStandingsByConstructor = (constructorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`constructors/${constructorId}/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists;
            return standingsList || [];
        }
        return null;
    }
    catch (_a) {
        return null;
    }
});
const standings = {
    getDriverStandingsByYearRace,
    getDriverStandingsByYear,
    getConstructorStandingsByYearRace,
    getConstructorStandingsByYear,
    getCurrentDriverStanding,
    getCurrentConstructorStanding,
    getAllChampionshipDriverWinners,
    getAllChampionshipConstructorWinners,
    getStandingsByDriver,
    getStandingsByConstructor,
};
export default standings;
