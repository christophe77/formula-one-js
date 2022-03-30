import axiosInstance from "../../utils/axiosInstance";
import LapTime from "../../types/lapTimes";

const getLapTime = async (
  year: number,
  round: number,
  lapNumber: number
): Promise<LapTime> => {
  try {
    const response = await axiosInstance.get(
      `${year}/${round}/laps/${lapNumber}.json`
    );
    if (response.status === 200) {
      const lapTime = response.data.MRData.RaceTable.Races[0];
      return lapTime || null;
    }
    return null;
  } catch {
    return null;
  }
};

const lapTimes = {
  getLapTime,
};
export default lapTimes;
