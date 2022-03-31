import Circuit from "../circuits";
declare type Timing = {
    driverId: string;
    position: string;
    time: string;
};
declare type Lap = {
    number: string;
    Timings: Timing[];
};
declare type LapTime = {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    Laps: Lap[];
} | null;
export default LapTime;
