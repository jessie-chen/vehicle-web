/**
 * Created by IT on 16/10/25.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//var Button = require('../Button/index');
import "./modal.scss"


/*
 The app element allows you to specify the portion of your app that should be hidden (via aria-hidden)
 to prevent assistive technologies such as screenreaders from reading content outside of the content of
 your modal.  It can be specified in the following ways:

 * element
 Modal.setAppElement(appElement);

 * query selector - uses the first element found if you pass in a class.
 Modal.setAppElement('#your-app-element');

 */
var appElement = document.getElementById('modal');

var App = React.createClass({

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

    render: function() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className="modal"
                    overlayClassName="overlay"
                    contentLabel="Example Modal"
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
            </div>
        );
    }
});
// isOpen={this.state.modalIsOpen}
ReactDOM.render(<App/>, appElement);
