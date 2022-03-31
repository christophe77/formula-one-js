import Constructor from "../constructors";
import Driver from "../drivers";
export declare type DriverStanding = {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
};
export declare type ConstructorStanding = {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: Constructor;
};
export declare type DriverWinners = {
    season: string;
    round: string;
    DriverStandings: DriverStanding[];
} | null;
export declare type ConstructorWinners = {
    season: string;
    round: string;
    ConstructorStandings: ConstructorStanding[];
} | null;
