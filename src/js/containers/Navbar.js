/**
 * Created by IT on 16/10/24.
 */

import React, {Component} from 'react';


export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">塑云科技LOGO</a>
                    </div>
                    <ul className="nav pull-right">
                        <li className="nav-item active"><a href="#">返回首页</a></li>
                        <li className="nav-item"><a href="#">系统管理</a></li>
                        <li className="nav-item"><a href="#">注销</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
