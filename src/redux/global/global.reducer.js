const initialState = {
	isLoading: false,
};

export const GlobalActionTypes = {
	setLoading: 'SET_LOADING',
};

export function global(state = initialState, action) {
	switch (action.type) {
	case GlobalActionTypes.setLoading:
		return {
			...state,
			isLoading: action.data.isLoading,
		};
	default:
		return state;
	}
}
