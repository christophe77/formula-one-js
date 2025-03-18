import Qualifying from '../../types/qualifyings/index.js';
declare const qualifyings: {
    getQualifyingsByYearRace: (year: number, round: number) => Promise<Qualifying | null>;
    getLatestQualifying: () => Promise<Qualifying | null>;
};
export default qualifyings;
//# sourceMappingURL=index.d.ts.map