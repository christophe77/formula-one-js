import Driver from "../drivers/index.js";
import Constructor from "../constructors/index.js";
import Circuit from "../circuits/index.js";
type Qualifying = {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    QualifyingResults: [
        {
            number: string;
            position: string;
            Driver: Driver;
            Constructor: Constructor;
            Q1: string;
            Q2: string;
            Q3: string;
        }
    ];
};
export default Qualifying;
//# sourceMappingURL=index.d.ts.map