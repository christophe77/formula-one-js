import Circuit from "../circuits/index.js";

type Schedule = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: { date: string };
  SecondPractice: { date: string };
  ThirdPractice: { date: string };
  Qualifying: { date: string };
};

export default Schedule;
