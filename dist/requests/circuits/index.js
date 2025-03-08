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
const getAllCircuits = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`circuits.json?limit=${limit}`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits;
            return circuitList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getCircuitsByYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/circuits.json`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits;
            return circuitList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getCircuitsByYearRace = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/${round}/circuits.json`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits;
            return circuitList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getCircuitInformations = (circuitId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`circuits/${circuitId}.json`);
        if (response.status === 200) {
            const circuitList = response.data.MRData.CircuitTable.Circuits[0];
            return circuitList || Object.assign(Object.assign({}, emptyCircuit), { circuitId });
        }
        return Object.assign(Object.assign({}, emptyCircuit), { circuitId });
    }
    catch (_a) {
        return Object.assign(Object.assign({}, emptyCircuit), { circuitId });
    }
});
const circuits = {
    getAllCircuits,
    getCircuitsByYear,
    getCircuitsByYearRace,
    getCircuitInformations,
};
export default circuits;
