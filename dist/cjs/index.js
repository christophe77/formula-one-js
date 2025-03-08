"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = void 0;
const index_js_1 = __importDefault(require("./requests/drivers/index.js"));
const index_js_2 = __importDefault(require("./requests/constructors/index.js"));
const index_js_3 = __importDefault(require("./requests/circuits/index.js"));
const index_js_4 = __importDefault(require("./requests/seasons/index.js"));
const index_js_5 = __importDefault(require("./requests/results/index.js"));
const index_js_6 = __importDefault(require("./requests/qualifyings/index.js"));
const index_js_7 = __importDefault(require("./requests/schedule/index.js"));
const index_js_8 = __importDefault(require("./requests/lapTimes/index.js"));
const index_js_9 = __importDefault(require("./requests/pitStops/index.js"));
const index_js_10 = __importDefault(require("./requests/standings/index.js"));
const index_js_11 = __importDefault(require("./requests/finishingStatus/index.js"));
const requests = () => {
    return {
        drivers: index_js_1.default,
        constructors: index_js_2.default,
        circuits: index_js_3.default,
        seasons: index_js_4.default,
        results: index_js_5.default,
        qualifyings: index_js_6.default,
        schedule: index_js_7.default,
        lapTimes: index_js_8.default,
        pitStops: index_js_9.default,
        standings: index_js_10.default,
        finishingStatus: index_js_11.default
    };
};
exports.requests = requests;
//# sourceMappingURL=index.js.map