# formula-one-api-wrapper-js

Package to access formula one datas on both CJS and ESM apps.

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

## Seasons

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
