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
    standings
  };
}
