const f1js = require("../dist/cjs");
const { schedule } = f1js.requests();

// Get schedule by year
schedule.getScheduleByYear(2021).then((scheduleList) => {
  console.log(scheduleList);
});

// Get schedule by race year
schedule.getScheduleByYear(2021, 10).then((scheduleList) => {
  console.log(scheduleList);
});

// Get current schedule
schedule.getCurrentSchedule().then((scheduleList) => {
  console.log(scheduleList);
});
