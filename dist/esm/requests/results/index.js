import axiosInstance from '../../utils/axiosInstance';
const getResultsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance.get(`${year}/${round}/results.json`);
        if (response.status === 200) {
            const resultList = response.data.MRData.RaceTable.Races[0];
            return resultList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const getLatestRaceResults = async () => {
    try {
        const response = await axiosInstance.get(`current/last/results.json`);
        if (response.status === 200) {
            const resultList = response.data.MRData.RaceTable.Races[0];
            return resultList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const results = {
    getResultsByYearRace,
    getLatestRaceResults,
};
export default results;
