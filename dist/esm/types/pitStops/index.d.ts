import Circuit from "../circuits";
declare type PitStop = {
    driverId: string;
    lap: string;
    stop: string;
    time: string;
    duration: string;
};
declare type PitStops = {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    PitStops: PitStop[];
} | null;
export default PitStops;
