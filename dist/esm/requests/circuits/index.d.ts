import Circuit from "../../types/circuits";
declare const circuits: {
    getAllCircuits: (limit: number) => Promise<Circuit[]>;
    getCircuitsByYear: (year: number) => Promise<Circuit[]>;
    getCircuitsByYearRace: (year: number, round: number) => Promise<Circuit[]>;
    getCircuitInformations: (circuitId: string) => Promise<Circuit>;
};
export default circuits;
