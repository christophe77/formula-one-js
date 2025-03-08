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
const emptyConstructor = {
    constructorId: '',
    url: '',
    name: '',
    nationality: '',
};
const getAllConstructors = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`constructors.json?limit=${limit}`);
        if (response.status === 200) {
            const constructorList = response.data.MRData.ConstructorTable.Constructors;
            return constructorList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getConstructorsByYear = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/constructors.json`);
        if (response.status === 200) {
            const constructorList = response.data.MRData.ConstructorTable.Constructors;
            return constructorList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getConstructorsByRaceYear = (year, round) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`${year}/${round}/constructors.json`);
        if (response.status === 200) {
            const constructorList = response.data.MRData.ConstructorTable.Constructors;
            return constructorList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getConstructorInformations = (constructorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance.get(`constructors/${constructorId}.json`);
        if (response.status === 200) {
            const constructor = response.data.MRData.ConstructorTable.Constructors[0];
            return constructor || Object.assign(Object.assign({}, emptyConstructor), { constructorId });
        }
        return Object.assign(Object.assign({}, emptyConstructor), { constructorId });
    }
    catch (_a) {
        return Object.assign(Object.assign({}, emptyConstructor), { constructorId });
    }
});
const constructors = {
    getAllConstructors,
    getConstructorsByYear,
    getConstructorsByRaceYear,
    getConstructorInformations,
};
export default constructors;
