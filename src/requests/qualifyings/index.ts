import axiosInstance from '../../utils/axiosInstance';
import Qualifying from '../../types/qualifyings';

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

const qualifyings = {
	getQualifyingsByYearRace,
};
export default qualifyings;
