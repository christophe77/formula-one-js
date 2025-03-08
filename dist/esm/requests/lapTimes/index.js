import axiosInstance from '../../utils/axiosInstance.js';
const getLapTime = async (year, round, lapNumber) => {
    try {
        const response = await axiosInstance.get(`${year}/${round}/laps/${lapNumber}.json`);
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
const lapTimes = {
    getLapTime,
};
export default lapTimes;
//# sourceMappingURL=index.js.map