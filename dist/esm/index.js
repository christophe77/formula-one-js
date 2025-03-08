import drivers from "./requests/drivers";
import constructors from "./requests/constructors";
import circuits from "./requests/circuits";
import seasons from "./requests/seasons/seasons";
import results from "./requests/results";
import qualifyings from "./requests/qualifyings";
import schedule from "./requests/schedule";
import lapTimes from "./requests/lapTimes";
import pitStops from "./requests/pitStops";
import standings from "./requests/standings";
import finishingStatus from "./requests/finishingStatus";
export var requests = function () {
    return {
        drivers: drivers,
        constructors: constructors,
        circuits: circuits,
        seasons: seasons,
        results: results,
        qualifyings: qualifyings,
        schedule: schedule,
        lapTimes: lapTimes,
        pitStops: pitStops,
        standings: standings,
        finishingStatus: finishingStatus
    };
};
//# sourceMappingURL=index.js.map