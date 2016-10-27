import React, {Component} from 'react';
import classname from 'classname';
import "./button.scss"

class Button extends Component {

    static propTypes = {
        className : React.PropTypes.string,
        onClick : React.PropTypes.func,
        label : React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.className;
        const label = this.props.label;
        return (
            <button className={classname("button", className)} onClick={this.props.onClick}>{label}</button>
        )
    }
}

export default Button;



