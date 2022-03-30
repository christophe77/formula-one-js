const foaw = require("../dist/cjs");
const { circuits } = foaw.requests();

// Get all circuits with limit at 10 circuits
circuits.getAllCircuits(10).then((circuitList) => {
  console.log(circuitList);
});

// Get all circuits by year
circuits.getCircuitsByYear(2022).then((circuitList) => {
  console.log(circuitList);
});

// Get all circuits by year race (ex : year 2022, round 1)
circuits.getCircuitsByYearRace(2022, 1).then((circuitList) => {
  console.log(circuitList);
});

// Get circuit information by circuitId
circuits.getCircuitInformations("suzuka").then((circuit) => {
  console.log(circuit);
});
