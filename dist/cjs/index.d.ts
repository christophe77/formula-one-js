export declare const requests: () => {
    drivers: {
        getAllDrivers: (limit: number) => Promise<import("./types/drivers").default[]>;
        getDriversByYear: (year: number) => Promise<import("./types/drivers").default[]>;
        getDriversByYearRace: (year: number, round: number) => Promise<import("./types/drivers").default[]>;
        getDriverInformations: (driverId: string) => Promise<import("./types/drivers").default>;
    };
    constructors: {
        getAllConstructors: (limit: number) => Promise<import("./types/constructors").default[]>;
        getConstructorsByYear: (year: number) => Promise<import("./types/constructors").default[]>;
        getConstructorsByRaceYear: (year: number, round: number) => Promise<import("./types/constructors").default[]>;
        getConstructorInformations: (constructorId: string) => Promise<import("./types/constructors").default>;
    };
    circuits: {
        getAllCircuits: (limit: number) => Promise<import("./types/circuits").default[]>;
        getCircuitsByYear: (year: number) => Promise<import("./types/circuits").default[]>;
        getCircuitsByYearRace: (year: number, round: number) => Promise<import("./types/circuits").default[]>;
        getCircuitInformations: (circuitId: string) => Promise<import("./types/circuits").default>;
    };
    seasons: {
        getAllSeasons: (limit: number) => Promise<import("./types/seasons").Season[]>;
        getAllSeasonsAdvanced: (options: import("./types/seasons").SeasonOptions) => Promise<import("./types/seasons").Season[]>;
    };
    results: {
        getResultsByYearRace: (year: number, round: number) => Promise<import("./types/results").default[]>;
        getLatestRaceResults: () => Promise<import("./types/results").default[] | string>;
    };
    qualifyings: {
        getQualifyingsByYearRace: (year: number, round: number) => Promise<import("./types/qualifyings").default[]>;
    };
    schedule: {
        getScheduleByYear: (year: number) => Promise<import("./types/schedule").default[]>;
        getScheduleByYearRace: (year: number, round: number) => Promise<import("./types/schedule").default[]>;
        getCurrentSchedule: () => Promise<import("./types/schedule").default[]>;
    };
    lapTimes: {
        getLapTime: (year: number, round: number, lapNumber: number) => Promise<import("./types/lapTimes").default>;
    };
    pitStops: {
        getPitStopsByRaceYear: (year: number, round: number) => Promise<import("./types/pitStops").default>;
        getPitStopsByPitStopNumber: (year: number, round: number, pitStopNumber: number) => Promise<import("./types/pitStops").default>;
    };
    standings: {
        getDriverStandingsByYearRace: (year: number, round: number) => Promise<import("./types/standings").DriverStanding[]>;
        getDriverStandingsByYear: (year: number) => Promise<import("./types/standings").DriverStanding[]>;
        getConstructorStandingsByYearRace: (year: number, round: number) => Promise<import("./types/standings").ConstructorStanding[]>;
        getConstructorStandingsByYear: (year: number) => Promise<import("./types/standings").ConstructorStanding[]>;
        getCurrentDriverStanding: () => Promise<import("./types/standings").DriverStanding[]>;
        getCurrentConstructorStanding: () => Promise<import("./types/standings").ConstructorStanding[]>;
        getAllChampionshipDriverWinners: () => Promise<import("./types/standings").DriverWinners[]>;
        getAllChampionshipConstructorWinners: () => Promise<import("./types/standings").ConstructorWinners[]>;
        getStandingsByDriver: (driverId: string) => Promise<import("./types/standings").DriverWinners>;
        getStandingsByConstructor: (constructorId: string) => Promise<import("./types/standings").ConstructorWinners>;
    };
    finishingStatus: {
        getFinishingStatusCodes: () => Promise<import("./types/finishingStatus").default[]>;
        getFinishingStatusForSpecificYear: (year: number) => Promise<import("./types/finishingStatus").default[]>;
        getFinishingStatusForSpecificYearRace: (year: number, round: number) => Promise<import("./types/finishingStatus").default[]>;
    };
};
