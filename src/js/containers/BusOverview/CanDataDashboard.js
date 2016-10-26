/**
 * Created by IT on 16/10/24.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusChart from '../../components/BusChart';
import {PREFIX, get_can_statics_data} from '../../actions/bus';
import GraphPanel from '../../components/GraphPanel';


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
        /*

         <BusChart bus_id={bus_id} parts_code="1001,1002" data={can_statics_data} />
         <BusChart bus_id={bus_id} parts_code={{code:"1001",type:"area"}} data={can_statics_data} />
         <BusChart bus_id={bus_id} parts_code={[{code:"1001",type:"area"}, {code:"1002",type:"line"}]} data={can_statics_data} />

         */
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <GraphPanel title="氢气管理系统" className="graph-container" > </GraphPanel>
                    </div>
                    <div className="col">
                        <GraphPanel title="燃料电池系统" className="graph-container" > </GraphPanel>
                    </div>
                    <div className="col">
                        <GraphPanel title="电池系统" className="graph-container" > </GraphPanel>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <GraphPanel title="DCF" className="graph-container" > </GraphPanel>
                    </div>
                    <div className="col">
                        <GraphPanel title="DCL1" className="graph-container" > </GraphPanel>
                    </div>
                    <div className="col">
                        <GraphPanel title="动力系统" className="graph-container" > </GraphPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default CanDataDashboard;