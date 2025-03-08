import PitStops from '../../types/pitStops';
declare const pitStops: {
    getPitStopsByRaceYear: (year: number, round: number) => Promise<PitStops>;
    getPitStopsByPitStopNumber: (year: number, round: number, pitStopNumber: number) => Promise<PitStops>;
};
export default pitStops;
