"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = void 0;
const drivers_1 = require("./requests/drivers");
const constructors_1 = require("./requests/constructors");
const circuits_1 = require("./requests/circuits");
const seasons_1 = require("./requests/seasons/seasons");
const results_1 = require("./requests/results");
const qualifyings_1 = require("./requests/qualifyings");
const schedule_1 = require("./requests/schedule");
const lapTimes_1 = require("./requests/lapTimes");
const pitStops_1 = require("./requests/pitStops");
const standings_1 = require("./requests/standings");
const finishingStatus_1 = require("./requests/finishingStatus");
const requests = () => {
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
