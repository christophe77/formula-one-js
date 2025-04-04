import Driver from "../drivers/index.js";
import Constructor from "../constructors/index.js";
import Circuit from "../circuits/index.js";
type Result = {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    Results: [
        {
            number: string;
            position: string;
            positionText: string;
            points: string;
            Driver: Driver;
            Constructor: Constructor;
            grid: string;
            laps: string;
            status: string;
            Time: {
                millis: string;
                time: string;
            };
            FastestLap: {
                rank: string;
                lap: string;
                Time: {
                    time: string;
                };
                AverageSpeed: {
                    units: string;
                    speed: string;
                };
            };
        }
    ];
};
export default Result;
//# sourceMappingURL=index.d.ts.map