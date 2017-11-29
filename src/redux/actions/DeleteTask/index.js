import 'whatwg-fetch';
export const DELETE_REQ_START = 'DELETE_REQ_START';
export const DELETE_REQ_ERR = 'DELETE_REQ_ERR';
export const DELETE_REQ_SUCCESS = 'DELETE_REQ_SUCCESS';

function DeleteReqStart() {
	return {
		type: DELETE_REQ_START
	};
};

function DeleteReqErr(payload) {
	return {
		type: DELETE_REQ_ERR,
		message: payload
	};
};

function DeleteReqSuccess(res) {
	return {
		type: DELETE_REQ_SUCCESS,
		payload: res
	};
};

export function doDeleteReq(id) {

	
	return (dispatch, state) => {
	
		var obj={"id":id}
		dispatch(DeleteReqSuccess(obj));
	
	};
};