import 'whatwg-fetch';
export const MARKCOMPLETE_REQ_START = 'MARKCOMPLETE_REQ_START';
export const MARKCOMPLETE_REQ_ERR = 'MARKCOMPLETE_REQ_ERR';
export const MARKCOMPLETE_REQ_SUCCESS = 'MARKCOMPLETE_REQ_SUCCESS';

function MarkCompleteReqStart() {
	return {
		type: MARKCOMPLETE_REQ_START
	};
};

function MarkCompleteReqErr(payload) {
	return {
		type: MARKCOMPLETE_REQ_ERR,
		message: payload
	};
};

function MarkCompleteReqSuccess(res) {
	return {
		type: MARKCOMPLETE_REQ_SUCCESS,
		payload: res
	};
};

export function doMarkCompleteReq(id) {

	
	return (dispatch, state) => {
	
		var obj={"id":id}
		dispatch(MarkCompleteReqSuccess(obj));
	
	};
};