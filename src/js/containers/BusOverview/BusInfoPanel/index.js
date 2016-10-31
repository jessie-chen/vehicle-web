/**
 * Created by IT on 16/10/24.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { PREFIX, TYPES, get_bus_info } from '../../../actions/bus';
import InfoBoxFrame from '../../../components/InfoBox/index';
import "./index.scss";
@connect(state => state[PREFIX])
class BusInfoPanel extends Component {

    constructor(props) {
        super(props);
        this.fetchBusInfo = this.fetchBusInfo.bind(this);
    }

    fetchBusInfo() {
        const { dispatch } = this.props;
        let bus_id = '576c6b48cdcb4983b2691d0c4adec50f';
        dispatch(get_bus_info(bus_id));
    }

    render() {
        const {buss_info} = this.props;
        let dashboard = <i className="fa fa-tachometer" aria-hidden="true"> </i>;
        let licence = <i className="fa fa-id-card" aria-hidden="true"> </i>;
        return (
            <div className="row">
                    <div className="col-xs-12 col-md-4 outside-box">
                        <span className="bus-pic"><i className="blue-bus"> </i></span>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <InfoBoxFrame size = "small" title = "详细车辆信息">
                            <div className="car_detail_panel">
                                <div><span className="left-content">{licence}<label>车牌:</label><i>粤B00102f</i></span> <span className="right-content">{dashboard}<label>当前时速:</label><i>3km/h</i></span></div>
                                <div><span className="left-content">{licence}<label>编号:</label><i>026</i></span> <span className="right-content">{dashboard}<label>续驶里程:</label><i>12km/h</i></span></div>
                                <div><span className="left-content">{licence}<label>状态:</label><i>运行中</i></span> <span className="right-content">{dashboard}<label>总里程:</label><i>50km</i></span></div>
                                <div><span>{licence}<label>类型:</label><i>飞驰11米氢燃料电池车</i></span></div>
                            </div>
                        </InfoBoxFrame>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <InfoBoxFrame size = "small" title = "历史动态">
                            <div className="history-panel">
                                <div className="history-title">车辆运行动态:</div>
                                <div className="history-content">
                                    <div >- 2016年10月1日 7:01,ACC on</div>
                                    <div>- 2016年10月1日 8:01,氢气压力低</div>
                                    <div>- 2016年10月1日 10:01,散热系统水温过高</div>
                                </div>
                            </div>
                        </InfoBoxFrame>
                    </div>
            </div>
        )
    }
}

export default BusInfoPanel;