# formula-one-js

Package to access formula one datas on both CJS and ESM apps.<br />
Datas are retrieved from the official formula 1 API ergast.com.<br />

## Install and import

    yarn install formula-one-js

Then import it in your project

    const f1js = require("formula-one-js");
    const { results, drivers, seasons, ... } = f1js.requests();

or

    import f1js from "formula-one-js";
    const { results, drivers, seasons, ... } = f1js.requests();

## Methods

### Drivers

return array or Driver object :

    type Driver = {
        driverId: string;
        code: string;
        url: string;
        givenName: string;
        familyName: string;
        dateOfBirth: string;
        nationality: string;
        permanentNumber?: string;
    };

    // Get all drivers with limit at 10 drivers
    drivers.getAllDrivers(10).then((driverList) => {
        console.log(driverList);
    });

    // Get all drivers by year
    drivers.getDriversByYear(2021).then((driverList) => {
        console.log(driverList);
    });

    // Get all drivers by year race (ex : year 2021, round 10)
    drivers.getDriversByYearRace(2021, 10).then((driverList) => {
        console.log(driverList);
    });

    // Get driver information by driverId
    drivers.getDriverInformations("max_verstappen").then((driver) => {
        console.log(driver);
    });

### Constructors

return array or Constructor object :

    type Constructor = {
        constructorId: string,
        url: string,
        name: string,
        nationality: string,
    };

    // Get all constructors with limit at 10 constructors
    constructors.getAllConstructors(10).then((constructorList) => {
        console.log(constructorList);
    });

    // Get all constructors by year
    constructors.getConstructorsByYear(2021).then((constructorList) => {
        console.log(constructorList);
    });

    // Get all constructors by year race (ex : year 2021, round 10)
    constructors.getConstructorsByRaceYear(2021, 10).then((constructorList) => {
        console.log(constructorList);
    });

    // Get constructor information by constructorId
    constructors.getConstructorInformations("red_bull").then((constructor) => {
        console.log(constructor);
    });

### Circuits

return array or Constructor object :

    type Circuit = {
        circuitId: string;
        url: string;
        circuitName: string;
        Location: {
            lat: string;
            long: string;
            locality: string;
            country: string;
        };
    };

    // Get all circuits with limit at 10 circuits
    circuits.getAllCircuits(10).then((circuitList) => {
        console.log(circuitList);
    });

    // Get all circuits by year
    circuits.getCircuitsByYear(2022).then((circuitList) => {
        console.log(circuitList);
    });

    // Get all circuits by year race (ex : year 2022, round 1)
    circuits.getCircuitsByYearRace(2022, 1).then((circuitList) => {
        console.log(circuitList);
    });

    // Get circuit information by circuitId
    circuits.getCircuitInformations("suzuka").then((circuit) => {
        console.log(circuit);
    });

### Seasons

return array or Season object :

    type Season = {
        season: string;
        url: string;
    };

    // Get all seasons with limit at 5 season
    seasons.getAllSeasons(5).then((seasonList) => {
        console.log(seasonList);
    });

    // Get all seasons with advanced search
    const seasonOptions = {
        circuits: "",
        constructors: "renault",
        drivers: "alonso",
        grid: "",
        results: "",
        driverStandings: "1",
        constructorStandings: "",
        fastest: "",
        status: "",
    };
    seasons.getAllSeasonsAdvanced(seasonOptions).then((seasonList) => {
        console.log(seasonList);
    });

### Results

return array or results object :

    type Result = {
        season: string;
        round: string;
        url: string;
        raceName: string;
        Circuit: Circuit;
        date: string;
        time: string;
        Results:
        [
            {
                number: string;
                position: string;
                positionText: string;
                points: string;
                Driver: Driver;
                Constructor: Constructor;
                grid: string;
                laps: string;
                status: string;
                Time: {
                    millis: string;
                    time: string;
                };
                FastestLap: {
                    rank: string;
                    lap: string;
                    Time: {
                        time: string;
                    };
                    AverageSpeed: {
                        units: string;
                        speed: string;
                    };
                };
            }
        ];
    };

    // Get results for race 10 of 2021
    results.getResultsByYearRace(2021, 10).then((resultList) => {
        console.log(resultList);
    });

    // Get latest race results
    results.getLatestRaceResults().then((resultList) => {
        console.log(resultList);
    });

### Qualifyings

return qualifying object :

    type Qualifying = {
        season: string;
        round: string;
        url: string;
        raceName: string;
        Circuit: Circuit;
        date: string;
        time: string;
        QualifyingResults: [
            {
                number: string;
                position: string;
                Driver: Driver;
                Constructor: Constructor;
                Q1: string;
                Q2: string;
                Q3: string;
            }
        ];
    };

    // Get qualifyings by year race (ex : year 2021, round 10)
    qualifyings.getQualifyingsByYearRace(2021, 10).then((qualifyingList) => {
        console.log(qualifyingList);
    });

### Schedule

return schedule object :

    type Schedule = {
        season: string;
        round: string;
        url: string;
        raceName: string;
        Circuit: Circuit;
        date: string;
        time: string;
        FirstPractice: { date: string };
        SecondPractice: { date: string };
        ThirdPractice: { date: string };
        Qualifying: { date: string };
    };

    // Get current schedule
    schedule.getCurrentSchedule().then((scheduleList) => {
        console.log(scheduleList);
    });

    // Get schedule by year
    schedule.getScheduleByYear(2021).then((scheduleList) => {
        console.log(scheduleList);
    });

    // Get schedule by race year
    schedule.getScheduleByYear(2021, 10).then((scheduleList) => {
        console.log(scheduleList);
    });

### LapTimes

return lapTime object :

    type Timing = {
        driverId: string;
        position: string;
        time: string;
    };
    type Lap = {
        number: string;
        Timings: Timing[];
    };
    type LapTime = {
        season: string;
        round: string;
        url: string;
        raceName: string;
        Circuit: Circuit;
        date: string;
        time: string;
        Laps: Lap[];
    } | null;

    // Get lapTime year 2021, race 5, lap 10
    lapTimes.getLapTime(2021, 5, 10).then((lapTime) => {
        console.log(lapTime);
    });

### Pit stops

return pitstops object :

    type PitStops = {
        season: string;
        round: string;
        url: string;
        raceName: string;
        Circuit: Circuit;
        date: string;
        time: string;
        PitStops: PitStop[];
    } | null;

    type PitStop = {
        driverId: string;
        lap: string;
        stop: string;
        time: string;
        duration: string;
    };

    // Get pitStops year 2021, race 5
    pitStops.getPitStopsByRaceYear(2021, 5).then((pitStopsList) => {
        console.log(pitStopsList);
    });

    // Get pitStops year 2021, race 5, pitstop number 1
    pitStops.getPitStopsByPitStopNumber(2021, 5, 1).then((pitStopsList) => {
        console.log(pitStopsList);
    });

### Standings

returning objects or types like :

    DriverStanding = {
        position: string;
        positionText: string;
        points: string;
        wins: string;
        Driver: Driver;
        Constructors: Constructor[];
    };

    ConstructorStanding = {
        position: string;
        positionText: string;
        points: string;
        wins: string;
        Constructor: Constructor;
    };

    DriverWinners = {
        season: string;
        round: string;
        DriverStandings: DriverStanding[];
    } | null;

    ConstructorWinners = {
        season: string;
        round: string;
        ConstructorStandings: ConstructorStanding[];
    } | null;


    // Get driver standings for 2020
    standings.getDriverStandingsByYear(2020).then((standingList) => {
        console.log(standingList);
    });

    // Get driver standings for race 6 of 2021
    standings.getDriverStandingsByYearRace(2021, 6).then((standingList) => {
        console.log(standingList);
    });

    // Get current driver standing
    standings.getCurrentDriverStanding().then((standingList) => {
        console.log(standingList);
    });

    // Get constructor standings for race 6 of 2021
    standings.getConstructorStandingsByYearRace(2021, 6).then((standingList) => {
        console.log(standingList);
    });

    // Get constructor standings for 2020
    standings.getConstructorStandingsByYear(2020).then((standingList) => {
        console.log(standingList);
    });

    // Get current constructor standing
    standings.getCurrentConstructorStanding().then((standingList) => {
        console.log(standingList);
    });

    // Get all winners of drivers' championships
    standings.getAllChampionshipDriverWinners().then((standingList) => {
        console.log(standingList);
    });

    // Get all winners of constructor' championships
    standings.getAllChampionshipConstructorWinners().then((standingList) => {
        console.log(standingList);
    });

    // Get driver standings by specifying the driver
    standings.getStandingsByDriver("alonso").then((standingList) => {
        console.log(standingList);
    });

    // Get constructor standings by specifying the constructor
    standings.getStandingsByConstructor("mercedes").then((standingList) => {
        console.log(standingList);
    });
