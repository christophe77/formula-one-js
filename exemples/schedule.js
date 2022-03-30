const foaw = require("../dist/cjs");
const { schedule } = foaw.requests();

// Get schedule by year
schedule.getScheduleByYear(2021).then((scheduleList) => {
  console.log(scheduleList);
});
