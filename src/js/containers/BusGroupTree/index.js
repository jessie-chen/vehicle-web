/**
 * bus group management
 * Created by IT on 16/10/24.
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {connect} from "react-redux";
import { PREFIX, get_bus_group } from '../../actions/bus';
import "./bus_group_tree.scss"
@connect(state => state[PREFIX] )
class BusGroupTree extends Component {

    constructor() {
        super();
        this.state = {
            clicked:"",
            children_clicked:"",
            is_parent_clicked:false
        }
    }
    componentDidMount(){
        const {dispatch,bus_data} = this.props;
        if (undefined == bus_data || bus_data.length == 0){
            dispatch(get_bus_group);
        }
    }
    click_handler(id) {
        let elem_state = this.props.is_parent_clicked != true;
        this.setState({clicked:id,is_parent_clicked:elem_state});
    }
    children_clicked_handler(children_clicked_id){
        this.setState({children_clicked:children_clicked_id})
    }
    render_list(){
        return this.props.bus_group.map((item)=>{
            let is_clicked = this.state.clicked == item.id;
            return <ul className="group-style" key={item.id} onClick={this.click_handler.bind(this,item.id)}>
                {item.text} {is_clicked ? <i className="fa fa-angle-up angle" aria-hidden="true"> </i> : <i className="fa fa-angle-down angle" aria-hidden="true"> </i>}
                <BusGroupItem parentID={item.id} ul_state = {this.state.is_parent_clicked} data_list = {item.bus_data} parent_clicked = {this.state.clicked} clicked={this.state.children_clicked} click_handler = {this.children_clicked_handler.bind(this)}/>
            </ul>;
        });
    }

    render() {
        return (
            <div id="bus_group" className="tree-home">
                {this.render_list()}
            </div>
        );
    }
}

export default BusGroupTree;
class BusGroupItem extends Component{
    constructor() {
        super();
        this.state = {
            clicked:""

        };
        this.car_state_identification = this.car_state_identification.bind(this);
    }
    item_click_handler(elem_id){
        const {click_handler} = this.props;
        click_handler(elem_id);
    }
    render_list(){
        const {parentID,data_list,clicked} = this.props;
        return data_list.map((item,index)=>{
            let {id,condition,text} = item;
            let is_clicked = clicked == id;
            let classes = "";
            if (index+1 < data_list.length){
                classes = "with-bottom";
            }
            return <li className={is_clicked ? classes + " clicked-li" : classes} key={id+parentID} onClick={this.item_click_handler.bind(this,id)}>{this.car_state_identification(condition,text,is_clicked)}</li>
        })
    }
    car_state_identification(condition,text,is_clicked){
        switch (condition) {
            case 0 : //normal
                return <span className="green-elem"><i className={is_clicked ? "clicked_green" : "normal_green"}> </i>{text}</span>;
            case 1 : //warning
                return <span className="orange-elem"><i className={is_clicked ? "clicked_orange" : "normal_orange"}> </i>{text}</span>;
            case 2 : //stalled
                return <span className="gray-elem"><i className={is_clicked ? "clicked_gray" : "normal_gray"}> </i>{text}</span>;
            case 3: //breakdown
                return <span className="red-elem"><i className={is_clicked ? "clicked_red" : "normal_red"}> </i>{text}</span>
        }
    }
    render() {
        const {parent_clicked,parentID,ul_state} = this.props;
        //console.log(parent_clicked +" "+parentID+" "+ul_state);
        return (
            <div className={parent_clicked == parentID && ul_state ? "hide-element" : "show-element"} id={parentID}>{this.render_list()}</div>
        )
    }


}