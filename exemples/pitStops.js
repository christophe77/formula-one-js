const foaw = require("../dist/cjs");
const { pitStops } = foaw.requests();

// Get pitStops year 2021, race 5
pitStops.getPitStopsByRaceYear(2021, 5).then((pitStopsList) => {
  console.log(pitStopsList);
});

// Get pitStops year 2021, race 5, pitstop number 1
pitStops.getPitStopsByPitStopNumber(2021, 5, 1).then((pitStopsList) => {
    console.log(pitStopsList);
});
