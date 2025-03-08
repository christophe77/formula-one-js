import { Season, SeasonOptions } from '../../types/seasons/index.js';
declare const seasons: {
    getAllSeasons: (limit: number) => Promise<Season[]>;
    getAllSeasonsAdvanced: (options: SeasonOptions) => Promise<Season[]>;
};
export default seasons;
//# sourceMappingURL=index.d.ts.map