import Result from '../../types/results/index.js';
declare const results: {
    getResultsByYearRace: (year: number, round: number) => Promise<Result | null>;
    getLatestRaceResults: () => Promise<Result[] | null>;
};
export default results;
//# sourceMappingURL=index.d.ts.map