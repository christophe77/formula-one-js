import axiosInstance from '../../utils/axiosInstance';
import Result from '../../types/results';

const getResultsByYearRace = async (
	year: number,
	round: number,
): Promise<Result[]> => {
	try {
		const response = await axiosInstance.get(`${year}/${round}/results.json`);
		if (response.status === 200) {
			const resultList = response.data.MRData.RaceTable.Races[0];
			return resultList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getLatestRaceResults = async (): Promise<Result[] | string> => {
	try {
		const response = await axiosInstance.get(`current/last/results.json`);
		if (response.status === 200) {
			const resultList = response.data.MRData.RaceTable.Races[0];
			return resultList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const results = {
	getResultsByYearRace,
	getLatestRaceResults,
};
export default results;
