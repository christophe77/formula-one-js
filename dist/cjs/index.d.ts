export declare const requests: () => {
    drivers: {
        getAllDrivers: (limit: number) => Promise<import("./types/drivers/index.js").default[]>;
        getDriversByYear: (year: number) => Promise<import("./types/drivers/index.js").default[]>;
        getDriversByYearRace: (year: number, round: number) => Promise<import("./types/drivers/index.js").default[]>;
        getDriverInformations: (driverId: string) => Promise<import("./types/drivers/index.js").default>;
    };
    constructors: {
        getAllConstructors: (limit: number) => Promise<import("./types/constructors/index.js").default[]>;
        getConstructorsByYear: (year: number) => Promise<import("./types/constructors/index.js").default[]>;
        getConstructorsByRaceYear: (year: number, round: number) => Promise<import("./types/constructors/index.js").default[]>;
        getConstructorInformations: (constructorId: string) => Promise<import("./types/constructors/index.js").default>;
    };
    circuits: {
        getAllCircuits: (limit: number) => Promise<import("./types/circuits/index.js").default[]>;
        getCircuitsByYear: (year: number) => Promise<import("./types/circuits/index.js").default[]>;
        getCircuitsByYearRace: (year: number, round: number) => Promise<import("./types/circuits/index.js").default[]>;
        getCircuitInformations: (circuitId: string) => Promise<import("./types/circuits/index.js").default>;
    };
    seasons: {
        getAllSeasons: (limit: number) => Promise<import("./types/seasons/index.js").Season[]>;
        getAllSeasonsAdvanced: (options: import("./types/seasons/index.js").SeasonOptions) => Promise<import("./types/seasons/index.js").Season[]>;
    };
    results: {
        getResultsByYearRace: (year: number, round: number) => Promise<import("./types/results/index.js").default | null>;
        getLatestRaceResults: () => Promise<import("./types/results/index.js").default | null>;
    };
    qualifyings: {
        getQualifyingsByYearRace: (year: number, round: number) => Promise<import("./types/qualifyings/index.js").default | null>;
        getLatestQualifying: () => Promise<import("./types/qualifyings/index.js").default | null>;
    };
    schedule: {
        getScheduleByYear: (year: number) => Promise<import("./types/schedule/index.js").default[]>;
        getScheduleByYearRace: (year: number, round: number) => Promise<import("./types/schedule/index.js").default[]>;
        getCurrentSchedule: () => Promise<import("./types/schedule/index.js").default[]>;
    };
    lapTimes: {
        getLapTime: (year: number, round: number, lapNumber: number) => Promise<import("./types/lapTimes/index.js").default>;
    };
    pitStops: {
        getPitStopsByRaceYear: (year: number, round: number) => Promise<import("./types/pitStops/index.js").default>;
        getPitStopsByPitStopNumber: (year: number, round: number, pitStopNumber: number) => Promise<import("./types/pitStops/index.js").default>;
    };
    standings: {
        getDriverStandingsByYearRace: (year: number, round: number) => Promise<import("./types/standings/index.js").DriverStanding[]>;
        getDriverStandingsByYear: (year: number) => Promise<import("./types/standings/index.js").DriverStanding[]>;
        getConstructorStandingsByYearRace: (year: number, round: number) => Promise<import("./types/standings/index.js").ConstructorStanding[]>;
        getConstructorStandingsByYear: (year: number) => Promise<import("./types/standings/index.js").ConstructorStanding[]>;
        getCurrentDriverStanding: () => Promise<import("./types/standings/index.js").DriverStanding[]>;
        getCurrentConstructorStanding: () => Promise<import("./types/standings/index.js").ConstructorStanding[]>;
        getAllChampionshipDriverWinners: () => Promise<import("./types/standings/index.js").DriverWinners[]>;
        getAllChampionshipConstructorWinners: () => Promise<import("./types/standings/index.js").ConstructorWinners[]>;
        getStandingsByDriver: (driverId: string) => Promise<import("./types/standings/index.js").DriverWinners>;
        getStandingsByConstructor: (constructorId: string) => Promise<import("./types/standings/index.js").ConstructorWinners>;
    };
    finishingStatus: {
        getFinishingStatusCodes: () => Promise<import("./types/finishingStatus/index.js").default[]>;
        getFinishingStatusForSpecificYear: (year: number) => Promise<import("./types/finishingStatus/index.js").default[]>;
        getFinishingStatusForSpecificYearRace: (year: number, round: number) => Promise<import("./types/finishingStatus/index.js").default[]>;
    };
};
//# sourceMappingURL=index.d.ts.map