import React, { Component }  from "react"
import BusChart from '../../../components/BusChart';
import { connect } from 'react-redux';
import {PREFIX, get_can_statics_data} from '../../../actions/bus';

@connect(state => state[PREFIX])
class BatterySys extends Component{

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

    render(){
        const { bus_id, can_statics_data } = this.props;

        return (
            <div className="row">
                <div className="condition col-xs-12 col-md-4 col-lg-4">
                    <span>
                        起始时间
                        <select name="begin_time" id="begin_time">
                            <option checked="checked">2016/10/25</option>
                        </select>
                    </span>
                    <span>
                        结束时间
                        <select name="begin_time" id="begin_time">
                            <option checked="checked">2016/10/25</option>
                        </select>
                    </span>
                    <button className="button" >查询</button>
                </div>
                <div className="col-xs-6">
                    <BusChart bus_id={bus_id} parts_code={{code:"1001",type:"area"}} data={can_statics_data} />
                </div>
                <div className="col-xs-6">
                    <BusChart bus_id={bus_id} parts_code={{code:"1001",type:"area"}} data={can_statics_data} />
                </div>
            </div>
        )
    }
}
export default  BatterySys;
