import PitStops from '../../types/pitStops/index.js';
declare const pitStops: {
    getPitStopsByRaceYear: (year: number, round: number) => Promise<PitStops>;
    getPitStopsByPitStopNumber: (year: number, round: number, pitStopNumber: number) => Promise<PitStops>;
};
export default pitStops;
//# sourceMappingURL=index.d.ts.map