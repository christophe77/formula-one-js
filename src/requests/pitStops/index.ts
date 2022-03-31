import axiosInstance from "../../utils/axiosInstance";
import PitStops from "../../types/pitStops";

const getPitStopsByRaceYear = async (
  year: number,
  round: number
): Promise<PitStops> => {
  try {
    const response = await axiosInstance.get(`${year}/${round}/pitstops.json`);
    if (response.status === 200) {
      const lapTime = response.data.MRData.RaceTable.Races[0];
      return lapTime || null;
    }
    return null;
  } catch {
    return null;
  }
};
const getPitStopsByPitStopNumber = async (
    year: number,
    round: number,
    pitStopNumber:number
  ): Promise<PitStops> => {
    try {
      const response = await axiosInstance.get(`${year}/${round}/pitstops/${pitStopNumber}.json`);
      if (response.status === 200) {
        const lapTime = response.data.MRData.RaceTable.Races[0];
        return lapTime || null;
      }
      return null;
    } catch {
      return null;
    }
  };

const pitStops = {
  getPitStopsByRaceYear,
  getPitStopsByPitStopNumber
};
export default pitStops;
