var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { describe, it, expect } from "vitest";
import circuits from "./requests/circuits";
import constructors from "./requests/constructors";
import drivers from "./requests/drivers";
import finishingStatus from "./requests/finishingStatus";
import lapTimes from "./requests/lapTimes";
import pitStops from "./requests/pitStops";
import qualifyings from "./requests/qualifyings";
import results from "./requests/results";
import schedule from "./requests/schedule";
import seasons from "./requests/seasons/seasons";
import standings from "./requests/standings";
describe("Circuits API", () => {
    it("should retrieve all circuits for a year", () => __awaiter(void 0, void 0, void 0, function* () {
        const circuitList = yield circuits.getCircuitsByYear(2023);
        expect(circuitList).toBeDefined();
        expect(Array.isArray(circuitList)).toBe(true);
        expect(circuitList.length).toBeGreaterThan(0);
        // Check structure of the first circuit
        const firstCircuit = circuitList[0];
        expect(firstCircuit).toHaveProperty("circuitId");
        expect(firstCircuit).toHaveProperty("circuitName");
        expect(firstCircuit).toHaveProperty("Location");
        expect(firstCircuit.Location).toHaveProperty("lat");
        expect(firstCircuit.Location).toHaveProperty("long");
        expect(firstCircuit.Location).toHaveProperty("locality");
        expect(firstCircuit.Location).toHaveProperty("country");
    }));
    it("should retrieve a specific circuit by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const circuit = yield circuits.getCircuitInformations("monaco");
        expect(circuit).toBeDefined();
        expect(circuit).toHaveProperty("circuitId", "monaco");
        expect(circuit).toHaveProperty("circuitName", "Circuit de Monaco");
        expect(circuit).toHaveProperty("Location");
        expect(circuit.Location).toHaveProperty("lat", "43.7347");
        expect(circuit.Location).toHaveProperty("long", "7.42056");
        expect(circuit.Location).toHaveProperty("locality", "Monte-Carlo");
        expect(circuit.Location).toHaveProperty("country", "Monaco");
    }));
});
describe("Constructors API", () => {
    it("should retrieve all constructors for a year", () => __awaiter(void 0, void 0, void 0, function* () {
        const constructorList = yield constructors.getConstructorsByYear(2023);
        expect(constructorList).toBeDefined();
        expect(Array.isArray(constructorList)).toBe(true);
        expect(constructorList.length).toBeGreaterThan(0);
        // Check structure of a constructor object
        const constructor = constructorList[0];
        expect(constructor).toHaveProperty("constructorId");
        expect(constructor).toHaveProperty("name");
        expect(constructor).toHaveProperty("nationality");
    }));
    it("should retrieve a specific constructor by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const constructor = yield constructors.getConstructorInformations("ferrari");
        expect(constructor).toBeDefined();
        expect(constructor).toHaveProperty("constructorId", "ferrari");
        expect(constructor).toHaveProperty("name", "Ferrari");
        expect(constructor).toHaveProperty("nationality", "Italian");
    }));
});
describe("Drivers API", () => {
    it("should retrieve all drivers for a year", () => __awaiter(void 0, void 0, void 0, function* () {
        const driverList = yield drivers.getDriversByYear(2023);
        expect(driverList).toBeDefined();
        expect(Array.isArray(driverList)).toBe(true);
        expect(driverList.length).toBeGreaterThan(0);
        // Check structure of a driver object
        const driver = driverList[0];
        expect(driver).toHaveProperty("driverId");
        expect(driver).toHaveProperty("permanentNumber");
        expect(driver).toHaveProperty("givenName");
        expect(driver).toHaveProperty("familyName");
        expect(driver).toHaveProperty("nationality");
    }));
    it("should retrieve a specific driver by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const driver = yield drivers.getDriverInformations("alonso");
        expect(driver).toBeDefined();
        expect(driver).toHaveProperty("driverId", "alonso");
        expect(driver).toHaveProperty("permanentNumber", "14");
        expect(driver).toHaveProperty("givenName", "Fernando");
        expect(driver).toHaveProperty("familyName", "Alonso");
        expect(driver).toHaveProperty("dateOfBirth", "1981-07-29");
        expect(driver).toHaveProperty("code", "ALO");
        expect(driver).toHaveProperty("nationality", "Spanish");
    }));
});
describe("Finishing Status API", () => {
    it("should retrieve all finishing statuses", () => __awaiter(void 0, void 0, void 0, function* () {
        const finishingStatusList = yield finishingStatus.getFinishingStatusCodes();
        expect(finishingStatusList).toBeDefined();
        expect(Array.isArray(finishingStatusList)).toBe(true);
        expect(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        expect(status).toHaveProperty("statusId");
        expect(status).toHaveProperty("status");
        expect(status).toHaveProperty("count");
    }));
    it("should retrieve all finishing statuses for a year", () => __awaiter(void 0, void 0, void 0, function* () {
        const finishingStatusList = yield finishingStatus.getFinishingStatusForSpecificYear(2023);
        expect(finishingStatusList).toBeDefined();
        expect(Array.isArray(finishingStatusList)).toBe(true);
        expect(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        expect(status).toHaveProperty("statusId", "1");
        expect(status).toHaveProperty("status", "Finished");
        expect(status).toHaveProperty("count", "304");
    }));
});
describe("Lap Times API", () => {
    it("should retrieve lap times for a specific lap", () => __awaiter(void 0, void 0, void 0, function* () {
        const lap = yield lapTimes.getLapTime(2023, 1, 1);
        // Check structure of a lap time object
        expect(lap).toBeDefined();
        expect(lap).toHaveProperty("season", "2023");
        expect(lap).toHaveProperty("round", "1");
        expect(lap).toHaveProperty("raceName", "Bahrain Grand Prix");
        expect(lap).toHaveProperty("Circuit");
        expect(lap).toHaveProperty("date", "2023-03-05");
        expect(lap).toHaveProperty("time", "15:00:00Z");
        expect(lap).toHaveProperty("Laps");
        expect(lap.Laps).toBeInstanceOf(Array);
        expect(lap.Laps.length).toBeGreaterThan(0);
        expect(lap.Laps[0]).toHaveProperty("number", "1");
        expect(lap.Laps[0]).toHaveProperty("Timings");
    }));
});
describe("Pit Stops API", () => {
    it("should retrieve pit stops for a specific race", () => __awaiter(void 0, void 0, void 0, function* () {
        const racePitStops = yield pitStops.getPitStopsByRaceYear(2023, 1);
        expect(racePitStops).toBeDefined();
        const pitStopList = racePitStops.PitStops;
        expect(pitStopList).toBeDefined();
        expect(Array.isArray(pitStopList)).toBe(true);
        expect(pitStopList.length).toBeGreaterThan(0);
        // Check structure of a pit stop object
        const pitStop = pitStopList[0];
        expect(pitStop).toHaveProperty("driverId", "gasly");
        expect(pitStop).toHaveProperty("lap", "9");
        expect(pitStop).toHaveProperty("stop", "1");
        expect(pitStop).toHaveProperty("time", "18:18:56");
        expect(pitStop).toHaveProperty("duration", "25.885");
    }));
});
describe("Qualifying API", () => {
    it("should retrieve qualifying results by year and round", () => __awaiter(void 0, void 0, void 0, function* () {
        const qualifying = yield qualifyings.getQualifyingsByYearRace(2023, 1);
        // Check structure of a qualifying result
        expect(qualifying).toBeDefined();
        expect(qualifying).toHaveProperty("season", "2023");
        expect(qualifying).toHaveProperty("round", "1");
        expect(qualifying).toHaveProperty("raceName", "Bahrain Grand Prix");
        expect(qualifying).toHaveProperty("Circuit");
        expect(qualifying).toHaveProperty("date", "2023-03-05");
        expect(qualifying).toHaveProperty("time", "15:00:00Z");
        expect(qualifying).toHaveProperty("QualifyingResults");
        const result = qualifying.QualifyingResults[0];
        expect(result).toBeDefined();
        expect(result).toHaveProperty("number", "1");
        expect(result).toHaveProperty("position", "1");
        expect(result).toHaveProperty("Driver");
        expect(result.Driver).toHaveProperty("driverId", "max_verstappen");
        expect(result).toHaveProperty("Constructor");
        expect(result.Constructor).toHaveProperty("constructorId", "red_bull");
        expect(result).toHaveProperty("Q1", "1:31.295");
        expect(result).toHaveProperty("Q2", "1:30.503");
        expect(result).toHaveProperty("Q3", "1:29.708");
    }));
});
describe("Results API", () => {
    it("should retrieve race results by year and round", () => __awaiter(void 0, void 0, void 0, function* () {
        const raceResults = yield results.getResultsByYearRace(2023, 1);
        expect(raceResults).toBeDefined();
        expect(raceResults).toHaveProperty("season", "2023");
        expect(raceResults).toHaveProperty("round", "1");
        expect(raceResults).toHaveProperty("raceName", "Bahrain Grand Prix");
        expect(raceResults).toHaveProperty("Circuit");
        expect(raceResults).toHaveProperty("date", "2023-03-05");
        expect(raceResults).toHaveProperty("time", "15:00:00Z");
        expect(raceResults).toHaveProperty("Results");
        // Check structure of a result
        const result = raceResults.Results[0];
        expect(result).toBeDefined();
        expect(result).toHaveProperty("number", "1");
        expect(result).toHaveProperty("position", "1");
        expect(result).toHaveProperty("positionText", "1");
        expect(result).toHaveProperty("points", "25");
        expect(result).toHaveProperty("Driver");
        expect(result).toHaveProperty("Constructor");
        expect(result).toHaveProperty("grid", "1");
        expect(result).toHaveProperty("laps", "57");
        expect(result).toHaveProperty("status", "Finished");
        expect(result).toHaveProperty("Time");
        expect(result).toHaveProperty("FastestLap");
    }));
});
describe("Schedule API", () => {
    it("should retrieve the complete calendar for a year", () => __awaiter(void 0, void 0, void 0, function* () {
        const races = yield schedule.getScheduleByYear(2023);
        expect(races).toBeDefined();
        expect(Array.isArray(races)).toBe(true);
        expect(races.length).toBeGreaterThan(0);
        // Check structure of the first race
        const firstRace = races[0];
        expect(firstRace).toHaveProperty("season");
        expect(firstRace).toHaveProperty("round");
        expect(firstRace).toHaveProperty("raceName");
        expect(firstRace).toHaveProperty("Circuit");
    }));
    it("should retrieve a specific race by year and round", () => __awaiter(void 0, void 0, void 0, function* () {
        const races = yield schedule.getScheduleByYearRace(2023, 1);
        const race = races[0];
        expect(race).toBeDefined();
        expect(race).toHaveProperty("season", "2023");
        expect(race).toHaveProperty("round", "1");
        expect(race).toHaveProperty("raceName", "Bahrain Grand Prix");
        expect(race).toHaveProperty("Circuit");
        expect(race).toHaveProperty("date", "2023-03-05");
        expect(race).toHaveProperty("time", "15:00:00Z");
        expect(race).toHaveProperty("FirstPractice");
        expect(race.FirstPractice).toHaveProperty("date", "2023-03-03");
        expect(race.FirstPractice).toHaveProperty("time", "11:30:00Z");
        expect(race).toHaveProperty("SecondPractice");
        expect(race.SecondPractice).toHaveProperty("date", "2023-03-03");
        expect(race.SecondPractice).toHaveProperty("time", "15:00:00Z");
        expect(race).toHaveProperty("ThirdPractice");
        expect(race.ThirdPractice).toHaveProperty("date", "2023-03-04");
        expect(race.ThirdPractice).toHaveProperty("time", "11:30:00Z");
        expect(race).toHaveProperty("Qualifying");
        expect(race.Qualifying).toHaveProperty("date", "2023-03-04");
        expect(race.Qualifying).toHaveProperty("time", "15:00:00Z");
    }));
});
describe("Seasons API", () => {
    it("should retrieve all seasons", () => __awaiter(void 0, void 0, void 0, function* () {
        const seasonsList = yield seasons.getAllSeasons(10);
        expect(seasonsList).toBeDefined();
        expect(Array.isArray(seasonsList)).toBe(true);
        expect(seasonsList.length).toBeGreaterThan(0);
        // Check structure of a season object
        const season = seasonsList[0];
        expect(season).toHaveProperty("season", "1950");
        expect(season).toHaveProperty("url");
    }));
});
describe("Standings API", () => {
    it("should retrieve constructor standings for a specific year", () => __awaiter(void 0, void 0, void 0, function* () {
        const constructorStandings = yield standings.getConstructorStandingsByYear(2023);
        expect(constructorStandings).toBeDefined();
        expect(Array.isArray(constructorStandings)).toBe(true);
        expect(constructorStandings.length).toBeGreaterThan(0);
        // Check structure of a constructor standings object
        const constructor = constructorStandings[0];
        expect(constructor).toHaveProperty("position", "1");
        expect(constructor).toHaveProperty("positionText", "1");
        expect(constructor).toHaveProperty("points", "860");
        expect(constructor).toHaveProperty("wins", "21");
        expect(constructor).toHaveProperty("Constructor");
        expect(constructor.Constructor).toHaveProperty("constructorId", "red_bull");
    }));
    it("should retrieve driver standings for a specific year", () => __awaiter(void 0, void 0, void 0, function* () {
        const driverStandings = yield standings.getDriverStandingsByYear(2023);
        expect(driverStandings).toBeDefined();
        expect(Array.isArray(driverStandings)).toBe(true);
        expect(driverStandings.length).toBeGreaterThan(0);
        // Check structure of a driver standings object
        const driver = driverStandings[0];
        expect(driver).toHaveProperty("position", "1");
        expect(driver).toHaveProperty("positionText", "1");
        expect(driver).toHaveProperty("points", "575");
        expect(driver).toHaveProperty("wins", "19");
        expect(driver).toHaveProperty("Driver");
        expect(driver.Driver).toHaveProperty("driverId", "max_verstappen");
        expect(driver).toHaveProperty("Constructors");
        expect(driver.Constructors).toBeInstanceOf(Array);
        expect(driver.Constructors.length).toBe(1);
        expect(driver.Constructors[0]).toHaveProperty("constructorId", "red_bull");
    }));
});
