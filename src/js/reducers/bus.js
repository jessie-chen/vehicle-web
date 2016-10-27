
import typeToReducer from 'type-to-reducer';
import { TYPES } from '../actions/bus';

const initialState = {
    is_pending: false,
    bus_info: {},
    bus_group: [],
    bus_data:[],
    can_statics_data: []
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
    },
    [TYPES.GET_BUS_GROUP]: {
        PENDING: (state, action) => ({
            ...state,
            is_pending: true
        }),
        FULFILLED: (state, action) => ({
            ...state,
            is_pending: false,
            bus_group: action.payload
        }),
        REJECTED: (state, action) => ({
            ...state,
            is_pending: false
        })
    },
    [TYPES.GET_BUS_BY_GROUP_ID]: {
        PENDING: (state, action) => ({
            ...state,
            is_pending: true
        }),
        FULFILLED: (state, action) => ({
            ...state,
            is_pending: false,
            bus_data: action.payload
        }),
        REJECTED: (state, action) => ({
            ...state,
            is_pending: false
        })
    },
    [TYPES.GET_CAN_STATICS_DATA]: {
        PENDING: (state, action) => ({
            ...state,
            is_pending: true
        }),
        FULFILLED: (state, action) => ({
            ...state,
            is_pending: false,
            can_statics_data: action.payload
        }),
        REJECTED: (state, action) => ({
            ...state,
            is_pending: false
        })
    }
}, initialState);
