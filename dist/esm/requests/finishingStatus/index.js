import axiosInstance from '../../utils/axiosInstance.js';
const getFinishingStatusCodes = async () => {
    try {
        const response = await axiosInstance.get(`status.json`);
        if (response.status === 200) {
            const statusTable = response.data.MRData.StatusTable.Status;
            return statusTable || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getFinishingStatusForSpecificYear = async (year) => {
    try {
        const response = await axiosInstance.get(`${year}/status.json`);
        if (response.status === 200) {
            const statusTable = response.data.MRData.StatusTable.Status;
            return statusTable || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const getFinishingStatusForSpecificYearRace = async (year, round) => {
    try {
        const response = await axiosInstance.get(`${year}/${round}/status.json`);
        if (response.status === 200) {
            const statusTable = response.data.MRData.StatusTable.Status;
            return statusTable || [];
        }
        return [];
    }
    catch {
        return [];
    }
};
const finishingStatus = {
    getFinishingStatusCodes,
    getFinishingStatusForSpecificYear,
    getFinishingStatusForSpecificYearRace,
};
export default finishingStatus;
//# sourceMappingURL=index.js.map