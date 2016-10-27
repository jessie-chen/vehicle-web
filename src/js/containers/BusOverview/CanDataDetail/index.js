import React, {Component} from 'react';
import Modal from '../../../components/Modal';
import {Tab, Tabs, TabList, TabPanel} from '../../../components/Tab';
import BatterySys from "./BatterySys"
import DCF from "./DCF"
import DCL from "./DCL"
import FuelBatterySys from "./FuelBatterySys"
import HManageSys from "./HManageSys"
import PowerSys from "./PowerSys"


class CanDataDetail  extends Component{

    constructor(){
        super();
        this.state = { modalIsOpen: true};
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openModal () {
        this.setState({modalIsOpen: true});
    }

    href() {
        window.location.href = "#";
    }

    render() {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="">
                <Tabs className="rectangle" selectedIndex={1}>
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

}

export default CanDataDetail;
