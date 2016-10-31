import React,{Component} from 'react';
import Modal from 'react-modal';
import Button from '../../components/Button';
import "./bus_activity.scss"
import "../../components/Modal/modal.scss"

class BusActivity extends Component{

    constructor(props){
        super(props);
        this.state = { modalIsOpen: false };
        this.href = this.href.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openModal(){
        this.setState({modalIsOpen: true});
    }

    href(){
        window.location.href = "/bus_overview.html";
    }

    render(){
        return (
            <aside className="sidebar">
                <div className="close_button"><i className="open fa fa-expand" aria-hidden="true" onClick={this.openModal}/></div>
                <ul className="action-menu">
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B88888 启动</span></li>
                    <li className="menu-item dead"><span onClick={this.href}><img src="img/icons/dead.png"/> 2016.10.29 10:50 粤B19302 停车</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:50 粤B7AD32 故障</span></li>
                    <li className="menu-item warn"><span onClick={this.href}><img src="img/icons/warn.png"/> 2016.10.29 10:50 粤B88888 故障</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:49 粤B88888 故障</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:48 粤B8C1345 启动</span></li>
                    <li className="menu-item error"><span onClick={this.href}><img src="img/icons/error.png"/> 2016.10.29 10:47 粤B163873 熄火</span></li>
                    <li className="menu-item normal"><span onClick={this.href}><img src="img/icons/normal.png"/> 2016.10.29 10:46 粤B81920 启动</span></li>
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
                        <Button className="button" label="查询" />

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

}

export default BusActivity;

