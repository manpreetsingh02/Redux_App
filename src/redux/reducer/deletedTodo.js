import {
    DELETE_REQ_ERR,
    DELETE_REQ_START,
    DELETE_REQ_SUCCESS
} from '../actions/DeleteTask/index';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    todos: []
};

export default function todoDeleteReducer(state = initialState, action) {
    switch(action.type) {
        case DELETE_REQ_START:
            return { ...state, loading: true };
        case DELETE_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case DELETE_REQ_SUCCESS:
            return { ...state, loading: false, success: true, todos: action.payload };
            
        default:
            return state;
    }
};

