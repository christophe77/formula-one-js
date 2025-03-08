"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_1 = require("../../utils/axiosInstance");
const emptyDriver = {
    driverId: '',
    code: '',
    url: '',
    givenName: '',
    familyName: '',
    dateOfBirth: '',
    nationality: '',
};
const getAllDrivers = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance_1.default.get(`drivers.json?limit=${limit}`);
        if (response.status === 200) {
            const driverList = response.data.MRData.DriverTable.Drivers;
            return driverList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getDriversByYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance_1.default.get(`${year}/drivers.json`);
        if (response.status === 200) {
            const driverList = response.data.MRData.DriverTable.Drivers;
            return driverList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getDriversByYearRace = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance_1.default.get(`${year}/${round}/drivers.json`);
        if (response.status === 200) {
            const driverList = response.data.MRData.DriverTable.Drivers;
            return driverList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getDriverInformations = (driverId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance_1.default.get(`drivers/${driverId}.json`);
        if (response.status === 200) {
            const driver = response.data.MRData.DriverTable.Drivers[0];
            return driver || Object.assign(Object.assign({}, emptyDriver), { driverId });
        }
        return Object.assign(Object.assign({}, emptyDriver), { driverId });
    }
    catch (_a) {
        return Object.assign(Object.assign({}, emptyDriver), { driverId });
    }
});
const drivers = {
    getAllDrivers,
    getDriversByYear,
    getDriversByYearRace,
    getDriverInformations,
};
exports.default = drivers;
