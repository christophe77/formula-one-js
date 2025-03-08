"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axiosInstance_js_1 = __importDefault(require("../../utils/axiosInstance.js"));
const emptyCircuit = {
    circuitId: '',
    url: '',
    circuitName: '',
    Location: {
        lat: '',
        long: '',
        locality: '',
        country: '',
    },
};
const getAllCircuits = async (limit) => {
    try {
        const response = await axiosInstance_js_1.default.get(`circuits.json?limit=${limit}`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits;
            return circuitList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getCircuitsByYear = async (year) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/circuits.json`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits;
            return circuitList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getCircuitsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance_js_1.default.get(`${year}/${round}/circuits.json`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits;
            return circuitList || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getCircuitInformations = async (circuitId) => {
    try {
        const response = await axiosInstance_js_1.default.get(`circuits/${circuitId}.json`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits[0];
            return circuitList || { ...emptyCircuit, circuitId };
        }
        return { ...emptyCircuit, circuitId };
    }
    catch {
        return { ...emptyCircuit, circuitId };
    }
};
const circuits = {
    getAllCircuits,
    getCircuitsByYear,
    getCircuitsByYearRace,
    getCircuitInformations,
};
exports.default = circuits;
//# sourceMappingURL=index.js.map