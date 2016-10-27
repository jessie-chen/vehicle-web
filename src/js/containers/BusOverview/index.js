/**
 * Created by IT on 16/10/24.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Tab, Tabs, TabList, TabPanel } from '../../components/Tab';
import BusGroupTree from '../BusGroupTree';
import BusInfoPanel from './BusInfoPanel/index';
import RealtimeData from './RealtimeData';
import HistoryActivity from './HistoryActivity';
import CanDataDashboard from './CanDataDashboard';
import CanDataDetail from './CanDataDetail/index';


class BusOverview extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar/>

                <div className="main">
                    <div className="container">
                        <div className="main-content">

                            <div className="left-panel">
                                <div className="bus-list">
                                    <BusGroupTree/>
                                </div>
                            </div>

                            <div className="right-panel">
                                <div className="bus-info">
                                    <BusInfoPanel/>
                                </div>

                                <div className="tab-container">
                                    <Tabs className="trapezoid" selectedIndex={1}>
                                        <TabList>
                                            <Tab>实时数据</Tab>
                                            <Tab>统计图表</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <RealtimeData/>
                                        </TabPanel>
                                        <TabPanel>
                                            <CanDataDashboard/>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HistoryActivity/>
                <CanDataDetail/>
                <Footer/>
            </div>
        )
    }
}

export default BusOverview;