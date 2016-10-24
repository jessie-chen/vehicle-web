/**
 * Created by IT on 16/10/24.
 */

import React, {Component} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BusGroupTree from '../BusGroupTree';
import BusInfoPanel from './BusInfoPanel';


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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}


export default BusOverview;