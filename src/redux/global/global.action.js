import { GlobalActionTypes } from './global.reducer.js';

export default function setLoadingStatus(data) {
	return {
		type: GlobalActionTypes.setLoading,
		isLoading: data.isLoading,
	};
}
