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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axiosInstance_1 = __importDefault(require("../../utils/axiosInstance"));
var getAllSeasons = function (limit) { return __awaiter(void 0, void 0, void 0, function () {
    var response, seasonsList, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4, axiosInstance_1.default.get("seasons.json?limit=".concat(limit))];
            case 1:
                response = _b.sent();
                if (response.status === 200) {
                    seasonsList = response.data.MRData.SeasonTable.Seasons;
                    return [2, seasonsList || []];
                }
                return [2, []];
            case 2:
                _a = _b.sent();
                return [2, []];
            case 3: return [2];
        }
    });
}); };
var getAllSeasonsAdvanced = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var advancedOptions, _i, _a, _b, key, value, response, seasonsList, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                advancedOptions = '';
                for (_i = 0, _a = Object.entries(options); _i < _a.length; _i++) {
                    _b = _a[_i], key = _b[0], value = _b[1];
                    if (value && value !== '') {
                        advancedOptions = "".concat(advancedOptions).concat(key, "/").concat(value, "/");
                    }
                }
                _d.label = 1;
            case 1:
                _d.trys.push([1, 3, , 4]);
                return [4, axiosInstance_1.default.get("".concat(advancedOptions, "seasons.json"))];
            case 2:
                response = _d.sent();
                if (response.status === 200) {
                    seasonsList = response.data.MRData.SeasonTable.Seasons;
                    return [2, seasonsList || []];
                }
                return [2, []];
            case 3:
                _c = _d.sent();
                return [2, []];
            case 4: return [2];
        }
    });
}); };
var seasons = {
    getAllSeasons: getAllSeasons,
    getAllSeasonsAdvanced: getAllSeasonsAdvanced,
};
exports.default = seasons;
//# sourceMappingURL=seasons.js.map