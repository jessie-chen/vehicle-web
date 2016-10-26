import { createAction } from 'redux-actions';
import { createTypes, http } from '../utils';

export const PREFIX = 'bus';

export const TYPES = createTypes(PREFIX, [
    "GET_BUS_INFO",
    "GET_CAN_STATICS_DATA"
]);


// Actions

export const get_bus_info = createAction(
    TYPES.GET_BUS_INFO,
    (id) => http.get(`/vehicle/busInfo/${id}`)
);

export const get_can_statics_data = createAction(
    TYPES.CAN_STATICS_DATA,
    (id, parts_code) => {
        /*
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];
        */
        const randValue = () => Math.round(Math.random() * 1000);
        const hour = [1,2,3,4,5,6,7,8,9,10,11,12];
        const data = hour.map(h => {
            const vals = parts_code.reduce((total, curr) => {
                total[curr] = randValue();
                return total;
            }, {});
            return {name: h, ...vals};
        });

        // console.log(data);

        return Promise.resolve(data);
    }
);
