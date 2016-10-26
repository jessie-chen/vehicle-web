var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import {Tab, Tabs, TabList, TabPanel} from '../../../components/Tab';
import "../../../components/Modal/modal.scss"
import BatterySys from "./BatterySys"
import DCF from "./DCF"
import DCL from "./DCL"
import FuelBatterySys from "./FuelBatterySys"
import HManageSys from "./HManageSys"
import PowerSys from "./PowerSys"

var CanDataDetail = React.createClass({

    getInitialState: function () {
        return {modalIsOpen: true};
    },

    openModal: function () {
        this.setState({modalIsOpen: true});
    },

    afterOpenModal: function () {
        // references are now sync'd and can be accessed.
        //this.refs.subtitle.style.color = '#f00';
    },

    closeModal: function () {
        this.setState({modalIsOpen: false});
    },

    openModal: function () {
        this.setState({modalIsOpen: true});
    },

    href: function () {
        window.location.href = "#";
    },

    render: function () {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                className="modal"
                overlayClassName="overlay"
                contentLabel="">
                <Tabs className="trapezoid" selectedIndex={1}>
                    <TabList>
                        <Tab>氢管理系统</Tab>
                        <Tab>燃料电池系统</Tab>
                        <Tab>电池系统</Tab>
                        <Tab>DCF</Tab>
                        <Tab>DCL</Tab>
                        <Tab>动力系统</Tab>
                    </TabList>

                    <TabPanel>
                        <HManageSys/>
                    </TabPanel>

                    <TabPanel>
                        <FuelBatterySys/>
                    </TabPanel>

                    <TabPanel>
                        <BatterySys/>
                    </TabPanel>

                    <TabPanel>
                        <DCF/>
                    </TabPanel>

                    <TabPanel>
                        <DCL/>
                    </TabPanel>

                    <TabPanel>
                        <PowerSys/>
                    </TabPanel>
                </Tabs>
            </Modal>
        );
    }

});

export default CanDataDetail;
