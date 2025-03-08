import axiosInstance from '../../utils/axiosInstance.js';
import { Season, SeasonOptions } from '../../types/seasons/index.js';

const getAllSeasons = async (limit: number): Promise<Season[]> => {
	try {
		const response = await axiosInstance.get(`seasons.json?limit=${limit}`);
		if (response.status === 200) {
			const seasonsList = response.data.MRData.SeasonTable.Seasons;
			return seasonsList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getAllSeasonsAdvanced = async (
	options: SeasonOptions,
): Promise<Season[]> => {
	let advancedOptions = '';
	for (const [key, value] of Object.entries(options)) {
		if (value && value !== '') {
			advancedOptions = `${advancedOptions}${key}/${value}/`;
		}
	}
	try {
		const response = await axiosInstance.get(`${advancedOptions}seasons.json`);
		if (response.status === 200) {
			const seasonsList = response.data.MRData.SeasonTable.Seasons;
			return seasonsList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const seasons = {
	getAllSeasons,
	getAllSeasonsAdvanced,
};
export default seasons;
