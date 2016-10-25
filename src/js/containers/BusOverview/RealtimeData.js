/**
 * Created by IT on 16/10/24.
 */

import React, { Component } from 'react';
import BusChart from '../BusChart';


export default class RealtimeData extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Realtime data</h1>
                <BusChart bus_id="1" parts_code="1001,1002" />
                <BusChart bus_id="1" parts_code={{code:"1001",type:"area"}} type="bar"/>

            </div>
        )
    }
}

