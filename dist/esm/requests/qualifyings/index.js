import axiosInstance from '../../utils/axiosInstance.js';
const getQualifyingsByYearRace = async (year, round) => {
    try {
        const response = await axiosInstance.get(`${year}/${round}/qualifying.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races[0];
            return qualifyingsList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const getLatestQualifying = async () => {
    try {
        const response = await axiosInstance.get(`current/last/qualifying.json`);
        if (response.status === 200) {
            const qualifyingsList = response.data.MRData.RaceTable.Races[0];
            return qualifyingsList || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const qualifyings = {
    getQualifyingsByYearRace,
    getLatestQualifying,
};
export default qualifyings;
//# sourceMappingURL=index.js.map