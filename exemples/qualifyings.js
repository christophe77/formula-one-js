const f1js = require("../dist/cjs");
const { qualifyings } = f1js.requests();

// Get qualifyings by year race (ex : year 2021, round 10)
qualifyings.getQualifyingsByYearRace(2021, 10).then((qualifyingList) => {
  console.log(qualifyingList);
});
