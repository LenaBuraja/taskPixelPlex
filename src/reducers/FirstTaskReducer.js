import { createModule } from "redux-modules";

const DEFAULT_STATE = {
	list: [],
};

export default createModule({
	name: 'firstTask',
	initialState: DEFAULT_STATE,
	transformations: {
		add: {
			reducer: (state, { payload }) => ({
				...state,
				list: [...state.list, payload],
			}),
		},
		remove: {
			reducer: (state, { payload }) => ({
				...state,
				list: state.list.filter((_, index) => index !== payload),
			}),
		},
	},
});
