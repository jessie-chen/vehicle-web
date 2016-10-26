/**
 * Created by IT on 16/10/24.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusChart from '../../components/BusChart';
import {PREFIX, get_can_statics_data} from '../../actions/bus';


@connect(state => state[PREFIX])
class CanDataDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bus_id: 1,
            parts_code: ["1001", "1002", "2001", "2002"]
        };
    }

    componentDidMount() {
        const {dispatch, can_statics_data} = this.props;
        const {bus_id, parts_code} = this.state;
        if (can_statics_data.length <= 0) {
            dispatch(get_can_statics_data(bus_id, parts_code));
        }
    }

    render() {
        const { bus_id, can_statics_data } = this.props;
        return (
            <div>
                <h1>Dashboard</h1>
                <BusChart bus_id={bus_id} parts_code="1001,1002" data={can_statics_data} />
                <BusChart bus_id={bus_id} parts_code={{code:"1001",type:"area"}} data={can_statics_data} />
                <BusChart bus_id={bus_id} parts_code={[{code:"1001",type:"area"}, {code:"1002",type:"line"}]} data={can_statics_data} />
            </div>
        )
    }
}

export default CanDataDashboard;