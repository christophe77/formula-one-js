"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = void 0;
var drivers_1 = __importDefault(require("./requests/drivers"));
var constructors_1 = __importDefault(require("./requests/constructors"));
var circuits_1 = __importDefault(require("./requests/circuits"));
var seasons_1 = __importDefault(require("./requests/seasons/seasons"));
var results_1 = __importDefault(require("./requests/results"));
var qualifyings_1 = __importDefault(require("./requests/qualifyings"));
var schedule_1 = __importDefault(require("./requests/schedule"));
var lapTimes_1 = __importDefault(require("./requests/lapTimes"));
var pitStops_1 = __importDefault(require("./requests/pitStops"));
var standings_1 = __importDefault(require("./requests/standings"));
var finishingStatus_1 = __importDefault(require("./requests/finishingStatus"));
var requests = function () {
    return {
        drivers: drivers_1.default,
        constructors: constructors_1.default,
        circuits: circuits_1.default,
        seasons: seasons_1.default,
        results: results_1.default,
        qualifyings: qualifyings_1.default,
        schedule: schedule_1.default,
        lapTimes: lapTimes_1.default,
        pitStops: pitStops_1.default,
        standings: standings_1.default,
        finishingStatus: finishingStatus_1.default
    };
};
exports.requests = requests;
//# sourceMappingURL=index.js.map