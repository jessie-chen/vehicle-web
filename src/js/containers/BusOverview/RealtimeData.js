/**
 * Created by IT on 16/10/24.
 */

import React, { Component } from 'react';


class RealtimeData extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="realtime-data-container">
                <div className="realtime-data">
                    <div className="motor">
                        <div className="info-box">
                            <h1>驱动电机</h1>
                            <ul>
                                <li>转速: 2000rpm</li>
                                <li>转距: 300NM</li>
                                <li>温度: 50C</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cooling">
                        <div className="info-box">
                            <h1>散热系统</h1>
                            <ul>
                                <li>进口水温: 40C</li>
                                <li>出口水温: 40C</li>
                                <li>水压: 50Pa</li>
                            </ul>
                        </div>
                    </div>
                    <div className="hms">
                        <div className="info-box">
                            <h1>HMS</h1>
                            <ul>
                                <li>阀状态</li>
                                <li>浓度1</li>
                                <li>浓度2</li>
                                <li>剩余量</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bms">
                        <div className="info-box">
                            <h1>动力蓄电池组</h1>
                            <ul>
                                <li>电芯单体:</li>
                                <li>温度min:50C</li>
                                <li>温度max:50C</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h2_bottle">
                        <div className="info-box">
                            <h1>氢瓶</h1>
                            <ul>
                                <li>氢瓶1: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶2: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶3: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶4: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶5: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶6: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶7: 压力=10 阀门状态=开 温度=10C</li>
                                <li>氢瓶8: 压力=10 阀门状态=开 温度=10C</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RealtimeData;
