const f1js = require("../dist/cjs");
const { drivers } = f1js.requests();

// Get all drivers with limit at 10 drivers
drivers.getAllDrivers(10).then((driverList) => {
  console.log(driverList);
});

// Get all drivers by year
drivers.getDriversByYear(2021).then((driverList) => {
  console.log(driverList);
});

// Get all drivers by year race (ex : year 2021, round 10)
drivers.getDriversByYearRace(2021, 10).then((driverList) => {
  console.log(driverList);
});

// Get driver information by driverId
drivers.getDriverInformations("max_verstappen").then((driver) => {
  console.log(driver);
});
