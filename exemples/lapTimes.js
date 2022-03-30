const foaw = require("../dist/cjs");
const { lapTimes } = foaw.requests();

// Get lapTime year 2021, race 5, lap 10
lapTimes.getLapTime(2021, 5, 10).then((lapTime) => {
  console.log(lapTime);
});
