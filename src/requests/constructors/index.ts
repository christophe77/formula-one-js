import axiosInstance from '../../utils/axiosInstance.js';
import Constructor from '../../types/constructors/index.js';

const emptyConstructor = {
	constructorId: '',
	url: '',
	name: '',
	nationality: '',
};

const getAllConstructors = async (limit: number): Promise<Constructor[]> => {
	try {
		const response = await axiosInstance.get(
			`constructors.json?limit=${limit}`,
		);
		if (response.status === 200) {
			const constructorList =
				response.data.MRData.ConstructorTable.Constructors;
			return constructorList || [];
		}
		return [];
	} catch {
		return [];
	}
};
const getConstructorsByYear = async (year: number): Promise<Constructor[]> => {
	try {
		const response = await axiosInstance.get(`${year}/constructors.json`);
		if (response.status === 200) {
			const constructorList =
				response.data.MRData.ConstructorTable.Constructors;
			return constructorList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getConstructorsByRaceYear = async (
	year: number,
	round: number,
): Promise<Constructor[]> => {
	try {
		const response = await axiosInstance.get(
			`${year}/${round}/constructors.json`,
		);
		if (response.status === 200) {
			const constructorList =
				response.data.MRData.ConstructorTable.Constructors;
			return constructorList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getConstructorInformations = async (
	constructorId: string,
): Promise<Constructor> => {
	try {
		const response = await axiosInstance.get(
			`constructors/${constructorId}.json`,
		);
		if (response.status === 200) {
			const constructor = response.data.MRData.ConstructorTable.Constructors[0];
			return constructor || { ...emptyConstructor, constructorId };
		}
		return { ...emptyConstructor, constructorId };
	} catch {
		return { ...emptyConstructor, constructorId };
	}
};

const constructors = {
	getAllConstructors,
	getConstructorsByYear,
	getConstructorsByRaceYear,
	getConstructorInformations,
};

export default constructors;
