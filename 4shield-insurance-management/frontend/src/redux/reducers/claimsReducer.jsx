import {
	FETCH_CLAIMS_REQUEST,
	FETCH_CLAIMS_SUCCESS,
	FETCH_CLAIMS_FAILURE,
} from "../../config/constants";

const initialState = {
	claims: [],
	loading: false,
	error: null,
};

const claimsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CLAIMS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_CLAIMS_SUCCESS:
			return {
				...state,
				loading: false,
				claims: action.payload,
			};
		case FETCH_CLAIMS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default claimsReducer;
