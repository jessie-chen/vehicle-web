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
            elem_id: 0,
            children_clicked_id: false,
            is_elem_clicked: {},
            clicked_id:0
        }
    }
    componentDidMount(){
        const {dispatch,bus_data} = this.props;
        if (bus_data.length == 0){
            dispatch(get_bus_group());
        }
    }
    click_handler(id,obj_key) {
        var obj = this.state.is_elem_clicked;
        if (obj[obj_key] == undefined){
            obj[obj_key] = false;
        }
        obj[obj_key] = !obj[obj_key];
        console.log("change state to " + obj[obj_key]);
        this.setState({clicked_id:id,is_elem_clicked:obj});
    }
    children_clicked_handler(children_clicked_id){
        this.setState({children_clicked_id:children_clicked_id})
    }
    render_list(){
        return this.props.bus_group.map((item,index)=>{
            return <div key={index+2} id={index}>
                <div key={index+item.id} className="group-style" onClick={this.click_handler.bind(this,item.id,index)}> <span className="bus-group-name">{item.text}</span> {this.state.is_elem_clicked[index] ? <i id="title-mark" className="fa fa-angle-down" aria-hidden="true"> </i> : <i id="title-mark" className="title-mark fa fa-angle-up i-title" aria-hidden="true"> </i>}
                </div>
                <BusGroupItem key = {index+item.id+1} parentID={item.id} ul_state = {this.state.is_elem_clicked[index]} data_list = {item.bus_data} clicked={this.state.children_clicked_id} click_handler = {this.children_clicked_handler.bind(this)}/>
            </div>;
        });
    }

    render() {
        return (
            <div className="tree-home">
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
        const {data_list,clicked} = this.props;
        return data_list.map((item,index)=>{
            let {id,condition,text} = item;
            let is_clicked = clicked == id;
            let classes = "";
            if (index+1 < data_list.length){
                classes = "with-bottom";
            }
            return <li className={is_clicked ? classes + " clicked-li" : classes} key={id} onClick={this.item_click_handler.bind(this,id)}>{this.car_state_identification(condition,text,is_clicked)}</li>
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
        const {ul_state} = this.props;
        return (
            <div id={this.props.parentID} className={ul_state ? "hide-element" : "show-element"}>{this.render_list()}</div>
        )
    }
}