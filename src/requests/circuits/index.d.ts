import Circuit from '../../types/circuits/index.js';
declare const circuits: {
    getAllCircuits: (limit: number) => Promise<Circuit[]>;
    getCircuitsByYear: (year: number) => Promise<Circuit[]>;
    getCircuitsByYearRace: (year: number, round: number) => Promise<Circuit[]>;
    getCircuitInformations: (circuitId: string) => Promise<Circuit>;
};
export default circuits;
//# sourceMappingURL=index.d.ts.map