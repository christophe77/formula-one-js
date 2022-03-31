import { DriverStanding, ConstructorStanding, DriverWinners, ConstructorWinners } from "../../types/standings";
declare const standings: {
    getDriverStandingsByYearRace: (year: number, round: number) => Promise<DriverStanding[]>;
    getDriverStandingsByYear: (year: number, round: number) => Promise<DriverStanding[]>;
    getConstructorStandingsByYearRace: (year: number, round: number) => Promise<ConstructorStanding[]>;
    getConstructorStandingsByYear: (year: number) => Promise<ConstructorStanding[]>;
    getCurrentDriverStanding: () => Promise<DriverStanding[]>;
    getCurrentConstructorStanding: () => Promise<ConstructorStanding[]>;
    getAllChampionshipDriverWinners: () => Promise<DriverWinners[]>;
    getAllChampionshipConstructorWinners: () => Promise<ConstructorWinners[]>;
    getStandingsByDriver: (driverId: string) => Promise<DriverWinners>;
    getStandingsByConstructor: (constructorId: string) => Promise<ConstructorWinners>;
};
export default standings;
