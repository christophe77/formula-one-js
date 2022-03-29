import axiosInstance from "../../utils/axiosInstance";
import Driver from "../../types/drivers";

const emptyDriver = {
  driverId: "",
  code: "",
  url: "",
  givenName: "",
  familyName: "",
  dateOfBirth: "",
  nationality: "",
};

const getAllDrivers = async (limit: number): Promise<Driver[]> => {
  try {
    const response = await axiosInstance.get(`drivers.json?limit=${limit}`);
    if (response.status === 200) {
      const driverList = response.data.MRData.DriverTable.Drivers;
      return driverList || [];
    }
    return [];
  } catch {
    return [];
  }
};
const getDriversByYear = async (year: number): Promise<Driver[]> => {
  try {
    const response = await axiosInstance.get(`${year}/drivers.json`);
    if (response.status === 200) {
      const driverList = response.data.MRData.DriverTable.Drivers;
      return driverList || [];
    }
    return [];
  } catch {
    return [];
  }
};
const getDriversByYearRace = async (
  year: number,
  round: number
): Promise<Driver[]> => {
  try {
    const response = await axiosInstance.get(`${year}/${round}/drivers.json`);
    if (response.status === 200) {
      const driverList = response.data.MRData.DriverTable.Drivers;
      return driverList || [];
    }
    return [];
  } catch {
    return [];
  }
};
const getDriverInformations = async (driverId: string): Promise<Driver> => {
  try {
    const response = await axiosInstance.get(`drivers/${driverId}.json`);
    if (response.status === 200) {
      const driver = response.data.MRData.DriverTable.Drivers[0];
      return driver || { ...emptyDriver, driverId };
    }
    return { ...emptyDriver, driverId };
  } catch {
    return { ...emptyDriver, driverId };
  }
};

const drivers = {
  getAllDrivers,
  getDriversByYear,
  getDriversByYearRace,
  getDriverInformations,
};
export default drivers;
