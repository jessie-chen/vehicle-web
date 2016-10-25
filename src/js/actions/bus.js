import { createAction } from 'redux-actions';
import { createTypes, http } from '../utils';

export const PREFIX = 'bus';

export const TYPES = createTypes(PREFIX, [
    "GET_BUS_INFO"
]);


// Actions

export const get_bus_info = createAction(
    TYPES.GET_BUS_INFO,
    (id) => http.get(`/vehicle/busInfo/${id}`)
);


