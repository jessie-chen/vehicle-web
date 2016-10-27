/**
 * Created by IT on 16/10/24.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { PREFIX, TYPES, get_bus_info } from '../../actions/bus';
import InfoBoxFrame from '../../components/InfoBox/index';
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
        return (
            <div>
              <InfoBoxFrame size = "small">

              </InfoBoxFrame>
            </div>
        )
    }
}

export default BusInfoPanel;