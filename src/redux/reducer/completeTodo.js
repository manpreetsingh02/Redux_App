import {
    MARKCOMPLETE_REQ_ERR,
    MARKCOMPLETE_REQ_START,
    MARKCOMPLETE_REQ_SUCCESS
} from '../actions/CompleteTask/index';

const initialState = {
    loading: false,
    error: null,
    success: false,
    message: '',
    todos: []
};

export default function todoCompleteReducer(state = initialState, action) {
    switch(action.type) {
        case MARKCOMPLETE_REQ_START:
            return { ...state, loading: true };
        case MARKCOMPLETE_REQ_ERR:
            return { ...state, loading: false, error: true, message: action.message };
        case MARKCOMPLETE_REQ_SUCCESS:
            return { ...state, loading: false, success: true, todos: action.payload };
            
        default:
            return state;
    }
};

