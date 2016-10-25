import { createAction } from 'redux-actions';
import { createTypes } from '../utils';

export const PREFIX = 'BUS';

// export const TYPES = {
//     GET_BUS_INFO: `${PREFIX}/GET_BUS_INFO`
// };

export const TYPES = createTypes(PREFIX, [
    "GET_BUS_INFO",
]);


// Actions

export const get_bus_info = createAction(TYPES.GET_BUS_INFO);
