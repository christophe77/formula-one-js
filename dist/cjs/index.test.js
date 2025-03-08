"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = __importDefault(require("./requests/circuits/index.js"));
const index_js_2 = __importDefault(require("./requests/constructors/index.js"));
const index_js_3 = __importDefault(require("./requests/drivers/index.js"));
const index_js_4 = __importDefault(require("./requests/finishingStatus/index.js"));
const index_js_5 = __importDefault(require("./requests/lapTimes/index.js"));
const index_js_6 = __importDefault(require("./requests/pitStops/index.js"));
const index_js_7 = __importDefault(require("./requests/qualifyings/index.js"));
const index_js_8 = __importDefault(require("./requests/results/index.js"));
const index_js_9 = __importDefault(require("./requests/schedule/index.js"));
const index_js_10 = __importDefault(require("./requests/seasons/index.js"));
const index_js_11 = __importDefault(require("./requests/standings/index.js"));
(0, vitest_1.describe)("Circuits API", () => {
    (0, vitest_1.it)("should retrieve all circuits for a year", async () => {
        const circuitList = await index_js_1.default.getCircuitsByYear(2023);
        (0, vitest_1.expect)(circuitList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(circuitList)).toBe(true);
        (0, vitest_1.expect)(circuitList.length).toBeGreaterThan(0);
        // Check structure of the first circuit
        const firstCircuit = circuitList[0];
        (0, vitest_1.expect)(firstCircuit).toHaveProperty("circuitId");
        (0, vitest_1.expect)(firstCircuit).toHaveProperty("circuitName");
        (0, vitest_1.expect)(firstCircuit).toHaveProperty("Location");
        (0, vitest_1.expect)(firstCircuit.Location).toHaveProperty("lat");
        (0, vitest_1.expect)(firstCircuit.Location).toHaveProperty("long");
        (0, vitest_1.expect)(firstCircuit.Location).toHaveProperty("locality");
        (0, vitest_1.expect)(firstCircuit.Location).toHaveProperty("country");
    });
    (0, vitest_1.it)("should retrieve a specific circuit by ID", async () => {
        const circuit = await index_js_1.default.getCircuitInformations("monaco");
        (0, vitest_1.expect)(circuit).toBeDefined();
        (0, vitest_1.expect)(circuit).toHaveProperty("circuitId", "monaco");
        (0, vitest_1.expect)(circuit).toHaveProperty("circuitName", "Circuit de Monaco");
        (0, vitest_1.expect)(circuit).toHaveProperty("Location");
        (0, vitest_1.expect)(circuit.Location).toHaveProperty("lat", "43.7347");
        (0, vitest_1.expect)(circuit.Location).toHaveProperty("long", "7.42056");
        (0, vitest_1.expect)(circuit.Location).toHaveProperty("locality", "Monte-Carlo");
        (0, vitest_1.expect)(circuit.Location).toHaveProperty("country", "Monaco");
    });
});
(0, vitest_1.describe)("Constructors API", () => {
    (0, vitest_1.it)("should retrieve all constructors for a year", async () => {
        const constructorList = await index_js_2.default.getConstructorsByYear(2023);
        (0, vitest_1.expect)(constructorList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(constructorList)).toBe(true);
        (0, vitest_1.expect)(constructorList.length).toBeGreaterThan(0);
        // Check structure of a constructor object
        const constructor = constructorList[0];
        (0, vitest_1.expect)(constructor).toHaveProperty("constructorId");
        (0, vitest_1.expect)(constructor).toHaveProperty("name");
        (0, vitest_1.expect)(constructor).toHaveProperty("nationality");
    });
    (0, vitest_1.it)("should retrieve a specific constructor by ID", async () => {
        const constructor = await index_js_2.default.getConstructorInformations("ferrari");
        (0, vitest_1.expect)(constructor).toBeDefined();
        (0, vitest_1.expect)(constructor).toHaveProperty("constructorId", "ferrari");
        (0, vitest_1.expect)(constructor).toHaveProperty("name", "Ferrari");
        (0, vitest_1.expect)(constructor).toHaveProperty("nationality", "Italian");
    });
});
(0, vitest_1.describe)("Drivers API", () => {
    (0, vitest_1.it)("should retrieve all drivers for a year", async () => {
        const driverList = await index_js_3.default.getDriversByYear(2023);
        (0, vitest_1.expect)(driverList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(driverList)).toBe(true);
        (0, vitest_1.expect)(driverList.length).toBeGreaterThan(0);
        // Check structure of a driver object
        const driver = driverList[0];
        (0, vitest_1.expect)(driver).toHaveProperty("driverId");
        (0, vitest_1.expect)(driver).toHaveProperty("permanentNumber");
        (0, vitest_1.expect)(driver).toHaveProperty("givenName");
        (0, vitest_1.expect)(driver).toHaveProperty("familyName");
        (0, vitest_1.expect)(driver).toHaveProperty("nationality");
    });
    (0, vitest_1.it)("should retrieve a specific driver by ID", async () => {
        const driver = await index_js_3.default.getDriverInformations("alonso");
        (0, vitest_1.expect)(driver).toBeDefined();
        (0, vitest_1.expect)(driver).toHaveProperty("driverId", "alonso");
        (0, vitest_1.expect)(driver).toHaveProperty("permanentNumber", "14");
        (0, vitest_1.expect)(driver).toHaveProperty("givenName", "Fernando");
        (0, vitest_1.expect)(driver).toHaveProperty("familyName", "Alonso");
        (0, vitest_1.expect)(driver).toHaveProperty("dateOfBirth", "1981-07-29");
        (0, vitest_1.expect)(driver).toHaveProperty("code", "ALO");
        (0, vitest_1.expect)(driver).toHaveProperty("nationality", "Spanish");
    });
});
(0, vitest_1.describe)("Finishing Status API", () => {
    (0, vitest_1.it)("should retrieve all finishing statuses", async () => {
        const finishingStatusList = await index_js_4.default.getFinishingStatusCodes();
        (0, vitest_1.expect)(finishingStatusList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(finishingStatusList)).toBe(true);
        (0, vitest_1.expect)(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        (0, vitest_1.expect)(status).toHaveProperty("statusId");
        (0, vitest_1.expect)(status).toHaveProperty("status");
        (0, vitest_1.expect)(status).toHaveProperty("count");
    });
    (0, vitest_1.it)("should retrieve all finishing statuses for a year", async () => {
        const finishingStatusList = await index_js_4.default.getFinishingStatusForSpecificYear(2023);
        (0, vitest_1.expect)(finishingStatusList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(finishingStatusList)).toBe(true);
        (0, vitest_1.expect)(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        (0, vitest_1.expect)(status).toHaveProperty("statusId", "1");
        (0, vitest_1.expect)(status).toHaveProperty("status", "Finished");
        (0, vitest_1.expect)(status).toHaveProperty("count", "304");
    });
});
(0, vitest_1.describe)("Lap Times API", () => {
    (0, vitest_1.it)("should retrieve lap times for a specific lap", async () => {
        const lap = await index_js_5.default.getLapTime(2023, 1, 1);
        // Check structure of a lap time object
        (0, vitest_1.expect)(lap).toBeDefined();
        (0, vitest_1.expect)(lap).toHaveProperty("season", "2023");
        (0, vitest_1.expect)(lap).toHaveProperty("round", "1");
        (0, vitest_1.expect)(lap).toHaveProperty("raceName", "Bahrain Grand Prix");
        (0, vitest_1.expect)(lap).toHaveProperty("Circuit");
        (0, vitest_1.expect)(lap).toHaveProperty("date", "2023-03-05");
        (0, vitest_1.expect)(lap).toHaveProperty("time", "15:00:00Z");
        (0, vitest_1.expect)(lap).toHaveProperty("Laps");
        (0, vitest_1.expect)(lap.Laps).toBeInstanceOf(Array);
        (0, vitest_1.expect)(lap.Laps.length).toBeGreaterThan(0);
        (0, vitest_1.expect)(lap.Laps[0]).toHaveProperty("number", "1");
        (0, vitest_1.expect)(lap.Laps[0]).toHaveProperty("Timings");
    });
});
(0, vitest_1.describe)("Pit Stops API", () => {
    (0, vitest_1.it)("should retrieve pit stops for a specific race", async () => {
        const racePitStops = await index_js_6.default.getPitStopsByRaceYear(2023, 1);
        (0, vitest_1.expect)(racePitStops).toBeDefined();
        const pitStopList = racePitStops.PitStops;
        (0, vitest_1.expect)(pitStopList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(pitStopList)).toBe(true);
        (0, vitest_1.expect)(pitStopList.length).toBeGreaterThan(0);
        // Check structure of a pit stop object
        const pitStop = pitStopList[0];
        (0, vitest_1.expect)(pitStop).toHaveProperty("driverId", "gasly");
        (0, vitest_1.expect)(pitStop).toHaveProperty("lap", "9");
        (0, vitest_1.expect)(pitStop).toHaveProperty("stop", "1");
        (0, vitest_1.expect)(pitStop).toHaveProperty("time", "18:18:56");
        (0, vitest_1.expect)(pitStop).toHaveProperty("duration", "25.885");
    });
});
(0, vitest_1.describe)("Qualifying API", () => {
    (0, vitest_1.it)("should retrieve qualifying results by year and round", async () => {
        const qualifying = await index_js_7.default.getQualifyingsByYearRace(2023, 1);
        // Check structure of a qualifying result
        (0, vitest_1.expect)(qualifying).toBeDefined();
        (0, vitest_1.expect)(qualifying).toHaveProperty("season", "2023");
        (0, vitest_1.expect)(qualifying).toHaveProperty("round", "1");
        (0, vitest_1.expect)(qualifying).toHaveProperty("raceName", "Bahrain Grand Prix");
        (0, vitest_1.expect)(qualifying).toHaveProperty("Circuit");
        (0, vitest_1.expect)(qualifying).toHaveProperty("date", "2023-03-05");
        (0, vitest_1.expect)(qualifying).toHaveProperty("time", "15:00:00Z");
        (0, vitest_1.expect)(qualifying).toHaveProperty("QualifyingResults");
        const result = qualifying.QualifyingResults[0];
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result).toHaveProperty("number", "1");
        (0, vitest_1.expect)(result).toHaveProperty("position", "1");
        (0, vitest_1.expect)(result).toHaveProperty("Driver");
        (0, vitest_1.expect)(result.Driver).toHaveProperty("driverId", "max_verstappen");
        (0, vitest_1.expect)(result).toHaveProperty("Constructor");
        (0, vitest_1.expect)(result.Constructor).toHaveProperty("constructorId", "red_bull");
        (0, vitest_1.expect)(result).toHaveProperty("Q1", "1:31.295");
        (0, vitest_1.expect)(result).toHaveProperty("Q2", "1:30.503");
        (0, vitest_1.expect)(result).toHaveProperty("Q3", "1:29.708");
    });
});
(0, vitest_1.describe)("Results API", () => {
    (0, vitest_1.it)("should retrieve race results by year and round", async () => {
        const raceResults = await index_js_8.default.getResultsByYearRace(2023, 1);
        (0, vitest_1.expect)(raceResults).toBeDefined();
        (0, vitest_1.expect)(raceResults).toHaveProperty("season", "2023");
        (0, vitest_1.expect)(raceResults).toHaveProperty("round", "1");
        (0, vitest_1.expect)(raceResults).toHaveProperty("raceName", "Bahrain Grand Prix");
        (0, vitest_1.expect)(raceResults).toHaveProperty("Circuit");
        (0, vitest_1.expect)(raceResults).toHaveProperty("date", "2023-03-05");
        (0, vitest_1.expect)(raceResults).toHaveProperty("time", "15:00:00Z");
        (0, vitest_1.expect)(raceResults).toHaveProperty("Results");
        // Check structure of a result
        const result = raceResults.Results[0];
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result).toHaveProperty("number", "1");
        (0, vitest_1.expect)(result).toHaveProperty("position", "1");
        (0, vitest_1.expect)(result).toHaveProperty("positionText", "1");
        (0, vitest_1.expect)(result).toHaveProperty("points", "25");
        (0, vitest_1.expect)(result).toHaveProperty("Driver");
        (0, vitest_1.expect)(result).toHaveProperty("Constructor");
        (0, vitest_1.expect)(result).toHaveProperty("grid", "1");
        (0, vitest_1.expect)(result).toHaveProperty("laps", "57");
        (0, vitest_1.expect)(result).toHaveProperty("status", "Finished");
        (0, vitest_1.expect)(result).toHaveProperty("Time");
        (0, vitest_1.expect)(result).toHaveProperty("FastestLap");
    });
});
(0, vitest_1.describe)("Schedule API", () => {
    (0, vitest_1.it)("should retrieve the complete calendar for a year", async () => {
        const races = await index_js_9.default.getScheduleByYear(2023);
        (0, vitest_1.expect)(races).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(races)).toBe(true);
        (0, vitest_1.expect)(races.length).toBeGreaterThan(0);
        // Check structure of the first race
        const firstRace = races[0];
        (0, vitest_1.expect)(firstRace).toHaveProperty("season");
        (0, vitest_1.expect)(firstRace).toHaveProperty("round");
        (0, vitest_1.expect)(firstRace).toHaveProperty("raceName");
        (0, vitest_1.expect)(firstRace).toHaveProperty("Circuit");
    });
    (0, vitest_1.it)("should retrieve a specific race by year and round", async () => {
        const races = await index_js_9.default.getScheduleByYearRace(2023, 1);
        const race = races[0];
        (0, vitest_1.expect)(race).toBeDefined();
        (0, vitest_1.expect)(race).toHaveProperty("season", "2023");
        (0, vitest_1.expect)(race).toHaveProperty("round", "1");
        (0, vitest_1.expect)(race).toHaveProperty("raceName", "Bahrain Grand Prix");
        (0, vitest_1.expect)(race).toHaveProperty("Circuit");
        (0, vitest_1.expect)(race).toHaveProperty("date", "2023-03-05");
        (0, vitest_1.expect)(race).toHaveProperty("time", "15:00:00Z");
        (0, vitest_1.expect)(race).toHaveProperty("FirstPractice");
        (0, vitest_1.expect)(race.FirstPractice).toHaveProperty("date", "2023-03-03");
        (0, vitest_1.expect)(race.FirstPractice).toHaveProperty("time", "11:30:00Z");
        (0, vitest_1.expect)(race).toHaveProperty("SecondPractice");
        (0, vitest_1.expect)(race.SecondPractice).toHaveProperty("date", "2023-03-03");
        (0, vitest_1.expect)(race.SecondPractice).toHaveProperty("time", "15:00:00Z");
        (0, vitest_1.expect)(race).toHaveProperty("ThirdPractice");
        (0, vitest_1.expect)(race.ThirdPractice).toHaveProperty("date", "2023-03-04");
        (0, vitest_1.expect)(race.ThirdPractice).toHaveProperty("time", "11:30:00Z");
        (0, vitest_1.expect)(race).toHaveProperty("Qualifying");
        (0, vitest_1.expect)(race.Qualifying).toHaveProperty("date", "2023-03-04");
        (0, vitest_1.expect)(race.Qualifying).toHaveProperty("time", "15:00:00Z");
    });
});
(0, vitest_1.describe)("Seasons API", () => {
    (0, vitest_1.it)("should retrieve all seasons", async () => {
        const seasonsList = await index_js_10.default.getAllSeasons(10);
        (0, vitest_1.expect)(seasonsList).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(seasonsList)).toBe(true);
        (0, vitest_1.expect)(seasonsList.length).toBeGreaterThan(0);
        // Check structure of a season object
        const season = seasonsList[0];
        (0, vitest_1.expect)(season).toHaveProperty("season", "1950");
        (0, vitest_1.expect)(season).toHaveProperty("url");
    });
});
(0, vitest_1.describe)("Standings API", () => {
    (0, vitest_1.it)("should retrieve constructor standings for a specific year", async () => {
        const constructorStandings = await index_js_11.default.getConstructorStandingsByYear(2023);
        (0, vitest_1.expect)(constructorStandings).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(constructorStandings)).toBe(true);
        (0, vitest_1.expect)(constructorStandings.length).toBeGreaterThan(0);
        // Check structure of a constructor standings object
        const constructor = constructorStandings[0];
        (0, vitest_1.expect)(constructor).toHaveProperty("position", "1");
        (0, vitest_1.expect)(constructor).toHaveProperty("positionText", "1");
        (0, vitest_1.expect)(constructor).toHaveProperty("points", "860");
        (0, vitest_1.expect)(constructor).toHaveProperty("wins", "21");
        (0, vitest_1.expect)(constructor).toHaveProperty("Constructor");
        (0, vitest_1.expect)(constructor.Constructor).toHaveProperty("constructorId", "red_bull");
    });
    (0, vitest_1.it)("should retrieve driver standings for a specific year", async () => {
        const driverStandings = await index_js_11.default.getDriverStandingsByYear(2023);
        (0, vitest_1.expect)(driverStandings).toBeDefined();
        (0, vitest_1.expect)(Array.isArray(driverStandings)).toBe(true);
        (0, vitest_1.expect)(driverStandings.length).toBeGreaterThan(0);
        // Check structure of a driver standings object
        const driver = driverStandings[0];
        (0, vitest_1.expect)(driver).toHaveProperty("position", "1");
        (0, vitest_1.expect)(driver).toHaveProperty("positionText", "1");
        (0, vitest_1.expect)(driver).toHaveProperty("points", "575");
        (0, vitest_1.expect)(driver).toHaveProperty("wins", "19");
        (0, vitest_1.expect)(driver).toHaveProperty("Driver");
        (0, vitest_1.expect)(driver.Driver).toHaveProperty("driverId", "max_verstappen");
        (0, vitest_1.expect)(driver).toHaveProperty("Constructors");
        (0, vitest_1.expect)(driver.Constructors).toBeInstanceOf(Array);
        (0, vitest_1.expect)(driver.Constructors.length).toBe(1);
        (0, vitest_1.expect)(driver.Constructors[0]).toHaveProperty("constructorId", "red_bull");
    });
});
//# sourceMappingURL=index.test.js.map