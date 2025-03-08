"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const getDriverStandingsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getDriverStandingsByYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getCurrentDriverStanding = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`current/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getStandingsByDriver = async (driverId) => {
    try {
        const response = await axiosInstance_js_1.default.get(`drivers/${driverId}/driverStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0];
            return standingsList || [];
        }
        return null;
    }
    catch {
        return null;
    }
};
const getAllChampionshipDriverWinners = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`driverStandings/1.json?limit=1000`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getConstructorStandingsByYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getConstructorStandingsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getCurrentConstructorStanding = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`current/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists[0]
                .ConstructorStandings;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getAllChampionshipConstructorWinners = async () => {
    try {
        const response = await axiosInstance_js_1.default.get(`constructorStandings/1.json?limit=1000`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists;
            return standingsList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getStandingsByConstructor = async (constructorId) => {
    try {
        const response = await axiosInstance_js_1.default.get(`constructors/${constructorId}/constructorStandings.json`);
        if (response.status === 200) {
            const standingsList = response.data.MRData.StandingsTable.StandingsLists;
            return standingsList || [];
        }
        return null;
    }
    catch {
        return null;
    }
};
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
exports.default = standings;
//# sourceMappingURL=index.js.map