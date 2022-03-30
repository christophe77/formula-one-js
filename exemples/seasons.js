const foaw = require("../dist/cjs");
const { seasons } = foaw.requests();

// Get all seasons with limit at 5 seasons
seasons.getAllSeasons(5).then((seasonList) => {
  console.log(seasonList);
});

// Get all seasons with advanced search
const seasonOptions = {
  circuits: "",
  constructors: "renault",
  drivers: "alonso",
  grid: "",
  results: "",
  driverStandings: "1",
  constructorStandings: "",
  fastest: "",
  status: "",
};
seasons.getAllSeasonsAdvanced(seasonOptions).then((seasonList) => {
  console.log(seasonList);
});
