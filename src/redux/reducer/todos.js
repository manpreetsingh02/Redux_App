import {
    TODO_REQ_ERR,
    TODO_REQ_START,
    TODO_REQ_SUCCESS
} from '../actions/index';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    todos: []
};

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case TODO_REQ_START:
            return { ...state, loading: true };
        case TODO_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case TODO_REQ_SUCCESS:
            return { ...state, loading: false, success: true, todos: action.payload };
            
        default:
            return state;
    }
};

