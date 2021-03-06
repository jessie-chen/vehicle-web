import { createAction } from 'redux-actions';
import { createTypes, http, range, random } from '../utils';

export const PREFIX = 'bus';

export const TYPES = createTypes(PREFIX, [
    "GET_BUS_INFO",
    "GET_CAN_STATICS_DATA",
    "GET_BUS_GROUP",
    "GET_BUS_BY_GROUP_ID"
]);


// Actions

export const get_bus_info = createAction(
    TYPES.GET_BUS_INFO,
    (id) => http.get(`/vehicle/busInfo/${id}`)
);
export const get_bus_group = createAction(
    TYPES.GET_BUS_GROUP,
    () => Promise.resolve(
        [
            {id:1,text:"车队一",bus_data:[
                {id:12,text:"车辆031",condition:0},
                {id:14,text:"车辆032",condition:1},
                {id:16,text:"车辆033",condition:2},
                {id:18,text:"车辆034",condition:3}
            ]},
            {id:2,text:"车队二",bus_data:[
                {id:22,text:"车辆011",condition:0},
                {id:24,text:"车辆012",condition:1},
                {id:26,text:"车辆013",condition:2},
                {id:28,text:"车辆014",condition:3}
            ]},
            {id:3,text:"车队三",bus_data: [
                {id:32,text:"车辆021",condition:0},
                {id:34,text:"车辆022",condition:1},
                {id:36,text:"车辆023",condition:2},
                {id:38,text:"车辆024",condition:3}
            ]}
        ]
    )
);

export const get_can_statics_data = createAction(
    TYPES.GET_CAN_STATICS_DATA,
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
        const hour = range(1,20);

        const data = hour.map(h => {
            const vals = parts_code.reduce((total, curr) => {
                total[curr] = random(50,200);
                return total;
            }, {});
            return {name: h, ...vals};
        });

        // console.log(data);

        return Promise.resolve(data);
    }
);
