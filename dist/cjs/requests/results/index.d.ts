import Result from '../../types/results';
declare const results: {
    getResultsByYearRace: (year: number, round: number) => Promise<Result | null>;
    getLatestRaceResults: () => Promise<Result[] | null>;
};
export default results;
