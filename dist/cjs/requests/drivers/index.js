"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const emptyDriver = {
    driverId: '',
    code: '',
    url: '',
    givenName: '',
    familyName: '',
    dateOfBirth: '',
    nationality: '',
};
const getAllDrivers = async (limit) => {
    try {
        const response = await axiosInstance_js_1.default.get(`drivers.json?limit=${limit}`);
        if (response.status === 200) {
            const driverList = response.data.MRData.DriverTable.Drivers;
            return driverList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getDriversByYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/drivers.json`);
        if (response.status === 200) {
            const driverList = response.data.MRData.DriverTable.Drivers;
            return driverList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getDriversByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/drivers.json`);
        if (response.status === 200) {
            const driverList = response.data.MRData.DriverTable.Drivers;
            return driverList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getDriverInformations = async (driverId) => {
    try {
        const response = await axiosInstance_js_1.default.get(`drivers/${driverId}.json`);
        if (response.status === 200) {
            const driver = response.data.MRData.DriverTable.Drivers[0];
            return driver || { ...emptyDriver, driverId };
        }
        return { ...emptyDriver, driverId };
    }
    catch {
        return { ...emptyDriver, driverId };
    }
};
const drivers = {
    getAllDrivers,
    getDriversByYear,
    getDriversByYearRace,
    getDriverInformations,
};
exports.default = drivers;
//# sourceMappingURL=index.js.map