import Constructor from '../../types/constructors';
declare const constructors: {
    getAllConstructors: (limit: number) => Promise<Constructor[]>;
    getConstructorsByYear: (year: number) => Promise<Constructor[]>;
    getConstructorsByRaceYear: (year: number, round: number) => Promise<Constructor[]>;
    getConstructorInformations: (constructorId: string) => Promise<Constructor>;
};
export default constructors;
