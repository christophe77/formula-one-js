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
const getAllSeasons = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInstance_1.default.get(`seasons.json?limit=${limit}`);
        if (response.status === 200) {
            const seasonsList = response.data.MRData.SeasonTable.Seasons;
            return seasonsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const getAllSeasonsAdvanced = (options) => __awaiter(void 0, void 0, void 0, function* () {
    let advancedOptions = '';
    for (const [key, value] of Object.entries(options)) {
        if (value && value !== '') {
            advancedOptions = `${advancedOptions}${key}/${value}/`;
        }
    }
    try {
        const response = yield axiosInstance_1.default.get(`${advancedOptions}seasons.json`);
        if (response.status === 200) {
            const seasonsList = response.data.MRData.SeasonTable.Seasons;
            return seasonsList || [];
        }
        return [];
    }
    catch (_a) {
        return [];
    }
});
const seasons = {
    getAllSeasons,
    getAllSeasonsAdvanced,
};
exports.default = seasons;
