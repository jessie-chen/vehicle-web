
import typeToReducer from 'type-to-reducer';
import { TYPES } from '../actions/bus';

const initialState = {
    bus_info: {}
};

export default typeToReducer({
    [TYPES.GET_BUS_INFO]: {
        PENDING: (state, action) => ({

        }),
        FULFILLED: (state, action) => ({
            
        }),
        REJECTED: (state, action) => ({

        })
    }
});