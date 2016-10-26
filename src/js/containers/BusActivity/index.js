var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//var Button = require('../Button/index');
import "./bus_activity.scss"
import "../../components/Modal/modal.scss"

var BusActivity = React.createClass({
    
    getInitialState: function() {
        return { modalIsOpen: false };
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    afterOpenModal: function() {
        // references are now sync'd and can be accessed.
        //this.refs.subtitle.style.color = '#f00';
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    openModal: function(){
        this.setState({modalIsOpen: true});
    },

    href: function (){
        window.location.href = "#";
    },

    render: function(){
        return (
            <aside className="sidebar">
                <div className="close_button"><i className="open fa fa-expand" aria-hidden="true" onClick={this.openModal}/></div>
                <ul className="action-menu">
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B88888 启动</span></li>
                    <li className="menu-item dead"><span onClick={this.href}><img src="img/icons/dead.png"/> 2016.10.29 10:50 粤B88888 停车</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B88888 故障</span>
                        <ul>
                            <li>xxxxxx</li>
                            <li>yyyyyyyyyyyyyy</li>
                        </ul>
                    </li>
                    <li className="menu-item warn"><span onClick={this.href}><img src="img/icons/warn.png"/> 2016.10.29 10:50 粤B88888 故障</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B88888 故障</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B88888 启动</span></li>
                    <li className="menu-item error"><span onClick={this.href}><img src="img/icons/error.png"/> 2016.10.29 10:50 粤B88888 熄火</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B88888 启动</span></li>
                </ul>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="modal"
                    overlayClassName="overlay"
                    contentLabel=""
                >
                    <div className="header">
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
                        <span>
                            <select name="begin_time" id="begin_time">
                                <option checked="checked">所有车队</option>
                                <option>车队1</option>
                                <option>车队2</option>
                                <option>车队3</option>
                            </select>
                        </span>
                        <span>
                            <select name="begin_time" id="begin_time">
                                <option checked="checked">所有车辆</option>
                                <option>车辆1</option>
                                <option>车辆2</option>
                                <option>车辆3</option>
                            </select>
                        </span>
                        <span>
                            <select name="begin_time" id="begin_time">
                                <option checked="checked">所有级别</option>
                                <option>故障</option>
                                <option>预警</option>
                                <option>提示</option>
                            </select>
                        </span>
                        <button className="button" >查询</button>

                        <i className="close fa fa-compress" aria-hidden="true" onClick={this.closeModal}/>
                    </div>
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>时间</th>
                                    <th>车牌号</th>
                                    <th>状态</th>
                                    <th>故障详情</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="normal">
                                    <td><img src="img/icons/normal.png"/> 2016.10.29 10:50 </td>
                                    <td>粤B88888 </td>
                                    <td>启动</td>
                                    <td></td>
                                </tr>
                                <tr className="error">
                                    <td><img src="img/icons/error.png"/> 2016.10.29 10:50 </td>
                                    <td>粤B88888 </td>
                                    <td>启动</td>
                                    <td>燃料电池结合阀前氧压力过高</td>
                                </tr>
                                <tr className="normal">
                                    <td><img src="img/icons/normal.png"/> 2016.10.29 10:50 </td>
                                    <td>粤B88888 </td>
                                    <td>启动</td>
                                    <td></td>
                                </tr>
                                <tr className="normal">
                                    <td><img src="img/icons/normal.png"/> 2016.10.29 10:50 </td>
                                    <td>粤B88888 </td>
                                    <td>启动</td>
                                    <td></td>
                                </tr>
                                <tr className="normal">
                                    <td><img src="img/icons/normal.png"/> 2016.10.29 10:50 </td>
                                    <td>粤B88888 </td>
                                    <td>启动</td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </Modal>
            </aside>
        );
    }

});

export default BusActivity;

