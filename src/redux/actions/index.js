import 'whatwg-fetch';
export const TODO_REQ_START = 'TODO_REQ_START';
export const TODO_REQ_ERR = 'TODO_REQ_ERR';
export const TODO_REQ_SUCCESS = 'TODO_REQ_SUCCESS';

function TodoReqStart() {
	return {
		type: TODO_REQ_START
	};
};

function TodoReqErr(payload) {
	return {
		type: TODO_REQ_ERR,
		message: payload
	};
};

function TodoReqSuccess(res) {
	return {
		type: TODO_REQ_SUCCESS,
		payload: res
	};
};

export function doTodoReq(id) {
	return (dispatch, state) => {
		
		dispatch(TodoReqStart());
				return fetch('https://jsonplaceholder.typicode.com/todos', {
					mode: 'cors',
					method: "GET"
				})
				.then(res => res.json())
			.then(res => {
				if (typeof res === 'object') {
					console.log(res)
					//let data = JSON.parse(res);

					return dispatch(TodoReqSuccess(res));
				} else {
					console.log(res);
					return dispatch(TodoReqErr(res));
				}
			})

			.catch(error => dispatch(TodoReqErr(error)));
	};
};