import axiosInstance from '../../utils/axiosInstance.js';
const getPitStopsByRaceYear = async (year, round) => {
    try {
        const response = await axiosInstance.get(`${year}/${round}/pitstops.json`);
        if (response.status === 200) {
            const lapTime = response.data.MRData.RaceTable.Races[0];
            return lapTime || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const getPitStopsByPitStopNumber = async (year, round, pitStopNumber) => {
    try {
        const response = await axiosInstance.get(`${year}/${round}/pitstops/${pitStopNumber}.json`);
        if (response.status === 200) {
            const lapTime = response.data.MRData.RaceTable.Races[0];
            return lapTime || null;
        }
        return null;
    }
    catch {
        return null;
    }
};
const pitStops = {
    getPitStopsByRaceYear,
    getPitStopsByPitStopNumber,
};
export default pitStops;
//# sourceMappingURL=index.js.map