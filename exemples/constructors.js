const foaw = require("../dist/cjs");
const { constructors } = foaw.requests();

// Get all constructors with limit at 10 constructors
constructors.getAllConstructors(10).then((constructorList) => {
  console.log(constructorList);
});

// Get all constructors by year
constructors.getConstructorsByYear(2021).then((constructorList) => {
  console.log(constructorList);
});

// Get all constructors by year race (ex : year 2021, round 10)
constructors.getConstructorsByRaceYear(2021, 10).then((constructorList) => {
  console.log(constructorList);
});

// Get constructor information by constructorId
constructors.getConstructorInformations("red_bull").then((constructor) => {
  console.log(constructor);
});
