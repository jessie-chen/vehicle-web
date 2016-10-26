import React, {Component} from 'react';
import "./button.scss"

class Button extends Component {

    constructor() {

    }

    handleClick(){
        console.log("click");
    }

    render() {
        return (
            <button onclick={this.handleClick}></button>
        )
    }
}

export default Button;



