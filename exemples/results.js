const foaw = require("../dist/cjs");
const { results } = foaw.requests();

// Get results for race 10 of 2021
results.getResultsByYearRace(2021, 10).then((resultList) => {
  console.log(resultList);
});

// Get latest race results
results.getLatestRaceResults().then((resultList) => {
  console.log(resultList);
});
