import Driver from "../drivers";
import Constructor from "../constructors";
import Circuit from "../circuits";

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
