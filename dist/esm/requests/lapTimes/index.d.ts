import LapTime from "../../types/lapTimes";
declare const lapTimes: {
    getLapTime: (year: number, round: number, lapNumber: number) => Promise<LapTime>;
};
export default lapTimes;
