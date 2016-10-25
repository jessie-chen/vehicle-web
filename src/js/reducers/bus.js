
import typeToReducer from 'type-to-reducer';
import { TYPES } from '../actions/bus';

const initialState = {
    is_pending: false,
    bus_info: {
    }
};

export default typeToReducer({
    [TYPES.GET_BUS_INFO]: {
        PENDING: (state, action) => ({
            ...state,
            is_pending: true
        }),
        FULFILLED: (state, action) => ({
            ...state,
            is_pending: false,
            bus_info: action.payload
        }),
        REJECTED: (state, action) => ({
            ...state,
            is_pending: false
        })
    }
}, initialState);
