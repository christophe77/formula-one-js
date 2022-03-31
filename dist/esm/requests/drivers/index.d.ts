import Driver from "../../types/drivers";
declare const drivers: {
    getAllDrivers: (limit: number) => Promise<Driver[]>;
    getDriversByYear: (year: number) => Promise<Driver[]>;
    getDriversByYearRace: (year: number, round: number) => Promise<Driver[]>;
    getDriverInformations: (driverId: string) => Promise<Driver>;
};
export default drivers;
