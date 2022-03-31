const f1js = require("../dist/cjs");
const { finishingStatus } = f1js.requests();

// Get finishing status codes
finishingStatus.getFinishingStatusCodes().then((statusTable) => {
  console.log(statusTable);
});

// Get finishing status codes for specific year
finishingStatus.getFinishingStatusForSpecificYear(2021).then((statusTable) => {
  console.log(statusTable);
});

// Get finishing status codes for specific year race
finishingStatus
  .getFinishingStatusForSpecificYear(2021, 5)
  .then((statusTable) => {
    console.log(statusTable);
  });
