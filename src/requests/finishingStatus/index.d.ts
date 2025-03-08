import FinishingStatus from '../../types/finishingStatus/index.js';
declare const finishingStatus: {
    getFinishingStatusCodes: () => Promise<FinishingStatus[]>;
    getFinishingStatusForSpecificYear: (year: number) => Promise<FinishingStatus[]>;
    getFinishingStatusForSpecificYearRace: (year: number, round: number) => Promise<FinishingStatus[]>;
};
export default finishingStatus;
//# sourceMappingURL=index.d.ts.map