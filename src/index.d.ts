export declare const requests: () => {
    drivers: {
        getAllDrivers: (limit: number) => Promise<import("./types/drivers/index.ts").default[]>;
        getDriversByYear: (year: number) => Promise<import("./types/drivers/index.ts").default[]>;
        getDriversByYearRace: (year: number, round: number) => Promise<import("./types/drivers/index.ts").default[]>;
        getDriverInformations: (driverId: string) => Promise<import("./types/drivers/index.ts").default>;
    };
    constructors: {
        getAllConstructors: (limit: number) => Promise<import("./types/constructors/index.ts").default[]>;
        getConstructorsByYear: (year: number) => Promise<import("./types/constructors/index.ts").default[]>;
        getConstructorsByRaceYear: (year: number, round: number) => Promise<import("./types/constructors/index.ts").default[]>;
        getConstructorInformations: (constructorId: string) => Promise<import("./types/constructors/index.ts").default>;
    };
    circuits: {
        getAllCircuits: (limit: number) => Promise<import("./types/circuits/index.ts").default[]>;
        getCircuitsByYear: (year: number) => Promise<import("./types/circuits/index.ts").default[]>;
        getCircuitsByYearRace: (year: number, round: number) => Promise<import("./types/circuits/index.ts").default[]>;
        getCircuitInformations: (circuitId: string) => Promise<import("./types/circuits/index.ts").default>;
    };
    seasons: {
        getAllSeasons: (limit: number) => Promise<import("./types/seasons/index.ts").Season[]>;
        getAllSeasonsAdvanced: (options: import("./types/seasons/index.ts").SeasonOptions) => Promise<import("./types/seasons/index.ts").Season[]>;
    };
    results: {
        getResultsByYearRace: (year: number, round: number) => Promise<import("./types/results/index.ts").default | null>;
        getLatestRaceResults: () => Promise<import("./types/results/index.ts").default[] | null>;
    };
    qualifyings: {
        getQualifyingsByYearRace: (year: number, round: number) => Promise<import("./types/qualifyings/index.ts").default | null>;
    };
    schedule: {
        getScheduleByYear: (year: number) => Promise<import("./types/schedule/index.ts").default[]>;
        getScheduleByYearRace: (year: number, round: number) => Promise<import("./types/schedule/index.ts").default[]>;
        getCurrentSchedule: () => Promise<import("./types/schedule/index.ts").default[]>;
    };
    lapTimes: {
        getLapTime: (year: number, round: number, lapNumber: number) => Promise<import("./types/lapTimes/index.ts").default>;
    };
    pitStops: {
        getPitStopsByRaceYear: (year: number, round: number) => Promise<import("./types/pitStops/index.ts").default>;
        getPitStopsByPitStopNumber: (year: number, round: number, pitStopNumber: number) => Promise<import("./types/pitStops/index.ts").default>;
    };
    standings: {
        getDriverStandingsByYearRace: (year: number, round: number) => Promise<import("./types/standings/index.ts").DriverStanding[]>;
        getDriverStandingsByYear: (year: number) => Promise<import("./types/standings/index.ts").DriverStanding[]>;
        getConstructorStandingsByYearRace: (year: number, round: number) => Promise<import("./types/standings/index.ts").ConstructorStanding[]>;
        getConstructorStandingsByYear: (year: number) => Promise<import("./types/standings/index.ts").ConstructorStanding[]>;
        getCurrentDriverStanding: () => Promise<import("./types/standings/index.ts").DriverStanding[]>;
        getCurrentConstructorStanding: () => Promise<import("./types/standings/index.ts").ConstructorStanding[]>;
        getAllChampionshipDriverWinners: () => Promise<import("./types/standings/index.ts").DriverWinners[]>;
        getAllChampionshipConstructorWinners: () => Promise<import("./types/standings/index.ts").ConstructorWinners[]>;
        getStandingsByDriver: (driverId: string) => Promise<import("./types/standings/index.ts").DriverWinners>;
        getStandingsByConstructor: (constructorId: string) => Promise<import("./types/standings/index.ts").ConstructorWinners>;
    };
    finishingStatus: {
        getFinishingStatusCodes: () => Promise<import("./types/finishingStatus/index.ts").default[]>;
        getFinishingStatusForSpecificYear: (year: number) => Promise<import("./types/finishingStatus/index.ts").default[]>;
        getFinishingStatusForSpecificYearRace: (year: number, round: number) => Promise<import("./types/finishingStatus/index.ts").default[]>;
    };
};
//# sourceMappingURL=index.d.ts.map