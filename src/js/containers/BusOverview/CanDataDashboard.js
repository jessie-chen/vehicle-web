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
            parts_code: ["1001", "1002", "1101", "1102", "1201", "1202", "1301", "1302", "1401", "1402", "1501", "1502", "1601", "1602"]
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

        // 2x2
        const width = 180, height = 100, margin = {top: 5, bottom: 5, left: 5, right: 5};
        const parts_code_of_h2 = [{code:"1001", type:"area"}, {code:"1002", type:"area"}, {code:"1003", type:"area"}];
        const parts_code_of_fc = [{code:"1101", type:"area"}, {code:"1102", type:"area"}];
        const parts_code_of_bms = [{code:"1201", type:"area"}, {code:"1202", type:"area"}];
        const parts_code_of_dcf = [{code:"1301", type:"line"}, {code:"1302", type:"line"}];
        const parts_code_of_dcl1 = [{code:"1401", type:"line"}, {code:"1402", type:"line"}];
        const parts_code_of_dcl2 = [{code:"1501", type:"line"}, {code:"1502", type:"line"}];
        const parts_code_of_ps = [{code:"1601", type:"bar"}, {code:"1602", type:"line"}];

        const height_fc = 67;

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <GraphPanel title="氢气管理系统" className="graph-container" >
                            <div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_h2} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_h2} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_h2} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_h2} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                            </div>
                        </GraphPanel>

                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <GraphPanel title="燃料电池系统" className="graph-container" >
                            <div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_fc} data={can_statics_data} width={width} height={height_fc} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_fc} data={can_statics_data} width={width} height={height_fc} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_fc} data={can_statics_data} width={width} height={height_fc} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_fc} data={can_statics_data} width={width} height={height_fc} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_fc} data={can_statics_data} width={width} height={height_fc} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_fc} data={can_statics_data} width={width} height={height_fc} margin={margin}/>
                                    </div>
                                </div>
                            </div>
                        </GraphPanel>
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <GraphPanel title="电池系统" className="graph-container" >
                            <div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_bms} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_bms} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_bms} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_bms} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                            </div>
                        </GraphPanel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <GraphPanel title="DCF" className="graph-container" >
                            <div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                            </div>
                        </GraphPanel>
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <GraphPanel title="DCL1" className="graph-container">
                            <div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_dcf} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                            </div>
                        </GraphPanel>
                    </div>
                    <div className="col-xs-12 col-md-4 col-lg-4">
                        <GraphPanel title="动力系统" className="graph-container">
                            <div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_ps} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_ps} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_ps} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                    <div className="col-xs-6">
                                        <BusChart bus_id={bus_id} parts_code={parts_code_of_ps} data={can_statics_data} width={width} height={height} margin={margin}/>
                                    </div>
                                </div>
                            </div>
                        </GraphPanel>
                    </div>
                </div>
            </div>
        )
    }
}

export default CanDataDashboard;
