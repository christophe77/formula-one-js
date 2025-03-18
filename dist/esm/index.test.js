import { describe, it, expect } from "vitest";
import circuits from "./requests/circuits/index.js";
import constructors from "./requests/constructors/index.js";
import drivers from "./requests/drivers/index.js";
import finishingStatus from "./requests/finishingStatus/index.js";
import lapTimes from "./requests/lapTimes/index.js";
import pitStops from "./requests/pitStops/index.js";
import qualifyings from "./requests/qualifyings/index.js";
import results from "./requests/results/index.js";
import schedule from "./requests/schedule/index.js";
import seasons from "./requests/seasons/index.js";
import standings from "./requests/standings/index.js";
describe("Circuits API", () => {
    it("should retrieve all circuits", async () => {
        const circuitList = await circuits.getAllCircuits(10);
        expect(circuitList).toBeDefined();
        expect(Array.isArray(circuitList)).toBe(true);
        expect(circuitList.length).toBe(10);
        // Check structure of the first circuit
        const firstCircuit = circuitList[0];
        expect(firstCircuit).toHaveProperty("circuitId");
        expect(firstCircuit).toHaveProperty("circuitName");
        expect(firstCircuit).toHaveProperty("Location");
        expect(firstCircuit.Location).toHaveProperty("lat");
        expect(firstCircuit.Location).toHaveProperty("long");
        expect(firstCircuit.Location).toHaveProperty("locality");
        expect(firstCircuit.Location).toHaveProperty("country");
    });
    it("should retrieve all circuits for a year", async () => {
        const circuitList = await circuits.getCircuitsByYear(2023);
        expect(circuitList).toBeDefined();
        expect(Array.isArray(circuitList)).toBe(true);
        expect(circuitList.length).toBeGreaterThan(0);
        // Check structure of the first circuit
        const firstCircuit = circuitList[0];
        expect(firstCircuit).toHaveProperty("circuitId", "albert_park");
        expect(firstCircuit).toHaveProperty("circuitName", "Albert Park Grand Prix Circuit");
        expect(firstCircuit).toHaveProperty("Location");
        expect(firstCircuit.Location).toHaveProperty("lat", "-37.8497");
        expect(firstCircuit.Location).toHaveProperty("long", "144.968");
        expect(firstCircuit.Location).toHaveProperty("locality", "Melbourne");
        expect(firstCircuit.Location).toHaveProperty("country", "Australia");
    });
    it("should retrieve a circuit for a specific race", async () => {
        const circuitList = await circuits.getCircuitsByYearRace(2023, 2);
        expect(circuitList).toBeDefined();
        expect(Array.isArray(circuitList)).toBe(true);
        expect(circuitList.length).toBe(1);
        // Check structure of the circuit
        const firstCircuit = circuitList[0];
        expect(firstCircuit).toHaveProperty("circuitId", "jeddah");
        expect(firstCircuit).toHaveProperty("circuitName", "Jeddah Corniche Circuit");
        expect(firstCircuit).toHaveProperty("Location");
        expect(firstCircuit.Location).toHaveProperty("lat", "21.6319");
        expect(firstCircuit.Location).toHaveProperty("long", "39.1044");
        expect(firstCircuit.Location).toHaveProperty("locality", "Jeddah");
        expect(firstCircuit.Location).toHaveProperty("country", "Saudi Arabia");
    });
    it("should retrieve a specific circuit by ID", async () => {
        const circuit = await circuits.getCircuitInformations("monaco");
        expect(circuit).toBeDefined();
        expect(circuit).toHaveProperty("circuitId", "monaco");
        expect(circuit).toHaveProperty("circuitName", "Circuit de Monaco");
        expect(circuit).toHaveProperty("Location");
        expect(circuit.Location).toHaveProperty("lat", "43.7347");
        expect(circuit.Location).toHaveProperty("long", "7.42056");
        expect(circuit.Location).toHaveProperty("locality", "Monte-Carlo");
        expect(circuit.Location).toHaveProperty("country", "Monaco");
    });
});
describe("Constructors API", () => {
    it("should retrieve all constructors", async () => {
        const constructorList = await constructors.getAllConstructors(10);
        expect(constructorList).toBeDefined();
        expect(Array.isArray(constructorList)).toBe(true);
        expect(constructorList.length).toBe(10);
        // Check structure of the first constructor
        const firstConstructor = constructorList[0];
        expect(firstConstructor).toHaveProperty("constructorId", "adams");
        expect(firstConstructor).toHaveProperty("name", "Adams");
        expect(firstConstructor).toHaveProperty("nationality", "American");
    });
    it("should retrieve all constructors for a year", async () => {
        const constructorList = await constructors.getConstructorsByYear(2023);
        expect(constructorList).toBeDefined();
        expect(Array.isArray(constructorList)).toBe(true);
        expect(constructorList.length).toBe(10);
        // Check structure of a constructor object
        const constructor = constructorList[0];
        expect(constructor).toHaveProperty("constructorId", "alfa");
        expect(constructor).toHaveProperty("name", "Alfa Romeo");
        expect(constructor).toHaveProperty("nationality", "Swiss");
    });
    it("should retrieve all constructors for a specific race", async () => {
        const constructorList = await constructors.getConstructorsByRaceYear(2023, 1);
        expect(constructorList).toBeDefined();
        expect(Array.isArray(constructorList)).toBe(true);
        expect(constructorList.length).toBe(10);
        // Check structure of a constructor object
        const constructor = constructorList[0];
        expect(constructor).toHaveProperty("constructorId", "alfa");
        expect(constructor).toHaveProperty("name", "Alfa Romeo");
        expect(constructor).toHaveProperty("nationality", "Swiss");
    });
    it("should retrieve a specific constructor by ID", async () => {
        const constructor = await constructors.getConstructorInformations("ferrari");
        expect(constructor).toBeDefined();
        expect(constructor).toHaveProperty("constructorId", "ferrari");
        expect(constructor).toHaveProperty("name", "Ferrari");
        expect(constructor).toHaveProperty("nationality", "Italian");
    });
});
describe("Drivers API", () => {
    it("should retrieve all drivers", async () => {
        const driverList = await drivers.getAllDrivers(10);
        expect(driverList).toBeDefined();
        expect(Array.isArray(driverList)).toBe(true);
        expect(driverList.length).toBe(10);
        // Check structure of the first driver
        const driver = driverList[0];
        expect(driver).toHaveProperty("driverId");
        expect(driver).toHaveProperty("givenName");
        expect(driver).toHaveProperty("familyName");
        expect(driver).toHaveProperty("dateOfBirth");
        expect(driver).toHaveProperty("nationality");
    });
    it("should retrieve all drivers for a year", async () => {
        const driverList = await drivers.getDriversByYear(2023);
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
    });
    it("should retrieve all drivers for a specific race", async () => {
        const driverList = await drivers.getDriversByYearRace(2023, 1);
        expect(driverList).toBeDefined();
        expect(Array.isArray(driverList)).toBe(true);
        expect(driverList.length).toBeGreaterThan(0);
        // Check structure of a driver object
        const driver = driverList[0];
        expect(driver).toHaveProperty("driverId", "albon");
        expect(driver).toHaveProperty("permanentNumber", "23");
        expect(driver).toHaveProperty("givenName", "Alexander");
        expect(driver).toHaveProperty("familyName", "Albon");
        expect(driver).toHaveProperty("dateOfBirth", "1996-03-23");
        expect(driver).toHaveProperty("code", "ALB");
        expect(driver).toHaveProperty("nationality", "Thai");
    });
    it("should retrieve a specific driver by ID", async () => {
        const driver = await drivers.getDriverInformations("alonso");
        expect(driver).toBeDefined();
        expect(driver).toHaveProperty("driverId", "alonso");
        expect(driver).toHaveProperty("permanentNumber", "14");
        expect(driver).toHaveProperty("givenName", "Fernando");
        expect(driver).toHaveProperty("familyName", "Alonso");
        expect(driver).toHaveProperty("dateOfBirth", "1981-07-29");
        expect(driver).toHaveProperty("code", "ALO");
        expect(driver).toHaveProperty("nationality", "Spanish");
    });
});
describe("Finishing Status API", () => {
    it("should retrieve all finishing statuses", async () => {
        const finishingStatusList = await finishingStatus.getFinishingStatusCodes();
        expect(finishingStatusList).toBeDefined();
        expect(Array.isArray(finishingStatusList)).toBe(true);
        expect(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        expect(status).toHaveProperty("statusId");
        expect(status).toHaveProperty("status");
        expect(status).toHaveProperty("count");
    });
    it("should retrieve all finishing statuses for a year", async () => {
        const finishingStatusList = await finishingStatus.getFinishingStatusForSpecificYear(2023);
        expect(finishingStatusList).toBeDefined();
        expect(Array.isArray(finishingStatusList)).toBe(true);
        expect(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        expect(status).toHaveProperty("statusId", "1");
        expect(status).toHaveProperty("status", "Finished");
        expect(status).toHaveProperty("count", "304");
    });
    it("should retrieve all finishing statuses for a specific race", async () => {
        const finishingStatusList = await finishingStatus.getFinishingStatusForSpecificYearRace(2023, 1);
        expect(finishingStatusList).toBeDefined();
        expect(Array.isArray(finishingStatusList)).toBe(true);
        expect(finishingStatusList.length).toBeGreaterThan(0);
        // Check structure of a finishing status object
        const status = finishingStatusList[0];
        expect(status).toHaveProperty("statusId", "1");
        expect(status).toHaveProperty("status", "Finished");
        expect(status).toHaveProperty("count", "11");
    });
});
describe("Lap Times API", () => {
    it("should retrieve lap times for a specific lap", async () => {
        const lap = await lapTimes.getLapTime(2023, 1, 1);
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
    });
});
describe("Pit Stops API", () => {
    it("should retrieve pit stops for a specific race", async () => {
        const racePitStops = await pitStops.getPitStopsByRaceYear(2023, 1);
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
    });
    it("should retrieve specific pit stops for a specific race", async () => {
        const pitStop = await pitStops.getPitStopsByPitStopNumber(2023, 1, 1);
        expect(pitStop).toBeDefined();
        // Check structure of a pit stop object
        expect(pitStop).toHaveProperty("season", "2023");
        expect(pitStop).toHaveProperty("round", "1");
        expect(pitStop).toHaveProperty("raceName", "Bahrain Grand Prix");
        expect(pitStop).toHaveProperty("Circuit");
        expect(pitStop).toHaveProperty("date", "2023-03-05");
        expect(pitStop).toHaveProperty("time", "15:00:00Z");
        expect(pitStop).toHaveProperty("PitStops");
        // Check structure of a pit stop details object
        const pitStopDetails = pitStop.PitStops[0];
        expect(pitStopDetails).toBeDefined();
        expect(pitStopDetails).toHaveProperty("driverId", "gasly");
        expect(pitStopDetails).toHaveProperty("lap", "9");
        expect(pitStopDetails).toHaveProperty("stop", "1");
        expect(pitStopDetails).toHaveProperty("time", "18:18:56");
        expect(pitStopDetails).toHaveProperty("duration", "25.885");
    });
});
describe("Qualifying API", () => {
    it("should retrieve qualifying results by year and round", async () => {
        const qualifying = await qualifyings.getQualifyingsByYearRace(2023, 1);
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
    });
    it("should retrieve qualifying results by year and round", async () => {
        const qualifying = await qualifyings.getLatestQualifying();
        // Check structure of a qualifying result
        expect(qualifying).toBeDefined();
        expect(qualifying).toHaveProperty("season");
        expect(qualifying).toHaveProperty("round");
        expect(qualifying).toHaveProperty("raceName");
        expect(qualifying).toHaveProperty("Circuit");
        expect(qualifying).toHaveProperty("date");
        expect(qualifying).toHaveProperty("time");
        expect(qualifying).toHaveProperty("QualifyingResults");
        const result = qualifying.QualifyingResults[0];
        expect(result).toBeDefined();
        expect(result).toHaveProperty("number");
        expect(result).toHaveProperty("position");
        expect(result).toHaveProperty("Driver");
        expect(result.Driver).toHaveProperty("driverId");
        expect(result).toHaveProperty("Constructor");
        expect(result.Constructor).toHaveProperty("constructorId");
        expect(result).toHaveProperty("Q1");
        expect(result).toHaveProperty("Q2");
        expect(result).toHaveProperty("Q3");
    });
});
describe("Results API", () => {
    it("should retrieve race results by year and round", async () => {
        const raceResults = await results.getResultsByYearRace(2023, 1);
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
    });
    it("should retrieve latest race results", async () => {
        const latestRaceResults = await results.getLatestRaceResults();
        expect(latestRaceResults).toBeDefined();
        expect(latestRaceResults).toHaveProperty("season");
        expect(latestRaceResults).toHaveProperty("round");
        expect(latestRaceResults).toHaveProperty("raceName");
        expect(latestRaceResults).toHaveProperty("Circuit");
        expect(latestRaceResults).toHaveProperty("date");
        expect(latestRaceResults).toHaveProperty("time");
        expect(latestRaceResults).toHaveProperty("Results");
        // Check structure of the first result
        const result = latestRaceResults.Results[0];
        expect(result).toBeDefined();
        expect(result).toHaveProperty("number");
        expect(result).toHaveProperty("position");
        expect(result).toHaveProperty("positionText");
        expect(result).toHaveProperty("points");
        expect(result).toHaveProperty("Driver");
        expect(result).toHaveProperty("Constructor");
        expect(result).toHaveProperty("grid");
        expect(result).toHaveProperty("laps");
        expect(result).toHaveProperty("status");
        expect(result).toHaveProperty("Time");
        expect(result).toHaveProperty("FastestLap");
    });
});
describe("Schedule API", () => {
    it("should retrieve the complete calendar for a year", async () => {
        const races = await schedule.getScheduleByYear(2023);
        expect(races).toBeDefined();
        expect(Array.isArray(races)).toBe(true);
        expect(races.length).toBeGreaterThan(0);
        // Check structure of the first race
        const firstRace = races[0];
        expect(firstRace).toHaveProperty("season");
        expect(firstRace).toHaveProperty("round");
        expect(firstRace).toHaveProperty("raceName");
        expect(firstRace).toHaveProperty("Circuit");
    });
    it("should retrieve a specific race schedule by year and round", async () => {
        const races = await schedule.getScheduleByYearRace(2023, 1);
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
    });
    it("should retrieve the current year calendar", async () => {
        const currentCalendar = await schedule.getCurrentSchedule();
        expect(currentCalendar).toBeDefined();
        expect(Array.isArray(currentCalendar)).toBe(true);
        expect(currentCalendar.length).toBeGreaterThan(0);
        // Check structure of the first race
        const firstRace = currentCalendar[0];
        expect(firstRace).toHaveProperty("season");
        expect(firstRace).toHaveProperty("round");
        expect(firstRace).toHaveProperty("raceName");
        expect(firstRace).toHaveProperty("Circuit");
        expect(firstRace).toHaveProperty("date");
        expect(firstRace).toHaveProperty("time");
        expect(firstRace).toHaveProperty("FirstPractice");
        expect(firstRace).toHaveProperty("SecondPractice");
        expect(firstRace).toHaveProperty("ThirdPractice");
        expect(firstRace).toHaveProperty("Qualifying");
    });
});
describe("Seasons API", () => {
    it("should retrieve all seasons", async () => {
        const seasonsList = await seasons.getAllSeasons(10);
        expect(seasonsList).toBeDefined();
        expect(Array.isArray(seasonsList)).toBe(true);
        expect(seasonsList.length).toBeGreaterThan(0);
        // Check structure of a season object
        const season = seasonsList[0];
        expect(season).toHaveProperty("season", "1950");
        expect(season).toHaveProperty("url");
    });
});
describe("Standings API", () => {
    it("should retrieve constructor standings for a specific year", async () => {
        const constructorStandings = await standings.getConstructorStandingsByYear(2023);
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
    });
    it("should retrieve constructor standings for a specific race", async () => {
        const constructorStandings = await standings.getConstructorStandingsByYearRace(2023, 1);
        expect(constructorStandings).toBeDefined();
        expect(Array.isArray(constructorStandings)).toBe(true);
        expect(constructorStandings.length).toBeGreaterThan(0);
        // Check structure of a constructor standings object
        const constructor = constructorStandings[0];
        expect(constructor).toHaveProperty("position", "1");
        expect(constructor).toHaveProperty("positionText", "1");
        expect(constructor).toHaveProperty("points", "43");
        expect(constructor).toHaveProperty("wins", "1");
        expect(constructor).toHaveProperty("Constructor");
        expect(constructor.Constructor).toHaveProperty("constructorId", "red_bull");
    });
    it("should retrieve current constructors standings", async () => {
        const constructorStandings = await standings.getCurrentConstructorStanding();
        expect(constructorStandings).toBeDefined();
        expect(Array.isArray(constructorStandings)).toBe(true);
        expect(constructorStandings.length).toBeGreaterThan(0);
        // Check structure of a constructor standings object
        const constructor = constructorStandings[0];
        expect(constructor).toHaveProperty("position");
        expect(constructor).toHaveProperty("positionText");
        expect(constructor).toHaveProperty("points");
        expect(constructor).toHaveProperty("wins");
        expect(constructor).toHaveProperty("Constructor");
    });
    it("should retrieve driver standings for a specific year", async () => {
        const driverStandings = await standings.getDriverStandingsByYear(2023);
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
    });
    it("should retrieve driver standings for a specific race", async () => {
        const driverStandings = await standings.getDriverStandingsByYearRace(2023, 1);
        expect(driverStandings).toBeDefined();
        expect(Array.isArray(driverStandings)).toBe(true);
        expect(driverStandings.length).toBeGreaterThan(0);
        // Check structure of a driver standings object
        const driver = driverStandings[0];
        expect(driver).toHaveProperty("position", "1");
        expect(driver).toHaveProperty("positionText", "1");
        expect(driver).toHaveProperty("points", "25");
        expect(driver).toHaveProperty("wins", "1");
        expect(driver).toHaveProperty("Driver");
        expect(driver.Driver).toHaveProperty("driverId", "max_verstappen");
    });
    it("should retrieve current driver standings", async () => {
        const driverStandings = await standings.getCurrentDriverStanding();
        expect(driverStandings).toBeDefined();
        expect(Array.isArray(driverStandings)).toBe(true);
        expect(driverStandings.length).toBeGreaterThan(0);
        // Check structure of a driver standings object
        const driver = driverStandings[0];
        expect(driver).toHaveProperty("position");
        expect(driver).toHaveProperty("positionText");
        expect(driver).toHaveProperty("points");
        expect(driver).toHaveProperty("wins");
        expect(driver).toHaveProperty("Driver");
    });
    it("should retrieve all championship driver winners", async () => {
        const driverWinners = await standings.getAllChampionshipDriverWinners();
        expect(driverWinners).toBeDefined();
        expect(Array.isArray(driverWinners)).toBe(true);
        expect(driverWinners.length).toBe(0); // FIXME this endpoint returns an empty list
    });
    it("should retrieve all championship constructor winners", async () => {
        const constructorWinners = await standings.getAllChampionshipConstructorWinners();
        expect(constructorWinners).toBeDefined();
        expect(Array.isArray(constructorWinners)).toBe(true);
        expect(constructorWinners.length).toBe(0); // FIXME this endpoint returns an empty list
    });
    // These two are tricky to test since they require a parameter that depends
    // on the current season:
    // - getStandingsByDriver
    // - getStandingsByConstructor
});
//# sourceMappingURL=index.test.js.map