import axiosInstance from '../../utils/axiosInstance.js';
import Circuit from '../../types/circuits/index.js';

const emptyCircuit = {
	circuitId: '',
	url: '',
	circuitName: '',
	Location: {
		lat: '',
		long: '',
		locality: '',
		country: '',
	},
};

const getAllCircuits = async (limit: number): Promise<Circuit[]> => {
	try {
		const response = await axiosInstance.get(`circuits.json?limit=${limit}`);
		if (response.status === 200) {
			const circuitList = response.data.MRData.CircuitTable.Circuits;
			return circuitList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getCircuitsByYear = async (year: number): Promise<Circuit[]> => {
	try {
		const response = await axiosInstance.get(`${year}/circuits.json`);
		if (response.status === 200) {
			const circuitList = response.data.MRData.CircuitTable.Circuits;
			return circuitList || [];
		}
		return [];
	} catch {
		return [];
	}
};

const getCircuitsByYearRace = async (
	year: number,
	round: number,
): Promise<Circuit[]> => {
	try {
		const response = await axiosInstance.get(`${year}/${round}/circuits.json`);
		if (response.status === 200) {
			const circuitList = response.data.MRData.CircuitTable.Circuits;
			return circuitList || [];
		}
		return [];
	} catch {
		return [];
	}
};
const getCircuitInformations = async (circuitId: string): Promise<Circuit> => {
	try {
		const response = await axiosInstance.get(`circuits/${circuitId}.json`);
		if (response.status === 200) {
			const circuitList = response.data.MRData.CircuitTable.Circuits[0];
			return circuitList || { ...emptyCircuit, circuitId };
		}
		return { ...emptyCircuit, circuitId };
	} catch {
		return { ...emptyCircuit, circuitId };
	}
};

const circuits = {
	getAllCircuits,
	getCircuitsByYear,
	getCircuitsByYearRace,
	getCircuitInformations,
};

export default circuits;
