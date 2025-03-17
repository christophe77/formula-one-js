import axiosInstance from '../../utils/axiosInstance.js';
import Qualifying from '../../types/qualifyings/index.js';

const getQualifyingsByYearRace = async (
	year: number,
	round: number,
): Promise<Qualifying | null> => {
	try {
		const response = await axiosInstance.get(
			`${year}/${round}/qualifying.json`,
		);
		if (response.status === 200) {
			const qualifyingsList = response.data.MRData.RaceTable.Races[0];
			return qualifyingsList || null;
		}
		return null;
	} catch {
		return null;
	}
};

const getLatestQualifying = async (): Promise<Qualifying | null> => {
	try {
		const response = await axiosInstance.get(`current/last/qualifying.json`);
		if (response.status === 200) {
			const qualifyingsList = response.data.MRData.RaceTable.Races[0];
			return qualifyingsList || null;
		}
		return null;
	} catch {
		return null;
	}
};

const qualifyings = {
	getQualifyingsByYearRace,
	getLatestQualifying,
};
export default qualifyings;
