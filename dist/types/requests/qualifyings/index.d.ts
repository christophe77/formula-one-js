import Qualifying from '../../types/qualifyings';
declare const qualifyings: {
    getQualifyingsByYearRace: (year: number, round: number) => Promise<Qualifying | null>;
};
export default qualifyings;
