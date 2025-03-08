import drivers from "./requests/drivers/index.js";
import constructors from "./requests/constructors/index.js";
import circuits from "./requests/circuits/index.js";
import seasons from "./requests/seasons/index.js";
import results from "./requests/results/index.js";
import qualifyings from "./requests/qualifyings/index.js";
import schedule from "./requests/schedule/index.js";
import lapTimes from "./requests/lapTimes/index.js";
import pitStops from "./requests/pitStops/index.js";
import standings from "./requests/standings/index.js";
import finishingStatus from "./requests/finishingStatus/index.js";
export const requests = () => {
    return {
        drivers,
        constructors,
        circuits,
        seasons,
        results,
        qualifyings,
        schedule,
        lapTimes,
        pitStops,
        standings,
        finishingStatus
    };
};
//# sourceMappingURL=index.js.map