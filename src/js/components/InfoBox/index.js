import React from "react";

export default class InfoBoxFrame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            frame_size:{}
        };
        this.identify_frame_size();
    }
    identify_frame_size(){
        const {size} = this.props;
        let frame_size = this.state.frame_size;
        switch (size) {
            case "large":
                frame_size[size] = "large";
                break;
            case "small":
                frame_size[size] = "small";
                break;
            //add a new size
            default:
                frame_size[size] = "none";
                break;
        }
        this.setState({frame_size:frame_size})
    }
    render(){
        let frame_size = this.state.frame_size;
        const {size} = this.props;
        let classes = frame_size[size]+"_size";
        return (
            <div className="info_box">
                <div className="box-top"><i className={classes}> </i></div>
                <div className="box-left"><i className={classes}> </i></div>
                {this.props.children}
                <div className="box-right"><i className={classes}> </i></div>
                <div className="box-bottom"><i className={classes}> </i></div>
            </div>
        );
    }
}
