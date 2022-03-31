import Schedule from "../../types/schedule";
declare const schedule: {
    getScheduleByYear: (year: number) => Promise<Schedule[]>;
    getScheduleByYearRace: (year: number, round: number) => Promise<Schedule[]>;
    getCurrentSchedule: () => Promise<Schedule[]>;
};
export default schedule;
