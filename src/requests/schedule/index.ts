import axiosInstance from '../../utils/axiosInstance.js';
import Schedule from '../../types/schedule/index.js';

const getScheduleByYear = async (year: number): Promise<Schedule[]> => {
	try {
		const response = await axiosInstance.get(`${year}.json`);
		if (response.status === 200) {
			const qualifyingsList = response.data.MRData.RaceTable.Races;
			return qualifyingsList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getScheduleByYearRace = async (
	year: number,
	round: number,
): Promise<Schedule[]> => {
	try {
		const response = await axiosInstance.get(`${year}/${round}.json`);
		if (response.status === 200) {
			const qualifyingsList = response.data.MRData.RaceTable.Races;
			return qualifyingsList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getCurrentSchedule = async (): Promise<Schedule[]> => {
	try {
		const response = await axiosInstance.get(`current.json`);
		if (response.status === 200) {
			const qualifyingsList = response.data.MRData.RaceTable.Races;
			return qualifyingsList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const schedule = {
	getScheduleByYear,
	getScheduleByYearRace,
	getCurrentSchedule,
};
export default schedule;
