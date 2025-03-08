"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const emptyConstructor = {
    constructorId: '',
    url: '',
    name: '',
    nationality: '',
};
const getAllConstructors = async (limit) => {
    try {
        const response = await axiosInstance_js_1.default.get(`constructors.json?limit=${limit}`);
        if (response.status === 200) {
            const constructorList = response.data.MRData.ConstructorTable.Constructors;
            return constructorList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getConstructorsByYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/constructors.json`);
        if (response.status === 200) {
            const constructorList = response.data.MRData.ConstructorTable.Constructors;
            return constructorList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getConstructorsByRaceYear = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/constructors.json`);
        if (response.status === 200) {
            const constructorList = response.data.MRData.ConstructorTable.Constructors;
            return constructorList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getConstructorInformations = async (constructorId) => {
    try {
        const response = await axiosInstance_js_1.default.get(`constructors/${constructorId}.json`);
        if (response.status === 200) {
            const constructor = response.data.MRData.ConstructorTable.Constructors[0];
            return constructor || { ...emptyConstructor, constructorId };
        }
        return { ...emptyConstructor, constructorId };
    }
    catch {
        return { ...emptyConstructor, constructorId };
    }
};
const constructors = {
    getAllConstructors,
    getConstructorsByYear,
    getConstructorsByRaceYear,
    getConstructorInformations,
};
exports.default = constructors;
//# sourceMappingURL=index.js.map