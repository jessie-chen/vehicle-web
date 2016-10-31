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
        const {size,text} = this.props;
        let sizes = this.frame_size[size];
        return (
            <div className="info_box">
                <div className={sizes+"_frame"}>
                    <span className="title-text">{text}</span>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
