import { Season, SeasonOptions } from "../../types/seasons";
declare const seasons: {
    getAllSeasons: (limit: number) => Promise<Season[]>;
    getAllSeasonsAdvanced: (options: SeasonOptions) => Promise<Season[]>;
};
export default seasons;
