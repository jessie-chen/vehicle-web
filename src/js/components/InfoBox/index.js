import React from "react";
import "./index.scss";
export default class InfoBoxFrame extends React.Component{
    constructor(props){
        super(props);
        this.frame_size = {};
        this.identify_frame_size();
    }
    identify_frame_size(){
        const {size} = this.props;
        switch (size) {
            case "large":
                this.frame_size[size] = "large";
                break;
            case "small":
                this.frame_size[size] = "small";
                break;
            //add a new size
            default:
                this.frame_size[size] = "none";
                break;
        }
    }
    render(){
        const {size,title} = this.props;
        let sizes = this.frame_size[size];
        return (
            <div className="info_box">
                <span className="box-left"><i className={sizes+"_left"}> </i></span><span className="box-title"><i className="pentagon"><span className="title-text">{title}</span></i></span>
                <span className="box-top"><i className={sizes+"_top"}> </i></span>
                <div className="dashboard">
                    {this.props.children}
                </div>
                <span className="box-bottom"><i className={sizes+"_bottom"}> </i></span>
                <span className="box-right"><i className={sizes+"_right"}> </i></span>
            </div>
        );
    }
}
