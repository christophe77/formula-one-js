import Result from '../../types/results';
declare const results: {
    getResultsByYearRace: (year: number, round: number) => Promise<Result[]>;
    getLatestRaceResults: () => Promise<Result[] | string>;
};
export default results;
