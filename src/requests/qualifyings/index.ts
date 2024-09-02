import axiosInstance from '../../utils/axiosInstance';
import Qualifying from '../../types/qualifyings';

const getQualifyingsByYearRace = async (
	year: number,
	round: number,
): Promise<Qualifying[]> => {
	try {
		const response = await axiosInstance.get(
			`${year}/${round}/qualifying.json`,
		);
		if (response.status === 200) {
			const qualifyingsList = response.data.MRData.RaceTable.Races[0];
			return qualifyingsList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const qualifyings = {
	getQualifyingsByYearRace,
};
export default qualifyings;
