/**
 * Created by IT on 16/10/24.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Tab, Tabs, TabList, TabPanel } from '../../components/Tab';
import BusGroupTree from '../BusGroupTree';
import BusInfoPanel from './BusInfoPanel';
import RealtimeData from './RealtimeData';
import History from './History';
import CanDataDashboard from './CanDataDashboard';


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

                                            {/*
                                            <Tab>氢管理系统</Tab>
                                            <Tab>燃料电池系统</Tab>
                                            <Tab>电池系统</Tab>
                                            <Tab>DCF</Tab>
                                            <Tab>DCL</Tab>
                                            <Tab>动力系统</Tab>
                                            */}

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
                <History/>
                <Footer/>
            </div>
        )
    }
}

export default BusOverview;