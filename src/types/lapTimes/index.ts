import Circuit from "../circuits";
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

export default LapTime;
