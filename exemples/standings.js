const f1js = require("../dist/cjs");
const { standings } = f1js.requests();

// Get driver standings for 2020
standings.getDriverStandingsByYear(2020).then((standingList) => {
  console.log(standingList);
});

// Get driver standings for race 6 of 2021
standings.getDriverStandingsByYearRace(2021, 6).then((standingList) => {
  console.log(standingList);
});

// Get current driver standing
standings.getCurrentDriverStanding().then((standingList) => {
  console.log(standingList);
});

// Get constructor standings for race 6 of 2021
standings.getConstructorStandingsByYearRace(2021, 6).then((standingList) => {
  console.log(standingList);
});

// Get constructor standings for 2020
standings.getConstructorStandingsByYear(2020).then((standingList) => {
  console.log(standingList);
});

// Get current constructor standing
standings.getCurrentConstructorStanding().then((standingList) => {
  console.log(standingList);
});

// Get all winners of drivers' championships
standings.getAllChampionshipDriverWinners().then((standingList) => {
  console.log(standingList);
});

// Get all winners of constructor' championships
standings.getAllChampionshipConstructorWinners().then((standingList) => {
  console.log(standingList);
});

// Get driver standings by specifying the driver
standings.getStandingsByDriver("alonso").then((standingList) => {
  console.log(standingList);
});

// Get constructor standings by specifying the constructor
standings.getStandingsByConstructor("mercedes").then((standingList) => {
  console.log(standingList);
});
