import {
	FETCH_CLAIMS_REQUEST,
	FETCH_CLAIMS_SUCCESS,
	FETCH_CLAIMS_FAILURE,
} from "../../config/constants";
import { getClaims } from "../../services/claimService";

/* Action when starting API call (loading) */
export const fetchClaimRequest = () => ({
	type: FETCH_CLAIMS_REQUEST,
});

/* Action when API call is successful */
export const fetchClaimsSuccess = (claims) => ({
	type: FETCH_CLAIMS_SUCCESS,
	payload: claims,
});

/* Action when API call fails (error) */
export const fetchClaimsFailure = (error) => ({
	type: FETCH_CLAIMS_FAILURE,
	payload: error,
});

/* Async function calls API and dispatches corresponding action */
export const fetchClaims = () => {
	return async (dispatch) => {
		dispatch(fetchClaimRequest());

		try {
			const response = await getClaims();
			dispatch(fetchClaimsSuccess(response.data));
		} catch (error) {
			dispatch(fetchClaimsFailure(error.message));
		}
	};
};
