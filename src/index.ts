import drivers from "./requests/drivers";
import constructors from "./requests/constructors";
import circuits from "./requests/circuits";
import seasons from "./requests/seasons/seasons";
import results from "./requests/results";

export const requests = () => {
  return {
    drivers,
    constructors,
    circuits,
    seasons,
    results
  };
}
