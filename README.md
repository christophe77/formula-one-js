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

    drivers.getDriversByYear(2021).then((driverList) => {
    console.log(driverList);
    });

    drivers.getDriversByYearRace(2021, 10).then((driverList) => {
        console.log(driverList);
    });

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

    constructors.getConstructorsByYear(2021).then((constructorList) => {
        console.log(constructorList);
    });

    constructors.getConstructorsByRaceYear(2021, 10).then((constructorList) => {
        console.log(constructorList);
    });

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

    circuits.getCircuitsByYear(2022).then((circuitList) => {
        console.log(circuitList);
    });

    circuits.getCircuitsByYearRace(2022, 10).then((circuitList) => {
        console.log(circuitList);
    });

    circuits.getCircuitInformations("suzuka").then((circuit) => {
        console.log(circuit);
    });
